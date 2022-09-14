// import { Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Content, SignButton, Text, Title } from "../SignIn/styles";

// import { 
//     Container, 
// } from "./styles";

export function Profile() {
    const navigation = useNavigation();

    function handleSignOut() {
        navigation.navigate('/');
    }
    return (
        <Container>
            <Content>
                <Title>Profile</Title>

                <SignButton onPress={handleSignOut}>
                    <Text>Sign Out</Text>
                </SignButton>
            </Content>
        </Container>
    );
}