import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IMAGE} from '../../assets/images/Images';
import styles from './StyleHeader';

export class CustomHeader extends Component {
  render() {
    let {navigation} = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.titleApp}>
          <Text style={styles.styleHello}>
            Hello <Text style={styles.styleTitleUser}>Survey</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.styleUser}
          onPress={() => navigation.openDrawer()}>
          <Image source={IMAGE.AVATAR_USER} style={styles.styleAvatar} />
        </TouchableOpacity>
      </View>
    );
  }
}
