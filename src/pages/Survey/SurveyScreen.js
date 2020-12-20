import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  // Dimensions,
} from 'react-native';
import questions from '../../assets/Data/DataConfig';
import {WebView} from 'react-native-webview';

// const windowWidth = Dimensions.get('window').width;

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    // Update score for App
    if (isCorrect === true) {
      setScore(score + 1);
    }

    // Move on to a new question
    const nextQuestion = currentQuestion + 1;

    // Processing the number of questions
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  console.log(questions[currentQuestion].questionText);

  const runFirst = `
      document.body.style.backgroundColor = '#ecf0f1';
      document.body.style.fontSize = 30;
    `;

  return (
    <View style={styles.container}>
      <View style={styles.Survey}>
        {showScore ? (
          <View style={styles.scoreSection}>
            <Text style={styles.textQuestion}>
              Thank you for completing the survey!
            </Text>
          </View>
        ) : (
          <View>
            <View style={styles.questionSection}>
              <View style={styles.questionCount}>
                <Text style={styles.textQuestion}>
                  {currentQuestion + 1} / {questions.length}
                </Text>
              </View>
              <View style={styles.questionText}>
                {/* text -> webview */}
                <WebView
                  originWhitelist={['*']}
                  source={{html: questions[currentQuestion].questionText}}
                  injectedJavaScript={runFirst}
                />
                {/* <Text style={styles.textQuestion}>
                  {questions[currentQuestion].questionText}
                </Text> */}
              </View>
            </View>
            <View style={styles.answerSection}>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <TouchableOpacity
                  style={styles.buttonAns}
                  onPress={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }>
                  <Text style={styles.textAnswer}>
                    {answerOptions.answerText}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Survey;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },

  Survey: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    // width: 350,
    // borderRadius: 15,
    padding: 30,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textQuestion: {
    color: 'black',
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonAns: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#bdc3c7',
  },

  textAnswer: {
    color: 'black',
    fontSize: 18,
  },

  scoreSection: {
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
    padding: 20,
  },

  questionText: {
    width: 360,
    height: 60,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
    marginTop: 10,
  },
});
