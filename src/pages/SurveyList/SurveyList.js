import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {IMAGE} from '../../assets/images/Images';
import SurveyItem from './SurveyItem';

const SurveyList = ({navigation}) => {
  return (
    <ImageBackground
      source={IMAGE.IMG_BACKGROUND}
      style={styles.styleImgBackground}>
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
            img={require('../../assets/images/register.png')}
            title="Working from Home"
            bg="#fef8e3"
          />
          <SurveyItem
            img={require('../../assets/images/social.jpg')}
            title="Working from Home"
            bg="#fdddf3"
          />
          <SurveyItem
            img={require('../../assets/images/workplace.png')}
            title="Working from Home"
            bg="#fff0ee"
          />
          <SurveyItem
            img={require('../../assets/images/education.jpg')}
            title="Working from Home"
            bg="#fcf2ff"
          />
          <SurveyItem
            img={require('../../assets/images/onboarding-img2.jpg')}
            title="Working from Home"
            bg="#fdddf3"
          />
        </View>
      </Modalize>
    </ImageBackground>
  );
};

export default SurveyList;

const styles = StyleSheet.create({
  styleImgBackground: {
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
    backgroundColor: '#f06d71',
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
    backgroundColor: '#f06d71',
    marginLeft: 290,
  },

  // title
  title: {
    color: '#FFF',
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
