import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    width: 300px;
    height: 50px;
    margin-left: 25px;
    margin-right: 25px;
    border-color: gray;
    border-radius: 5px;
    border: 1px solid #acb7c5;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
    height: 50px;
    width: 85%;
    background-color: transparent;
    color: black;
    padding: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
    height: 32px;
    width: 32px;
    background-color: #c200b9;
    border-radius: 2px;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
`;
