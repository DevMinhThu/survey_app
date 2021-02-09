import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleWelcome: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeueBold',
  },

  titleDetail: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
  },

  stylesDetail: {
    flexDirection: 'row',
    margin: 20,
    paddingVertical: 20,
  },

  login: {
    backgroundColor: '#0d47a1',
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2,
  },

  textLogin: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },

  signIn: {
    backgroundColor: '#fff',
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#0d47a1',
  },

  textSignIn: {
    textAlign: 'center',
    color: '#0d47a1',
    fontSize: 18,
  },

  // Social media
  containerSocialMedia: {
    flexDirection: 'row',
    marginTop: 20,
  },

  // facebook
  buttonFB: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // google
  buttonGoogle: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#f44336',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // instagram
  buttonInstagram: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textSocialMedia: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
