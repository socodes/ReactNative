import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: '',
    };
    this.sum = this.sum.bind(this);
    this.differ = this.differ.bind(this);
    this.multiple = this.multiple.bind(this);
    this.divide = this.divide.bind(this);
  }
  sum() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const res = number1 + number2;

    this.setState({
      result: res,
    });
  }
  differ() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const res = number1 - number2;

    this.setState({
      result: res,
    });
  }
  multiple() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const res = number1 * number2;

    this.setState({
      result: res,
    });
  }
  divide() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const res = number1 / number2;

    this.setState({
      result: res,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Simple Calculator </Text>
        </View>
        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter first number"
            onChangeText={text => {
              this.setState({
                input1: text,
              });
            }}
            value={this.state.input1}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter second number"
            onChangeText={text => {
              this.setState({
                input2: text,
              });
            }}
            value={this.state.input2}
          />
          <View style={styles.buttonWrapper}>
            <Button onPress={this.sum} color="#841584" title="+" />
            <Button onPress={this.differ} color="#841584" title="-" />
            <Button onPress={this.multiple} color="#841584" title="*" />
            <Button onPress={this.divide} color="#841584" title="/" />
          </View>
          <Text style={styles.sampleText}> Result: {this.state.result} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sampleText: {
    height: 30,
    fontSize: 14,
  },
  input: {
    height: 40,
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    paddingTop: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
