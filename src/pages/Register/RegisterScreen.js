import React, {useState} from 'react';
import {Text, View, TextInput, Alert, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './StyleRegister';
import {firebaseApp} from '../../constants/FirebaseConfig';

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
        style={{width: '100%', height: 300}}
        source={require('../../assets/images/register.png')}
      />
      <Text style={{fontSize: 25, marginTop: 20, fontWeight: 'bold'}}>
        Register Now!
      </Text>
      <Text style={{fontSize: 16, marginTop: 20, color: 'gray'}}>
        Enter information here.
      </Text>

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
            <Text style={{fontWeight: 'bold', color: '#0d47a1'}}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
