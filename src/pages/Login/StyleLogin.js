import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  styleInput: {
    marginTop: 40,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  titleWelcomeBack: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeueBold',
  },

  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  styleButton: {
    width: 200,
    backgroundColor: '#0d47a1',
    padding: 12,
    borderRadius: 40,
    marginTop: 30,
  },

  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  // Social media
  containerSocialMedia: {
    flexDirection: 'row',
    marginTop: 60,
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

  createAcc: {
    flexDirection: 'row',
    marginTop: 40,
  },
});

export default styles;
