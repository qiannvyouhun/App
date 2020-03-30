import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions, Router } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false,
    }
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  login = () => {
    if (this.state.username != '' && this.state.pwd != '') {
      this.setState({ isloading: true })
      myFetch.post('/login', {
        username: this.state.username,
        pwd: this.state.pwd
      }
      ).then(res => {
        if (res.data.back == '2') {
          ToastAndroid.show('该用户未注册！', 1000);
        }
        else {
          ToastAndroid.show('正在登录...', 1000);
          AsyncStorage.setItem('user', JSON.stringify(res.data))
            .then(() => {
              this.setState({ isloading: false })
              Actions.replace('root')
            })
        }
      })
    }
    else {
      ToastAndroid.show('请输入用户名和密码！', 1000);
    }
  }
  render() {
    return (
      // <Router
        // backAndroidHandler={() => {
        //   if (Actions.currentScene != 'home') {
        //     Actions.pop();
        //     return true;
        //   } else {
        //     if (new Date().getTime() - now < 2000) {
        //       BackHandler.exitApp();
        //     } else {
        //       ToastAndroid.show('确定要退出吗', 100);
        //       now = new Date().getTime();
        //       return true;
        //     }
        //   }

        // }}
        // >
        <View style={styles.box} >
          <Image
            style={styles.img}
            source={require('../../assets/login.png')}
          />
          <View
            style={styles.title}>
            <View
              style={styles.user}>
              <Icon name="user" color="#F2BA96" />
              <TextInput placeholder="用户名"
                onChangeText={this.userhandle}
              />
            </View>
            <View
              style={styles.pwd}>
              <Icon name="lock" color="#F2BA96" />
              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="密码"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              style={styles.login}
              onPress={this.login}>
              <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.register}
              onPress={() => Actions.replace('register')}>
              <Text>注册</Text>
            </TouchableOpacity>
          </View>
        </View>

      // </Router>

    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    width: "100 %",
    height: "100 %",
  },
  title: {
    position: 'absolute',
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: " rgba(255,255,255,0.6)"
  },
  user: {
    width: '80%',
    marginRight: 10,
    marginBottom: 20,
    borderColor: '#F2BA96',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  pwd: {
    width: '80%',
    marginRight: 10,
    marginBottom: 10,
    borderColor: '#F2BA96',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  login: {
    width: '80%',
    height: 40,
    backgroundColor: '#F2BA96',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  register: {
    width: '80%',
    height: 40,
    borderColor: "#F2BA96",
    borderWidth: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});