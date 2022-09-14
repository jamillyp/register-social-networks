import { SetStateAction, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

import {
    Container,
    Content,
    Label,
    TextInputStyles,
    SignButton,
    Text,
    Title,
    Image,
    SocialLogin,
    TitleSocialLogin,
    SubTitle,
} from './styles';
import { Profile } from '../Profile';

type AuthResponse = {
    type: string;
    params: {
        access_token: string;
    }
}

export function SignIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if (userName === '' || password === '') {
            alert("Preencha todos os campos!");
            return;
        }

        const user = { userName, password };
        console.log({ user });
    };

    function handleSignInWithFacebook() {
        alert("Você vai logar com o facebook!");
    };

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '719813205363-65v44tsf552pgrl6jvodee4ih4b322kq.apps.googleusercontent.com',
        iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    function handleSignInWithGmail() {
        promptAsync();

        const data = response as AuthResponse;

        const { type } = data;

        if (type === 'success') {
            navigation.navigate("profile")

        } else {
            alert('NÃO DEU CERTO: ' + response?.type)
        }
    }

    const navigation = useNavigation();

    function handleSignInWithApple() {
        alert("Você vai logar com a apple!");
    };

    return (
        <Container>
            <Content>
                <Title>Sign In</Title>
                <Label>Username</Label>
                <TextInputStyles
                    placeholder='my_user'
                    autoCorrect={false}
                    value={userName}
                    onChangeText={(text: SetStateAction<string>) => setUserName(text)}
                />
                <Label>Password</Label>
                <TextInputStyles
                    placeholder='********'
                    autoCorrect={false}
                    value={password}
                    onChangeText={(text: SetStateAction<string>) => setPassword(text)}
                />

                <SignButton onPress={handleSignIn}>
                    <Text>LOGIN</Text>
                </SignButton>

                <TitleSocialLogin />
                <SubTitle>
                    Ou cadastre-se por meio de uma rede social:
                </SubTitle>
                <SocialLogin>
                    <TouchableOpacity onPress={handleSignInWithGmail}>
                        <Image
                            source={require('../../assets/gmail-logo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignInWithFacebook}>
                        <Image
                            source={require('../../assets/facebook-logo.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignInWithApple}>
                        <Image
                            source={require('../../assets/apple-logo.png')}
                        />
                    </TouchableOpacity>
                </SocialLogin>
            </Content>
        </Container>
    );
}