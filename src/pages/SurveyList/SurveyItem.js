import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const SurveyItem = (props) => {
  return (
    <TouchableOpacity
      style={[styles.containerButton, {backgroundColor: props.bg}]}>
      <Image source={props.img} style={styles.imgItems} />

      <View>
        <Text style={styles.titleItems}>{props.title}</Text>
        <Text style={styles.subTitle}>10 hours, 19 lessons</Text>
      </View>
      <Text style={styles.cost}>25%</Text>
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
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },

  subTitle: {
    color: '#f58084',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 12,
    paddingHorizontal: 20,
  },

  cost: {
    color: '#345c74',
    fontFamily: 'HelveticaNeueBold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
