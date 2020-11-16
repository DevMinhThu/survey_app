import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {CustomHeader} from '../../components/Header/CustomHeader';
import styles from './StyleHome';
import {recommended, otherSurvey} from '../../assets/Data/DataHome';

export default function home() {
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
          keyExtractor={(item, index) => `${item.id}`}
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
          <View style={{flex: 1}}>
            <View style={styles.titleSurvey}>
              <Text style={styles.nameSurvey}>{item.nameSurvey}</Text>
            </View>
            <View style={styles.evaluate}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Feather name="heart" size={20} />
                </TouchableOpacity>
                <Text style={styles.rate}>{item.rate}</Text>
              </View>
              <TouchableOpacity>
                <Feather name="plus-circle" size={20} />
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
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({item}) => renderOtherSurveyItem(item)}
        />
      </View>
    );
  };

  const renderOtherSurveyItem = (item) => {
    return (
      <TouchableOpacity style={styles.container_OtherSurvey}>
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
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
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
    </View>
  );
}
