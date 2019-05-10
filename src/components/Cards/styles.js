/**
 * Styles para componente cards da lista de Posts da tela de Home/inicial/index
 *
 * @author Dot.Lib <luiz.grativol@dotlib.com.br>
 * @since 10/05/2019
 */
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


const styles = StyleSheet.create({

  card: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f4f4f4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: Dimensions.get('window').width - 40,
    //height: Dimensions.get('window').height /4,
    flex: 2,

  },
  title: {
    paddingTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    color: "#a5a5a5",

  },
  container: {
    padding: 10,
    alignItems: "center",
  },
  line: {
    borderBottomColor: "#d6d7da",
    borderBottomWidth: 1,
    padding: 5,
    marginRight: 10,
  },
  text: {
    color: "#707070",
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "flex-end",
  },


});

export default styles;
