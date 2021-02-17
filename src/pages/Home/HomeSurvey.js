import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

import {CustomHeader} from '../../components/Header/CustomHeader';
import styles from './StyleHome';
import {recommended, otherSurvey} from '../../assets/Data/DataHome';
// import {socialMedia} from '../../assets/Data/DataConfig';

export default function home({navigation}) {
  // recommend and survey item
  const renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommendedStyle]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={recommended}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => renderSurveyItem(item)}
        />
      </View>
    );
  };

  const renderSurveyItem = (item) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          style={styles.ImgProduct}
          imageStyle={{borderRadius: 2}}
          source={item.ImgBackground}
          resizeMode="stretch">
          <View style={styles.styleItemRecommended}>
            <View style={styles.titleSurvey}>
              <Text style={styles.nameSurvey}>{item.nameSurvey}</Text>
            </View>
            <View style={styles.evaluate}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon name="heart" size={20} color="red" />
                </TouchableOpacity>
                <Text style={styles.rate}>{item.rate}</Text>
              </View>
              <TouchableOpacity>
                <Feather name="plus-circle" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // other survey and survey item
  const renderOtherSurvey = () => {
    return (
      <View style={[styles.flex, styles.otherSurvey]}>
        <FlatList
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={otherSurvey}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => renderOtherSurveyItem(item)}
        />
      </View>
    );
  };

  const renderOtherSurveyItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.container_OtherSurvey}
        onPress={() => {
          navigation.navigate('SurveyScreen', {data: item.socialMedia});
        }}>
        <ImageBackground
          style={styles.ImgOtherSurvey}
          imageStyle={{borderRadius: 24}}
          source={item.ImgBackground}
          resizeMode="stretch"
        />
        <View style={styles.content_OtherSurvey}>
          <Text style={styles.numberSurvey}>{item.numberSurvey}</Text>
          <Text style={styles.contentOtherSurvey}>{item.contentSurvey}</Text>
        </View>
        <View style={styles.cost_OtherSurvey}>
          <Text style={styles.costSurvey}>{item.costSurvey}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} />
      {/* search */}
      <View style={styles.containerInput}>
        <Feather name="search" size={20} style={styles.iconSearch} />
        <TextInput
          style={styles.searchInput}
          placeholder={'Search survey'}
          placeholderTextColor={'#b8adb5'}
        />
        <TouchableOpacity style={styles.buttonIcon}>
          <Feather name="sliders" size={20} style={styles.iconSetting} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.styleScrollView}
        showsVerticalScrollIndicator={false}>
        {/* Main */}
        <View style={styles.containerMain}>
          <View style={styles.titleStyle}>
            <Text style={styles.recommended}>Recommended</Text>
            <View style={styles.lineRow} />
            {renderRecommended()}
          </View>

          <View style={styles.other_survey_style}>
            <Text style={styles.recommended}>Other survey</Text>
            <View style={styles.lineRow_otherSurvey} />
            {renderOtherSurvey()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
