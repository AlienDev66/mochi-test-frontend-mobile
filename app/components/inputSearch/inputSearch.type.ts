import { ReactNode } from 'react';

type InputSearchProps = {
    onPress: () => void;
    onChangeText: Function;
    children?: ReactNode;
    isLoading?: boolean;
};

export default InputSearchProps;
