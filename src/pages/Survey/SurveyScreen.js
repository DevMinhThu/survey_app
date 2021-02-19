import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

const Survey = ({route, navigation}) => {
  const {data} = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [webViewHeight, setWebViewHeight] = useState(60);

  const handleAnswerButtonClick = () => {
    // Move on to a new question
    const nextQuestion = currentQuestion + 1;

    // Processing the number of questions
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  console.log(data[currentQuestion].questionText);

  // handler show answer
  const handleShowAnswer = () => {
    if (data[currentQuestion].questionType === false) {
      return data[currentQuestion].answerOptions.map((answerOptions, index) => (
        <TouchableOpacity
          key={index}
          style={styles.buttonAns}
          onPress={() => handleAnswerButtonClick()}>
          <Text style={styles.textAnswer}>{answerOptions.answerText}</Text>
        </TouchableOpacity>
      ));
    } else {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.answerSection}>
            <TextInput
              style={styles.styleTextInput}
              placeholder={'Enter the Answer ...'}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => handleAnswerButtonClick()}>
            <Text style={{fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const runFirst = `
      document.body.style.backgroundColor = '#fff';
      document.body.style.fontSize = 28;
      document.body.style.padding = 28;
      window.ReactNativeWebView.postMessage(document.body.scrollHeight)
    `;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.questionCount}>
        <Text style={styles.textQuestion}>
          {currentQuestion + 1}/{data.length}
        </Text>
      </View>
      <View style={styles.Survey}>
        {showScore ? (
          <View style={styles.scoreSection}>
            <Text style={styles.textEnd}>
              Thank you for completing the survey!
            </Text>
            <TouchableOpacity
              style={styles.buttonNext}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.questionSection}>
              <View style={styles.questionText}>
                {/* text -> webview */}
                <WebView
                  originWhitelist={['*']}
                  source={{
                    html: data[currentQuestion].questionText,
                  }}
                  injectedJavaScript={runFirst}
                  // onMessage={onWebViewMessage}
                  style={{height: webViewHeight}}
                />
              </View>
            </View>
            <View style={styles.answerSection}>{handleShowAnswer()}</View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Survey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  Survey: {
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textQuestion: {
    color: '#3d475a',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textEnd: {
    color: '#3d475a',
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonAns: {
    backgroundColor: '#faece673',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },

  answerSection: {},

  textAnswer: {
    color: '#3d475a',
    fontSize: 16,
    fontWeight: 'bold',
  },

  scoreSection: {
    backgroundColor: '#faece673',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth / 2,
  },

  questionText: {
    width: 360,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
    marginTop: 10,
  },

  styleTextInput: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 120,
    fontSize: 16,
  },

  buttonNext: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#bdc3c7',
    width: 100,
    height: 30,
  },

  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3d475a',
  },

  questionCount: {
    backgroundColor: 'rgba(206, 214, 224,1.0)',
    borderRadius: 100,
    width: 80,
    height: 30,
    justifyContent: 'center',
    left: 350,
    marginTop: 15,
  },
});
