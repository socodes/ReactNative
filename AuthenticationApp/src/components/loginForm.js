import React, {Component} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Input, Spinner} from './common';
import firebase from 'firebase';
export default class loginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };
  onButtonClicked() {
    const {email, password} = this.state;

    this.setState({
      error: '',
      loading: true,
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false,
    });
  }
  render() {
    const {error, loading} = this.state;
    const ErrorMsg = error ? (
      <Text style={styles.errorStyle}> {error} </Text>
    ) : null;

    const loginButton = loading ? (
      <Spinner />
    ) : (
      <Button
        onPress={this.onButtonClicked.bind(this)}
        style={styles.buttonWrapper}
        title="Login"
        color="#E87B79"
      />
    );
    return (
      <View>
        <View>
          <Input
            text="E-Mail"
            inputPlaceHolder="Enter E-Mail"
            onChangeText={text => {
              this.setState({
                email: text,
              });
            }}
            value={this.state.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={text => {
              this.setState({
                password: text,
              });
            }}
            secureTextEntry
            value={this.state.password}
          />
          {ErrorMsg}
          <View>{loginButton}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  errorStyle: {
    fontSize: 20,
    color: 'red',
    paddingTop: 5,
    alignSelf: 'center',
  },
});
