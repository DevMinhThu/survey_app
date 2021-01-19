import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '28%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#1c2732',
    // backgroundColor: '#2f3640',
  },

  header: {
    flexDirection: 'row',
    marginTop: 30,
  },

  titleApp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  styleHello: {
    fontSize: 24,
    paddingLeft: 30,
    color: '#fff',
    marginTop: 15,
  },

  styleTitleUser: {
    fontSize: 35,
    paddingLeft: 30,
    color: '#f9ca24',
    fontWeight: 'bold',
  },

  styleUser: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 30,
  },

  styleAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  styleIcon: {
    marginLeft: 30,
    color: '#fff',
    backgroundColor: 'rgba(221,221,221,0.2)',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 10,
  },

  titleHeader: {
    flexDirection: 'row',
    marginTop: 15,
  },

  iconBell: {
    marginRight: 30,
    color: '#fff',
    backgroundColor: 'rgba(221,221,221,0.2)',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default styles;
