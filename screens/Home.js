import * as React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const { width } = Dimensions.get('window');


export const  Home = ({ navigation })  => {
  return (
    <ScrollView contentContainerStyle={styles.albums}>
      <Image style={styles.cover} source={require('../assets/6.jpeg')} />
      <Image style={styles.cover} source={require('../assets/7.jpg')} />
      <Image style={styles.cover} source={require('../assets/8.jpg')} />
      <Image style={styles.cover} source={require('../assets/1.jpg')} />
      <Image style={styles.cover} source={require('../assets/2.jpg')} />
      <Image style={styles.cover} source={require('../assets/4.jpeg')} />
      <Image style={styles.cover} source={require('../assets/5.jpeg')} />
      <Image style={styles.cover} source={require('../assets/6.jpeg')} />
      <Image style={styles.cover} source={require('../assets/7.jpg')} />
      <Image style={styles.cover} source={require('../assets/8.jpg')} />
      <Image style={styles.cover} source={require('../assets/1.jpg')} />
      <Image style={styles.cover} source={require('../assets/2.jpg')} />
      <Image style={styles.cover} source={require('../assets/4.jpeg')} />
      <Image style={styles.cover} source={require('../assets/5.jpeg')} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  cover: {
    height: width / 2 - 20,
    width: width / 2 - 20,
    marginVertical: 10,
  },
  albums: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
