import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {IMAGE} from '../../assets/images/Images';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 15}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Welcome')}
      onDone={() => navigation.navigate('Welcome')}
      bottomBarColor="#f7f8fd"
      subTitleStyles={{marginBottom: 150}}
      pages={[
        {
          backgroundColor: '#f7f8fd',
          image: (
            <Image
              style={{width: widthScreen, height: heightScreen / 2}}
              source={IMAGE.ONBOARDING1}
            />
          ),
          title: 'Connect to the Everyone',
          subtitle: 'A New Way To Connect With The Everyone',
        },
        {
          backgroundColor: '#f7f8fd',
          image: (
            <Image
              style={{width: widthScreen, height: heightScreen / 2}}
              source={IMAGE.ONBOARDING3}
            />
          ),
          title: 'Information gathering Quickly',
          subtitle: 'Help save money and time',
        },
        {
          backgroundColor: '#f7f8fd',
          image: (
            <Image
              style={{width: widthScreen, height: heightScreen / 2}}
              source={IMAGE.ONBOARDING2}
            />
          ),
          title: 'Very easy to use',
          subtitle: 'Anyone can use it',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
