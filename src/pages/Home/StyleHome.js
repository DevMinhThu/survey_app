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
    marginHorizontal: 30,
    marginTop: 25,
  },

  recommended: {
    fontSize: 26,
    color: '#0A0A15',
    fontWeight: 'bold',
  },

  lineRow: {
    borderBottomColor: '#feedd1',
    borderBottomWidth: 4,
    width: 160,
  },

  recommendedStyle: {
    marginTop: 24,
    marginHorizontal: 8,
  },

  ImgProduct: {
    width: width - 86 * 3,
    height: height - 295 * 2,
    marginRight: 10,
  },

  nameSurvey: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
    padding: 15,
    zIndex: 20,
  },

  titleSurvey: {flex: 5},

  evaluate: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  rate: {color: '#cca300', marginLeft: 3},
  other_survey_style: {marginTop: 30},

  lineRow_otherSurvey: {
    borderBottomColor: '#feedd1',
    borderBottomWidth: 4,
    width: 120,
  },

  otherSurvey: {
    marginTop: 24,
  },

  container_OtherSurvey: {
    flex: 1,
    flexDirection: 'row',
  },

  ImgOtherSurvey: {
    width: 80,
    height: 80,
    marginBottom: 10,
    flex: 1,
  },

  content_OtherSurvey: {
    flex: 1.5,
    justifyContent: 'center',
  },

  cost_OtherSurvey: {
    flex: 1,
    justifyContent: 'space-around',
  },

  contentOtherSurvey: {
    color: '#300026',
    fontSize: 18,
    fontWeight: 'bold',
  },

  numberSurvey: {
    color: '#9D9EA5',
    fontSize: 18,
    fontWeight: 'bold',
  },

  costSurvey: {
    color: '#9D9EA5',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  // SEARCH
  containerInput: {
    marginTop: -30,
    zIndex: 5,
  },

  searchInput: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#f6f6f4',
    fontSize: 18,
    paddingLeft: 53,
    marginHorizontal: 30,
    zIndex: -10,
  },
  iconSearch: {
    position: 'absolute',
    top: 18,
    left: 53,
  },
  buttonIcon: {
    top: 8,
    right: 35,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 40,
    height: 40,
    position: 'absolute',
  },
  iconSetting: {
    left: 12,
    top: 10,
  },
});
export default styles;
