import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {IMAGE} from '../../assets/images/Images';
import SurveyItem from './SurveyItem';

const SurveyList = ({navigation}) => {
  return (
    <View style={styles.styleImgBackground}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonBack}>
          <Image source={IMAGE.BACK} style={styles.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDraw}>
          <Image source={IMAGE.DRAW} style={styles.iconHeader} />
        </TouchableOpacity>
      </View>

      {/* title */}
      <Text style={styles.title}>Survey List</Text>

      {/* Madalize */}
      <Modalize
        handleStyle={styles.styleHandle}
        modalStyle={styles.styleModal}
        alwaysOpen={550}
        scrollViewProps={{showsVerticalScrollIndicator: false}}>
        <View style={styles.containerItemList}>
          <SurveyItem
            img={IMAGE.VIRUS}
            title="Disease Situation"
            bg="#fcf2ff"
            subTitle="CN lúc 11:09"
            percent="65"
          />
          <SurveyItem
            img={require('../../assets/images/workHome.webp')}
            title="Work from Home"
            bg="#fef8e3"
            subTitle="Hôm qua lúc 17:13"
            percent="86"
          />
          <SurveyItem
            img={require('../../assets/images/education.png')}
            title="Education"
            bg="#fdddf3"
            subTitle="8 giờ trước"
            percent="25"
          />
          <SurveyItem
            img={require('../../assets/images/media.png')}
            title="Social Media"
            bg="#99ddff"
            subTitle="T.3 lúc 13:28"
            percent="75"
          />
          <SurveyItem
            img={require('../../assets/images/lifeQuality.png')}
            title="Life Quality"
            bg="#fff0ee"
            subTitle="T.2 lúc 00:28"
            percent="16"
          />
        </View>
      </Modalize>
    </View>
  );
};

export default SurveyList;

const styles = StyleSheet.create({
  styleImgBackground: {
    backgroundColor: '#1c2732',
    width: '100%',
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
  },

  // icon header
  iconHeader: {
    width: 20,
    height: 15,
  },

  buttonBack: {
    backgroundColor: 'rgba(221,221,221,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 25,
  },

  buttonDraw: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 25,
    backgroundColor: 'rgba(221,221,221,0.2)',
    marginLeft: 290,
  },

  // title
  title: {
    color: '#f9ca24',
    fontSize: 35,
    fontFamily: 'HelveticaNeueBold',
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 34,
  },

  containerItemList: {
    marginTop: 40,
  },

  styleHandle: {
    marginTop: 30,
    backgroundColor: '#e9e9e9',
    width: 80,
  },

  styleModal: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});
