import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FindGithubUsersAndCompanies from './app/screen/findGithubUsersAndCompanies';

export default function App() {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <View style={styles.container}>
            <FindGithubUsersAndCompanies />
        </View>
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
