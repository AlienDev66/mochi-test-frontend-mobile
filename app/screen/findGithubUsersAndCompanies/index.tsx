import React, { useState } from 'react';
import { ReactNode } from 'react';
import InputSearch from '../../components/inputSearch';
import { Container, SearchInputTitle, SearchInputLabel } from './styles';
import Profiles from '../../components/profiles';

interface FindGithubUsersAndCompaniesProps {
    children?: ReactNode;
}

const FindGithubUsersAndCompanies: React.FC = ({
    children
}: FindGithubUsersAndCompaniesProps) => {
    const [isLoading, setIsLoading] = useState(false);

    function search() {
        setIsLoading(!isLoading);
    }

    return (
        <Container>
            <SearchInputLabel>
                <SearchInputTitle>
                    Search for{'\n'}Github Users
                </SearchInputTitle>
                <InputSearch
                    isLoading={isLoading}
                    onPress={search}
                    onChangeText={(text: any) => {
                        console.log(text);
                    }}
                />
            </SearchInputLabel>

            {/* <InitialState>
                <Feather name="search" size={55} color="#D1D9E2" />
                <InitialText>
                    Enter a login, name or a company you are looking for.
                </InitialText>
            </InitialState> */}
            <Profiles />
        </Container>
    );
};

export default FindGithubUsersAndCompanies;
