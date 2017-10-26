import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated, TouchableWithoutFeedback} from 'react-native';

export default class Quiz extends Component {
  state = {
    currentQuestion: 0,
    score: 0,
    viewAnswer: false,
    quizComplete: false

  }
  static navigationOptions = {
    headerTintColor: '#333333',
  };

  goToNextQuestion(isCorrect) {
    let {currentQuestion, score} = this.state
    const {totalNumber} = this.props.navigation.state.params;
    let newState = {
      currentQuestion: currentQuestion+1,
      viewAnswer: false
    }
    this.setState({
      ...newState,
      score:  isCorrect ? ++score : score,
      quizComplete: currentQuestion+1 === totalNumber
    })
    /*if (isCorrect) {
      this.setState(cs => {
        return {
          currentQuestion: currentQuestion+1,
          score : score+1,
          viewAnswer: false
        }
      })
    } else {
      this.setState(cs => {
        return {
          currentQuestion: currentQuestion+1,
          viewAnswer: false
        }
      })
    }

    if(currentQuestion+1 === totalNumber) {
      this.setState({quizComplete: true})
    }*/
  }

  retakeQuiz() {
    this.setState({
      currentQuestion: 0,
      score: 0,
      viewAnswer: false,
      quizComplete: false
    })
  }

  render() {
    const {questions, totalNumber} = this.props.navigation.state.params;
    let {currentQuestion, score} = this.state

    return (
      !this.state.quizComplete ?
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Text style={{fontSize: 16}}>
              {currentQuestion + 1}/{totalNumber}
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={[styles.flipCard]}>
              <Text style={styles.flipText}>
                {this.state.viewAnswer ? questions[currentQuestion].answer : questions[currentQuestion].question}
              </Text>
            </View>
            <TouchableOpacity style={styles.secondaryBtn}
                              onPress={() => this.setState({viewAnswer: !this.state.viewAnswer})}>
              <Text style={{color: '#333333'}}>{this.state.viewAnswer ? 'See Question': 'View Answer'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <TouchableOpacity style={[styles.mainBtn, {backgroundColor: 'green'}]}
                              onPress={() => this.goToNextQuestion(true)}>
              <Text style={{color: '#f7f7f7'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mainBtn, {backgroundColor: 'red'}]}
                              onPress={() => this.goToNextQuestion(false)}>
              <Text style={{color: '#f7f7f7'}}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
          <Text>{`You scored ${this.state.score} out of ${totalNumber}.`}</Text>
          <TouchableOpacity style={styles.secondaryBtn}
                            onPress={() => this.retakeQuiz()}>
            <Text style={{color: '#333333'}}>{`retake quiz`}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}
                            onPress={() => this.props.navigation.goBack()}>
            <Text style={{color: '#333333'}}>{`Go back to deck view`}</Text>
          </TouchableOpacity>
        </View>
    )


  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  cardContainer: {
    flex: 4,
    alignItems: 'center',
  },
  formContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBtn: {
    width: 155,
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 12,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  secondaryBtn: {
    width: 155,
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
  },
  flipCard: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    backfaceVisibility: 'hidden',
    borderRadius: 5,
    padding: 20,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#333333',
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  flipCardBack: {
    padding: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  flipText: {
    fontSize: 30,
    color: '#f7f7f7',
  },
  flipTextBack: {
    fontSize: 24,
    color: '#333333',
  },
});
