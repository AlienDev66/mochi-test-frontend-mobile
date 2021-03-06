import React, { FC, useState } from 'react';
import { ReactNode } from 'react';
import InputSearch from '../../components/inputSearch';
import { Container, SearchInputTitle, SearchInputLabel } from './styles';
import Profiles from '../../components/profiles';
import { Text } from 'react-native';
import { useProfiles } from '../../hooks/useProfiles';

const FindGithubUsersAndCompanies: FC = () => {
    const [username, setUsername] = useState<string>('');

    const {
        githubUsersProfiles,
        usersAreLoading,
        dealingSearchUsers,
        showMoreUsers
    } = useProfiles();

    return (
        <Container>
            <SearchInputLabel>
                <SearchInputTitle>
                    Search for{'\n'}Github Users
                </SearchInputTitle>
                <InputSearch
                    isLoading={usersAreLoading}
                    onPress={() => {
                        if (dealingSearchUsers)
                            dealingSearchUsers({ login: username });
                    }}
                    onChangeText={(user: any) => {
                        setUsername(user);
                    }}
                />
            </SearchInputLabel>

            {!usersAreLoading && (
                <Profiles userName={username} data={githubUsersProfiles} />
            )}
            <Text
                onPress={() => {
                    if (showMoreUsers) showMoreUsers(username);
                }}
                style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    color: '#D1D9E2'
                }}
            >
                SHOW MORE
            </Text>
        </Container>
    );
};

export default FindGithubUsersAndCompanies;
