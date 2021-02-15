import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGE} from '../../assets/images/Images';

export default class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerUser}>
          <Image source={IMAGE.AVATAR_USER} style={styles.imageUser} />
        </View>
        <ScrollView style={styles.styleScrollView}>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Feather name="home" size={25} style={styles.styleIcon} />
            <Text style={styles.textStyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => this.props.navigation.navigate('SurveyList')}>
            <Feather name="file-text" size={25} style={styles.styleIcon} />
            <Text style={styles.textStyle}>Survey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => this.props.navigation.navigate('SurveyScreen')}>
            <Feather name="bookmark" size={25} style={styles.styleIcon} />
            <Text style={styles.textStyle}>Bookmarks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Feather name="user" size={25} style={styles.styleIcon} />
            <Text style={styles.textStyle}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Feather name="settings" size={25} style={styles.styleIcon} />
            <Text style={styles.textStyle}>Settings</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity
          style={styles.buttonLogOut}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Feather name="log-in" size={25} style={styles.styleIcon} />
          <Text style={styles.textStyle}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerUser: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageUser: {
    height: 160,
    width: 160,
    borderRadius: 100,
  },

  styleScrollView: {
    marginLeft: 10,
  },

  styleButton: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 5,
  },

  buttonLogOut: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingVertical: 10,
  },

  styleIcon: {
    marginRight: 25,
  },

  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
