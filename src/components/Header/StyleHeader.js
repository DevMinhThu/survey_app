import {StyleSheet, Dimensions} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '28%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#1c2732',
    // backgroundColor: '#00a46c',
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
    color: 'red',
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
  },

  titleHeader: {
    flexDirection: 'row',
    marginTop: 15,
  },

  iconBell: {
    marginRight: 30,
  },
});

export default styles;
