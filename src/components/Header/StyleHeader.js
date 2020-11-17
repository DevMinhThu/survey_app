import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  titleApp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  styleHello: {
    fontSize: 24,
    paddingLeft: 30,
    color: '#b8adb5',
  },
  styleTitleUser: {
    fontSize: 24,
    paddingLeft: 30,
    color: '#0A0A15',
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
    width: 45,
    height: 45,
    borderRadius: 10,
  },
});

export default styles;
