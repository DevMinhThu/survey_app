import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './StyleRegister';
import {Root, Popup} from 'popup-ui';
import {firebaseApp} from '../../constants/FirebaseConfig';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Popup.show({
          type: 'Success',
          title: 'Register successfully',
          button: true,
          textBody: 'Congrats! Successfully registered email ' + email,
          buttonText: 'Login',
          callback: () => Popup.hide(navigation.navigate('Login')),
        });
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        Popup.show({
          type: 'Danger',
          title: 'Registration failed',
          button: true,
          textBody: 'Invalid registered account or password!',
          buttonText: 'Ok',
          callback: () => Popup.hide(),
        });
      });
  };

  return (
    <Root>
      <ScrollView style={styles.container}>
        <Image
          style={{width: windowWidth, height: windowHeight / 3.5}}
          source={require('../../assets/images/register.png')}
        />
        <Text style={styles.styleTitle}>Register Now!</Text>
        <Text style={styles.subTitle}>Enter information here.</Text>

        {/* Input username and password */}
        <TextInput
          style={styles.styleInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.styleInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        {/* button login */}
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.styleButton} onPress={handleRegister}>
            <Text style={styles.textButton}>Create</Text>
          </TouchableOpacity>

          <View style={styles.createAcc}>
            <Text style={{color: 'gray'}}>Already have an account </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginHere}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Root>
  );
}
