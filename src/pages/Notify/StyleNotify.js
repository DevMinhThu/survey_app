import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  styleScrollView: {
    height: '72%',
    zIndex: -5,
    // backgroundColor: '#1c2732',
  },

  containerMain: {
    marginHorizontal: 15,
  },

  inform: {
    fontSize: 26,
    color: '#0A0A15',
    fontWeight: 'bold',
  },

  other_listNotify: {
    marginTop: 0,
  },

  lineRow_otherSurvey: {
    borderBottomColor: '#feedd1',
    borderBottomWidth: 4,
    width: 130,
  },

  listItemNotify: {
    marginTop: 24,
  },

  container_ListItem: {
    flex: 1,
    flexDirection: 'row',
  },

  ImgUserItem: {
    width: 70,
    height: 70,
    marginBottom: 30,
    marginRight: 20,
    marginVertical: 50 / 2,
  },

  content_User: {
    flex: 3,
    justifyContent: 'center',
  },

  styleIcon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 15,
  },

  contentOfUser: {
    color: '#300026',
    fontSize: 16,
  },

  time: {
    fontSize: 14,
    color: 'gray',
  },

  nameUser: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  iconMore: {
    color: '#9D9EA5',
    fontWeight: 'bold',
    paddingLeft: 50,
  },

  iconSearch: {
    color: '#fff',
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: 10,
  },

  titleInform: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerTitle: {
    marginHorizontal: 15,
    marginTop: 15,
  },
});

export default styles;
