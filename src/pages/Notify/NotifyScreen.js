import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './StyleNotify';
import Feather from 'react-native-vector-icons/Feather';
import {listNotify} from '../../assets/Data/DataHome';

export default function NotifyScreen({navigation}) {
  const renderListNotify = () => {
    return (
      <View style={[styles.flex, styles.listItemNotify]}>
        <FlatList
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={listNotify}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => renderListNotifyItem(item)}
        />
      </View>
    );
  };

  const renderListNotifyItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.container_ListItem}
        onPress={() => {
          alert('Check In');
        }}>
        <ImageBackground
          style={styles.ImgUserItem}
          imageStyle={{borderRadius: 50}}
          source={item.ImgUser}
          resizeMode="stretch"
        />
        <View style={styles.content_User}>
          <Text style={styles.nameUser}>{item.nameUser}</Text>
          <Text style={styles.contentOfUser}>{item.contentInform}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.styleIcon}>
          <Feather name="more-horizontal" size={20} style={styles.iconMore} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.titleInform}>
          <Text style={styles.inform}>Thông báo</Text>
          <Feather name="search" size={20} style={styles.iconSearch} />
        </View>
        <View style={styles.lineRow_otherSurvey} />
      </View>

      <ScrollView
        style={styles.styleScrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerMain}>
          <View style={styles.other_listNotify}>{renderListNotify()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
