import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {IMAGE} from '../../assets/images/Images';
import styles from './StyleHeader';

export class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.titleApp}>
          <Text style={styles.styleHello}>
            Hello <Text style={styles.styleTitleUser}>Survey</Text>
          </Text>
        </View>
        <View style={styles.styleUser}>
          <Image source={IMAGE.AVATAR_USER} style={styles.styleAvatar} />
        </View>
      </View>
    );
  }
}
