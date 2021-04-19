import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #ffff;
    align-items: center;
`;
export const ListContainer = styled.View`
    width: 300px;
    height: 65px;
    margin-top: 20px;
    padding: 10px;
    padding-top: 1px;
    padding-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
export const Avatar = styled.Image`
    width: 52px;
    height: 52px;
    border-radius: 50px;
    background-color: #acb7c5;
`;
export const ContribuitionsNumber = styled.Text`
    color: #495c7a;
`;
export const CompleteAndUsername = styled.View`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 10px;
`;
export const CompleteName = styled.Text`
    font-size: 17px;
    color: #192538;
`;
export const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #192538;
`;
export const AvatarUsernameCompleteName = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
export const Titles = styled.View`
    width: 300px;
    padding-bottom: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const TextContainer = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
