import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../../assets/images/Images';
import styles from './StyleHeader';
import Feather from 'react-native-vector-icons/Feather';

export class CustomHeader extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <View style={styles.titleApp}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={28} style={styles.styleIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Feather
              name="bell"
              size={25}
              color={'#fff'}
              style={styles.iconBell}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleHeader}>
          <Text style={styles.styleHello}>
            Hello <Text style={styles.styleTitleUser}>Survey!</Text>
          </Text>
          <TouchableOpacity
            style={styles.styleUser}
            onPress={() => navigation.navigate('Profile')}>
            <Image source={IMAGE.AVATAR_USER} style={styles.styleAvatar} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
