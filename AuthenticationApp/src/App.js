import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm';
import firebase from 'firebase';
import {Spinner} from './components/common';
export default class App extends Component {
  state = {
    loggedIn: null,
  };
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD5dxGHjiXOy2eT5QGhnUeWVVz3h9S2v4U',
      authDomain: 'authentication-45919.firebaseapp.com',
      databaseURL: 'https://authentication-45919.firebaseio.com',
      projectId: 'authentication-45919',
      storageBucket: 'authentication-45919.appspot.com',
      messagingSenderId: '41907899922',
      appId: '1:41907899922:web:665a0e7b69dc449a7bd2cb',
      measurementId: 'G-KFG0W5ZNGT',
    });

    firebase.auth().onAuthStateChanged(user => {
      const loggedIn = user ? true : false;

      this.setState({
        loggedIn,
      });
    });
  }
  renderContent() {
    const {loggedIn} = this.state;

    switch (loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
            title="Logout"
            color="#E87B79"
          />
        );
      case false:
        return <LoginForm />;
      default:
        <Spinner />;
    }
  }
  render() {
    return (
      <View style={styles.appContainer}>
        <Banner text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  },
});
