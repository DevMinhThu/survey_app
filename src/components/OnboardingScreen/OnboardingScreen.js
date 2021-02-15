import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {IMAGE} from '../../assets/images/Images';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

// handle button onboarding
const Skip = ({...props}) => (
  <TouchableOpacity style={styles.buttonOnboarding} {...props}>
    <Text style={styles.textButtonOnboarding}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity style={styles.buttonOnboarding} {...props}>
    <Text style={styles.textButtonOnboarding}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity style={styles.buttonOnboarding} {...props}>
    <Text style={styles.textButtonOnboarding}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('Welcome')}
        onDone={() => navigation.navigate('Welcome')}
        bottomBarColor="#f7f8fd"
        titleStyles={styles.styleTitle_Onboarding}
        subTitleStyles={styles.styleSubTitle_Onboarding}
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
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonOnboarding: {
    marginHorizontal: 15,
  },

  textButtonOnboarding: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  styleTitle_Onboarding: {
    fontFamily: 'HelveticaNeueBold',
    fontSize: 30,
  },

  styleSubTitle_Onboarding: {
    marginBottom: 150,
    fontFamily: 'HelveticaNeueBold',
    fontSize: 18,
  },
});
