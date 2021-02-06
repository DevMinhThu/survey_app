import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  // upgrade
  upgrade: {
    backgroundColor: '#cccccc',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  textUpgrade: {
    marginLeft: 15,
  },

  mainText: {
    color: '#404040',
    fontSize: 15,
  },

  extraText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006bb3',
    marginTop: 5,
  },

  // informUser
  informUser: {
    marginTop: 20,
  },

  textInformUser: {
    fontSize: 16,
    marginVertical: 5,
  },

  textBold: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  // fakeView
  fakeView: {
    backgroundColor: '#cccccc',
    height: 1,
    marginTop: 5,
  },

  // plan
  containerPlan: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },

  leftPlan: {
    flex: 1,
  },

  rightPlan: {
    flex: 1,
    alignItems: 'flex-end',
  },

  title1: {
    fontSize: 20,
    marginBottom: 10,
  },

  styleDay: {
    fontSize: 15,
  },

  title2: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#006bb3',
  },

  // picker
  containerPicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  language: {
    flex: 2,
  },

  stylePicker: {
    flex: 1,
  },

  // upload
  containerUpload: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },

  sub: {
    fontSize: 12,
    color: '#808080',
  },

  textUpdate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006bb3',
    marginTop: 5,
  },

  containerLockMode: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 5,
  },

  styleUp: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  styleDown: {marginBottom: 5},

  lorem: {
    fontSize: 13,
    color: '#808080',
  },

  styleDetail: {
    flex: 2,
  },

  styleSwitch: {
    flex: 1,
  },

  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
  },

  textDelete: {
    fontSize: 20,
    color: 'red',
  },
});

export default styles;
