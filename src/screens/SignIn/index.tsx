import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
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

export function SignIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if (userName === '' || password === '') {
            alert("Preencha todos os campos!");
            return;
        }

        const user = { userName, password };
        console.log({user});
    }

    return (
        <Container>
            <Content>
                <Title>Sign In</Title>
                <Label>Username</Label>
                <TextInputStyles
                    placeholder='my_user'
                    autoCorrect={false}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
                <Label>Password</Label>
                <TextInputStyles
                    placeholder='********'
                    autoCorrect={false}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <SignButton onPress={handleSignIn}>
                    <Text>LOGIN</Text>
                </SignButton>

                
                <TitleSocialLogin />

                <SubTitle>
                        Ou cadastre-se por meio de uma rede social:
                    </SubTitle>

                <SocialLogin>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/gmail-logo.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                            source={require('../../assets/facebook-logo.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image 
                            source={require('../../assets/apple-logo.png')}
                        />
                    </TouchableOpacity>

                </SocialLogin>
            </Content>
        </Container>
    );
}