import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {IMAGE} from '../../assets/images/Images';

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileImage}>
          <Image
            source={IMAGE.AVATAR_USER}
            style={styles.imageUser}
            resizeMode="center"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: '200', fontSize: 35}]}>
            Linda
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
            Programmer
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>10</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
            ]}>
            <Text style={[styles.text, {fontSize: 24}]}>66</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, {fontSize: 24}]}>20</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <View style={{marginTop: 32}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={IMAGE.EDUCATION}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={IMAGE.SOCIAL}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={IMAGE.WORK}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
        </View>
        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View style={{width: 250}}>
              <Text
                style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
                <Text style={{fontWeight: '400'}}>
                  Started following Jake Challeahe
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View style={{width: 250}}>
              <Text
                style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
                <Text style={{fontWeight: '400'}}>Just Post Luke Harper</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },

  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },

  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageUser: {
    width: 200,
    height: 190,
  },

  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 150,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },

  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 15,
  },

  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
