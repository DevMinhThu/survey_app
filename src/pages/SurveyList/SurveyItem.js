import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const SurveyItem = (props, {navigation}) => {
  return (
    <TouchableOpacity
      style={[styles.containerButton, {backgroundColor: props.bg}]}
      onPress={() => navigation.navigate('Profile')}>
      <Image source={props.img} style={styles.imgItems} />

      <View style={styles.containerTextItems}>
        <Text style={styles.titleItems}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>

      <ProgressCircle
        percent={props.percent}
        radius={29}
        borderWidth={5}
        color="#f58084"
        shadowColor="#999"
        bgColor="#fff2f2">
        <Text style={styles.percent}>{props.percent}%</Text>
      </ProgressCircle>
    </TouchableOpacity>
  );
};

export default SurveyItem;

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  imgItems: {width: 60, height: 60},

  titleItems: {
    color: '#345c74',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 15,
    paddingHorizontal: 30,
    width: 200,
  },

  subTitle: {
    color: '#f58084',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 12,
    paddingHorizontal: 30,
  },

  percent: {
    color: '#345c74',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },

  containerTextItems: {},
});
