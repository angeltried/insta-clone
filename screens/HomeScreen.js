//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Header from './components/home/Header';
import Post from './components/home/Post';
import Stories from './components/home/Stories';

// create a component
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Stories/>
        <Post/>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

//make this component available to the app
export default HomeScreen;



