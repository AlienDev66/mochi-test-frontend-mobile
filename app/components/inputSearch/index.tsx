import React from 'react';
import { Container, SearchButton, SearchInput } from './styles';
import { Feather } from '@expo/vector-icons';
import { SkypeIndicator } from 'react-native-indicators';
import InputSearchProps from './inputSearch.type';

const InputSearch: React.FC<InputSearchProps> = ({
    children,
    isLoading,
    onPress,
    ...rest
}) => (
    <Container>
        <SearchInput {...rest} placeholder="Type a user name here" />
        <SearchButton disabled={isLoading} onPress={onPress}>
            {isLoading && <SkypeIndicator size={15} color="#ffff" />}
            {!isLoading && <Feather name="search" size={15} color="#ffff" />}
        </SearchButton>
    </Container>
);
export default InputSearch;
