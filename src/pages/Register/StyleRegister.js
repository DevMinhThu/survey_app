import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },

  styleInput: {
    marginTop: 40,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  styleTitle: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 16,
    marginTop: 20,
    color: 'gray',
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

  loginHere: {fontWeight: 'bold', color: '#0d47a1'},

  createAcc: {
    flexDirection: 'row',
    marginTop: 25,
  },
});

export default styles;
