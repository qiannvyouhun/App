import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
  start = () => {
    AsyncStorage.setItem('isInstall', 'true', () => {
      this.props.afterInstall();
    });
  };
  render() {
    return (
      <Swiper showsButtons={false}>
        <View style={styles.slide}>
          <Image
            style={styles.img}
            source={require('../../assets/slide1.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.img}
            source={require('../../assets/slide2.png')}
          />
        </View>
        <View style={styles.slide} >
          <Image
            style={styles.img}
            source={require('../../assets/slide3.png')}
          />
          <TouchableOpacity style={styles.start} onPress={this.start}>
            <Text style={{ color: '#F0A013' }}>立即体验</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  slide: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  start: {
    position: 'absolute',
    bottom: 100,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    opacity: 0.8
  }
});