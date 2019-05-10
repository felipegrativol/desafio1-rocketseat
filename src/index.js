/**
 * Desafio 1 - RocketSeat
 * @author Dot.Lib <luiz.grativol@dotlib.com.br>
 * @since 10/05/2019
 */
import './config/ReactotronConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Dimensions
} from 'react-native';

// Components
import Cards from '~/components/Cards';

//Posts
import Posts from '~/components/Posts';

export default class App extends Component {
  render() {

    const posts = Posts.map((post) => {
      return (
        <Cards key={post.id} data={post} />
      )
    }
    );

    return (
      <View style={styles.container}>

        <ScrollView style={styles.containerScrollView}>
          {posts}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerScrollView: {
    flexDirection: 'column',
    marginTop: 20,
  },
  container: {
    backgroundColor: '#cc565d',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
