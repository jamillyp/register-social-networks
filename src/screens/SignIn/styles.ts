import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
`;

export const Content = styled.View`
    align-items: center;
`;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
    margin-bottom: 10px;
    width: 80%;
    text-align: left;
`;

export const TextInputStyles = styled.TextInput`
    /* background: ${({ theme }) => theme.colors.grey}; */
    border: none;
    width: 320px;
    height: 48px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const SignButton = styled.TouchableOpacity`
    margin-top: 10px;
    background: ${({ theme }) => theme.colors.secondary};
    width: 320px;
    height: 48px;
    padding: 15px;
    border-radius: 5px;
`;

export const Text = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: bold;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 50px;
`;

export const Image = styled.Image`
    width: 24px;
    height: 27px;
`;

export const SocialLogin = styled.View`
    flex-direction: row;
    padding: 20px;
    justify-content: space-evenly;
    width: 50%;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
`;

export const TitleSocialLogin = styled.View`
    border-top: 2px solid;
    margin-top: 15px;
    
    height: 5px;
    background: #fff;
`;