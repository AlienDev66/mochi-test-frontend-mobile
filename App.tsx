import React from 'react';
import { ProfilesProvider } from './app/hooks/useProfiles';
import FindGithubUsersAndCompanies from './app/screen/findGithubUsersAndCompanies';

export default function App() {
    return (
        <ProfilesProvider>
            <FindGithubUsersAndCompanies />
        </ProfilesProvider>
    );
}
