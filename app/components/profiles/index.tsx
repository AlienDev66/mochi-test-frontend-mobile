import React, { useState } from 'react';
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

const Profiles: React.FC<ProfileListProps> = ({ data, type }) => {
    const FirstRoute = () =>
        type === 'User' ? listProfiles('User') : <Text>Sem users</Text>;

    const SecondRoute = () =>
        type === 'Organization' ? (
            listProfiles('Company')
        ) : (
            <Text>Sem organizações</Text>
        );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute
    });

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        {
            key: 'first',
            title: `USERS (${type === 'User' ? data?.users?.length : 0})`
        },
        {
            key: 'second',
            title: `COMPANIES (${
                type === 'Organization' ? data?.users?.length : 0
            })`
        }
    ]);

    function listProfiles(type: string) {
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
                    {type === 'User' && (
                        <>
                            <TextContainer>
                                <Text style={{ color: '#192538' }}>USER</Text>
                                <Feather name="chevron-down" />
                            </TextContainer>

                            <TextContainer>
                                <Text style={{ color: '#8B929C' }}>
                                    CONTRIBUITIONS
                                </Text>
                                <Feather name="chevron-down" />
                            </TextContainer>
                        </>
                    )}
                    {type === 'Company' && (
                        <>
                            <TextContainer>
                                <Text style={{ color: '#192538' }}>
                                    COMPANY
                                </Text>
                                <Feather name="chevron-down" />
                            </TextContainer>

                            <TextContainer>
                                <Text style={{ color: '#8B929C' }}>
                                    PEAOPLE
                                </Text>
                                <Feather name="chevron-down" />
                            </TextContainer>
                        </>
                    )}
                </Titles>

                <ScrollView>
                    {data?.users?.map((user) => {
                        return (
                            <ListContainer
                                key={Math.random()}
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#D1D9E2'
                                }}
                            >
                                <AvatarUsernameCompleteName>
                                    <Avatar
                                        source={{ uri: user?.avatar_url }}
                                    />
                                    <CompleteAndUsername>
                                        <UserName>{user?.login}</UserName>
                                        <CompleteName>
                                            {user?.name || ' '}
                                        </CompleteName>
                                    </CompleteAndUsername>
                                </AvatarUsernameCompleteName>

                                <ContribuitionsNumber>
                                    {user?.total}
                                </ContribuitionsNumber>
                            </ListContainer>
                        );
                    })}
                </ScrollView>
            </>
        );
    }

    return (
        <Container>
            {data?.users?.length !== 0 && (
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
