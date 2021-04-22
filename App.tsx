import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfilesProvider } from './app/hooks/useProfiles';
import FindGithubUsersAndCompanies from './app/screen/findGithubUsersAndCompanies';

export default function App() {
    return (
        <ProfilesProvider>
            <View style={styles.container}>
                <FindGithubUsersAndCompanies />
            </View>
        </ProfilesProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
