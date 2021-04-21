import React, { useState } from 'react';
import { ReactNode } from 'react';
import InputSearch from '../../components/inputSearch';
import {
    Container,
    SearchInputTitle,
    SearchInputLabel,
    InitialState,
    InitialText
} from './styles';
import Profiles from '../../components/profiles';
import { Text, TouchableOpacity } from 'react-native';
import { useProfiles } from '../../hooks/useProfiles';
import { Feather } from '@expo/vector-icons';

interface FindGithubUsersAndCompaniesProps {
    children?: ReactNode;
}

const FindGithubUsersAndCompanies: React.FC = ({
    children
}: FindGithubUsersAndCompaniesProps) => {
    const [username, setUsername] = useState<string>('');

    const {
        githubUsersProfiles,
        clearUsersList,
        usersAreLoading,
        dealingSearchUsers,
        getUsersByType,
        showMoreUsers,
        testFlow
    } = useProfiles();

    return (
        <Container>
            <SearchInputLabel>
                <SearchInputTitle>
                    Search for{'\n'}Github Users
                </SearchInputTitle>
                <InputSearch
                    // value={username}
                    isLoading={usersAreLoading}
                    onPress={() => {
                        if (dealingSearchUsers)
                            dealingSearchUsers({ login: username });
                    }}
                    onChangeText={(text: any) => {
                        console.log(text);
                        setUsername(text);
                    }}
                />
            </SearchInputLabel>

            <InitialState>
                <Feather name="search" size={55} color="#D1D9E2" />
                <InitialText>
                    Enter a login, name or a company you are looking for.
                </InitialText>
            </InitialState>

            {!usersAreLoading && (
                <Profiles
                    type={'User' || 'Organization'}
                    data={
                        getUsersByType
                            ? getUsersByType({
                                  type: 'User' && 'Organization'
                              })
                            : getUsersByType
                    }
                />
            )}
        </Container>
    );
};

export default FindGithubUsersAndCompanies;
