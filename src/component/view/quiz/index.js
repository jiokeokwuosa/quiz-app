import React, {useState} from 'react';
import {ScreenView, TextView, QuestionBox, ListBox} from './styles';
import {View, FlatList, TouchableOpacity, Alert} from 'react-native';
import MyQuestion from './../../../../assets/js/questions';

const Quiz = ({route, navigation}) => {
  const {session, title} = route.params;
  const questionCatergory = MyQuestion[`${session}`];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const options = questionCatergory[currentQuestion].choices.map(
    (item, index) => {
      return {
        key: index.toString(),
        value: item,
      };
    },
  );
  const handleLastQuestionCheck = () => {
    return questionCatergory.length - 1 <= currentQuestion ? true : false;
  };
  const handleCorrectAnswerCheck = async answer => {
    if (answer === questionCatergory[currentQuestion].correctAnswer) {
      setCorrectAnswer(useranswer => useranswer + 1);
      Alert.alert('Congratulations!', 'You answered correctly', [
        {text: 'OK', onPress: () => {}},
      ]);
    } else {
      Alert.alert(
        'Oops!',
        `The correct answer is "${
          questionCatergory[currentQuestion].choices[
            questionCatergory[currentQuestion].correctAnswer
          ]
        }"`,
        [{text: 'OK', onPress: () => {}}],
      );
    }
  };
  const handleNextQuestion = async answer => {
    await handleCorrectAnswerCheck(answer);
    if (handleLastQuestionCheck()) {
      setTimeout(handleClosure, 2000);
    } else {
      setCurrentQuestion(question => question + 1);
    }
  };
  const handleClosure = async () => {
    Alert.alert(
      'Thanks!',
      `You scored ${correctAnswer}/${questionCatergory.length}`,
      [{text: 'Finish', onPress: () => navigation.navigate('Home Page')}],
    );
  };
  return (
    <ScreenView>
      <TextView title>{title}</TextView>
      <QuestionBox>
        <TextView questionNo>
          Question {currentQuestion + 1} of {questionCatergory.length}:
        </TextView>
        <View>
          <TextView question>
            {questionCatergory[currentQuestion].question}
          </TextView>
        </View>
      </QuestionBox>
      <FlatList
        data={options}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleNextQuestion.bind(null, +item.key)}>
            <ListBox>
              <TextView option>{item.value}</TextView>
            </ListBox>
          </TouchableOpacity>
        )}
      />
    </ScreenView>
  );
};

export default Quiz;
