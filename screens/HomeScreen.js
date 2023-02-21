//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './components/home/Header';
import Post from './components/home/Post';
import Stories from './components/home/Stories';
import {POSTS} from '../data/posts'

// create a component
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Stories/>
        <ScrollView>
          {POSTS.map((post, index) => (
          <Post post={post} key={index}/>
          ))}
        
        </ScrollView>
        
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



