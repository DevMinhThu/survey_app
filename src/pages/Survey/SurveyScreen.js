import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import questions from '../../assets/Data/DataConfig';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    // Update score for App
    if (isCorrect == true) {
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

  return (
    <View style={styles.container}>
      <View style={styles.quizApp}>
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
                  Câu hỏi {currentQuestion + 1} / {questions.length}
                </Text>
              </View>
              <View style={styles.questionText}>
                <Text style={styles.textQuestion}>
                  {questions[currentQuestion].questionText}
                </Text>
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

export default QuizApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quizApp: {
    backgroundColor: '#ecf0f1',
    width: 350,
    borderRadius: 15,
    padding: 20,
  },

  textQuestion: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
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
});
