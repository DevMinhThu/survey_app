import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Switch} from 'react-native';
import styles from './StyleSetup';
import Feather from 'react-native-vector-icons/Feather';

export default function SetupScreen() {
  const [selectedValue, setSelectedValue] = useState('English');
  const [isEnabledUpload, setIsEnabledUpload] = useState(true);
  const [isEnabledLock, setIsEnabledLock] = useState(false);

  // handle
  const toggleSwitch = () =>
    setIsEnabledUpload((previousState) => !previousState);

  const toggleSwitchLock = () =>
    setIsEnabledLock((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* upgrade */}
      <View style={styles.upgrade}>
        <Feather name="award" size={30} color="yellow" />
        <View style={styles.textUpgrade}>
          <Text style={styles.mainText}>
            Upgrade more powerfull features with paid plan
          </Text>
          <TouchableOpacity>
            <Text style={styles.extraText}>Upgrade plan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* informUser */}
      <View style={styles.informUser}>
        <Text style={styles.textInformUser}>
          You are logged in as <Text style={styles.textBold}>Linda</Text>
        </Text>
        <Text style={styles.textInformUser}>
          <Text style={styles.textBold}>Email</Text>: surveyonline@gmail.com
        </Text>
      </View>

      {/* fake view */}
      <View style={styles.fakeView} />

      {/* plan */}
      <View style={styles.containerPlan}>
        <View style={styles.leftPlan}>
          <Text style={styles.title1}>Plan</Text>
          <Text style={styles.styleDay}>Start Date</Text>
          <Text style={styles.styleDay}>2021-02-05</Text>
        </View>
        <View style={styles.rightPlan}>
          <TouchableOpacity>
            <Text style={styles.title2}>Enterprise Trial</Text>
          </TouchableOpacity>
          <Text style={styles.styleDay}>End Date</Text>
          <Text style={styles.styleDay}>2021-02-20</Text>
        </View>
      </View>
      <View style={styles.fakeView} />

      {/* Language */}
      <View style={styles.containerPicker}>
        <Text style={[styles.title1, styles.language]}>Language</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.stylePicker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Select language" value="Select language" />
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Vietnamese" value="Vietnamese" />
        </Picker>
      </View>
      <View style={styles.fakeView} />

      {/* lock mode */}
      <View style={styles.containerLockMode}>
        <View style={styles.styleUp}>
          <Text style={[styles.title1, styles.styleDetail]}>
            LOCK MODE Survey Open
          </Text>
          <Switch
            style={styles.styleSwitch}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledLock ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchLock}
            value={isEnabledLock}
          />
        </View>
        <View style={styles.styleDown}>
          <Text style={styles.lorem}>
            * Lorem ipsum may be used as a placeholder before final copy is
            available.
          </Text>
          <Text style={styles.lorem}>
            * It is also used to temporarily replace text in a process called
            greeting
          </Text>
          <Text style={styles.lorem}>
            * which allows designers to consider the form of a webpage or
            publication.
          </Text>
        </View>
      </View>
      <View style={styles.fakeView} />

      {/* upload */}
      <View style={styles.containerUpload}>
        <View style={styles.leftPlan}>
          <Text style={styles.title1}>Upload</Text>
          <Text style={styles.sub}>Upload responses on server directly.</Text>
        </View>
        <View style={styles.rightPlan}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabledUpload ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabledUpload}
          />
        </View>
      </View>
      <View style={styles.fakeView} />

      {/* version */}
      <View style={styles.containerUpload}>
        <View style={styles.leftPlan}>
          <Text style={styles.title1}>App Version</Text>
          <Text style={styles.sub}>Current version 1.1.0</Text>
        </View>
        <View style={styles.rightPlan}>
          <TouchableOpacity>
            <Text style={styles.textUpdate}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textDelete}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}
