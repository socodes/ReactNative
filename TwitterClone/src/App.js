import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './router';
import LoginForm from './components/loginForm';
export default class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDFDrerJPkBXOxfuAO5NwZ8rNnDJtg8dZw",
      authDomain: "twitterclone-7761e.firebaseapp.com",
      databaseURL: "https://twitterclone-7761e.firebaseio.com",
      projectId: "twitterclone-7761e",
      storageBucket: "twitterclone-7761e.appspot.com",
      messagingSenderId: "48030535488",
      appId: "1:48030535488:web:e301984269e2dc3218f4a5",
      measurementId: "G-7CYWL2M619"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    console.log("Started");
    const store = createStore(reducers, {},applyMiddleware(ReduxThunk) )
    return(
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}
