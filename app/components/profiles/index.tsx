import React, { useCallback, useState } from 'react';
import {
    Container,
    ListContainer,
    Avatar,
    ContribuitionsNumber,
    CompleteAndUsername,
    CompleteName,
    UserName,
    AvatarUsernameCompleteName,
    Titles,
    TextContainer,
    NoFound,
    NumberFound,
    Message
} from './styles';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ScrollView, Text } from 'react-native';
import { ProfileListProps } from './profiles.type';
import { Feather } from '@expo/vector-icons';
import {
    InitialState,
    InitialText
} from '../../screen/findGithubUsersAndCompanies/styles';

const Profiles: React.FC<ProfileListProps> = ({ data, userName }) => {
    const [index, setIndex] = useState(0);
    const FirstRoute = () => listProfiles('User');

    const SecondRoute = () => listProfiles('Organization');

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute
    });

    const dataUser = data?.users?.filter(
        (user) => user?.type === 'Organization'
    );
    const dataUserOrg = data?.users?.filter((user) => user?.type === 'User');

    const [routes] = useState([
        {
            key: 'first',
            title: `USERS (${dataUserOrg?.length || 0})`
        },
        {
            key: 'second',
            title: `COMPANIES (${dataUser?.length || 0})`
        }
    ]);

    function getUser(type: string) {
        const dataUser = data?.users?.filter((user) => user?.type === type);

        return (
            <ScrollView>
                {dataUser?.map((user) => (
                    <ListContainer
                        key={Math.random()}
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#D1D9E2'
                        }}
                    >
                        <AvatarUsernameCompleteName>
                            <Avatar source={{ uri: user?.avatar_url }} />
                            <CompleteAndUsername>
                                <UserName>{user?.login}</UserName>
                                <CompleteName>{user?.name || ' '}</CompleteName>
                            </CompleteAndUsername>
                        </AvatarUsernameCompleteName>

                        <ContribuitionsNumber>
                            {user?.total}
                        </ContribuitionsNumber>
                    </ListContainer>
                ))}
            </ScrollView>
        );
    }

    const listProfiles = useCallback((type: string) => {
        return (
            <>
                {!data?.users?.length && (
                    <NoFound>
                        <NumberFound>0</NumberFound>
                        <Message>
                            Humm... We didn't find any{' '}
                            {type === 'User' ? `users` : 'companies'}...
                        </Message>
                    </NoFound>
                )}
                <Titles
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#D1D9E2'
                    }}
                >
                    <>
                        <TextContainer>
                            <Text style={{ color: '#192538' }}>
                                {type === 'User' ? 'USER' : 'COMPANY'}
                            </Text>
                            <Feather name="chevron-down" />
                        </TextContainer>

                        <TextContainer>
                            <Text style={{ color: '#8B929C' }}>
                                {type === 'User' ? 'CONTRIBUITIONS' : 'PEAOPLE'}
                            </Text>
                            <Feather name="chevron-down" />
                        </TextContainer>
                    </>
                </Titles>

                {getUser(type)}
            </>
        );
    }, []);

    return (
        <Container>
            {!data && userName === '' && (
                <InitialState>
                    <Feather name="search" size={55} color="#D1D9E2" />
                    <InitialText>
                        Enter a login, name or a company you are looking for.
                    </InitialText>
                </InitialState>
            )}
            {data && (
                <TabView
                    style={{
                        paddingTop: 25,
                        width: 300
                    }}
                    sceneContainerStyle={{
                        alignItems: 'center'
                    }}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                />
            )}
        </Container>
    );
};

export default Profiles;
