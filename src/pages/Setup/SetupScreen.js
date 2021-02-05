import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function SetupScreen() {
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

      {/* fake view */}
      <View style={styles.fakeView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  // upgrade
  upgrade: {
    backgroundColor: '#cccccc',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  textUpgrade: {
    marginLeft: 15,
  },

  mainText: {
    color: '#404040',
    fontSize: 15,
  },

  extraText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006bb3',
    marginTop: 5,
  },

  // informUser
  informUser: {
    marginTop: 20,
  },

  textInformUser: {
    fontSize: 16,
    marginVertical: 5,
  },

  textBold: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  // fakeView
  fakeView: {
    backgroundColor: '#cccccc',
    height: 1.5,
    marginTop: 5,
  },

  // plan
  containerPlan: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },

  leftPlan: {
    flex: 1,
  },

  rightPlan: {
    flex: 1,
    alignItems: 'flex-end',
  },

  title1: {
    fontSize: 20,
    marginBottom: 10,
  },

  styleDay: {
    fontSize: 15,
  },

  title2: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#006bb3',
  },
});
