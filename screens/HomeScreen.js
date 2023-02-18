//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Header from './components/home/Header';

// create a component
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
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



