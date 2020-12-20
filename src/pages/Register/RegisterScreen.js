import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './StyleRegister';
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
        Alert.alert(
          'Alert Title',
          'Register successfully ' + email,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ],
          {cancelable: false},
        );
        setEmail('');
        setPassword('');
      })
      .catch(function (error) {
        Alert.alert(
          'Alert Title',
          'Register fail!',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      });
  };

  return (
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
  );
}
