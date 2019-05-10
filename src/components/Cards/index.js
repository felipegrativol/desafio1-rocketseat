/**
 * Componente Cards usado na tela Home/inicial/index
 *
 * @author Dot.Lib <luiz.grativol@dotlib.com.br>
 * @since 10/05/2019
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Styles
import styles from './styles';

export default class Cards extends Component {


  render() {


    return (
      <View key={this.props.data.id} style={styles.container}>
        <TouchableOpacity style={styles.card}>

          <Text style={styles.title}>{this.props.data.title} : {this.props.data.id}</Text>
          <Text style={styles.subtitle}>{this.props.data.subtitle}</Text>
          <View style={styles.line}></View>
          <Text style={styles.text}>{this.props.data.text}</Text>

        </TouchableOpacity>
      </View>
    );
  }


}
