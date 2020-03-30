import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image,
    BackHandler, ToastAndroid, AsyncStorage
} from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Goods from './src/goods/Goods';
import Home from './src/home/Home';
import Cart from './src/cart/Cart';
import User from './src/userinfor/Userinfor';
import MyPublish from './src/userinfor/MyPublish';
import Login from './src/common/Login'
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register'

console.disableYellowBox = true;//取消黄色警告

const App = () => {
    let [isLogin, setLogin] = useState(false);
    let [isInstall, setInstall] = useState(true);
    let now = 0;
    let init = () => {
        AsyncStorage.getItem('isInstall')
            .then(res => {
                console.log('isinstall', res)
                if (res) {
                    setInstall(false);
                }
            })
        AsyncStorage.getItem('user')
            .then(res => {
                let user = JSON.parse(res)
                console.log(user)
                if (!user) {
                    SplashScreen.hide();
                }
                if (user && user.back) {
                    setLogin(true);
                    SplashScreen.hide();
                }
            })
    }
    useEffect(() => {
        init();
    }, [])
    let afterInstall = () => {
        console.log('after install')
        setInstall(false)
    }
    if (isInstall) {
        return <View style={{ flex: 1 }}>
            <SwiperPage afterInstall={afterInstall} />
        </View>
    }
    return (
        <Router
            backAndroidHandler={() => {
                console.log(Actions.currentScene);
                if (Actions.currentScene != 'home' && Actions.currentScene != 'login' && Actions.currentScene != 'register') {
                    Actions.pop();
                    return true;
                } else {
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }
            }}
        >
            <Lightbox key="lightbox">
                <Scene key="root">
                    <Tabs
                        key="tabbar"
                        hideNavBar
                        activeTintColor='red'
                        inactiveTintColor='#959595'
                        tabBarStyle={{ backgroundColor: '#fff' }}
                    >
                        {/* 首页 */}
                        <Scene key='homePage'
                            title='首页'
                            icon={
                                ({ focused }) => <Icon
                                    color={focused ? 'red' : '#959595'} name="home" />
                            }
                        >
                            <Scene key='home' hideNavBar={true} component={Home} />
                        </Scene>

                        {/* 商品分类 */}
                        <Scene key="goods"
                            title='商品分类'
                            icon={
                                ({ focused }) => <Icon color={focused ? 'red' : '#959595'} name='appstore' />
                            }
                        >
                            <Scene key='goods' hideNavBar={true} component={Goods} />
                        </Scene>

                        {/* 购物车 */}
                        <Scene
                            key='car'
                            title='购物车'
                            hideDrawerButton
                            icon={({ focused }) =>
                                <Icon color={focused ? 'red' : '#959595'} name='shopping-cart' />}>
                            <Scene key='car' hideNavBar={true} component={Cart} />
                        </Scene>
                        {/* 我的发布 */}

                        {/* 我的 */}
                        <Scene
                            key='my'
                            title='我的'
                            hideDrawerButton
                            icon={({ focused }) =>
                                <Icon color={focused ? 'red' : '#959595'} name='user' />}>
                            <Scene key='my' hideNavBar={true} component={User} />
                            {/* 我的发布 */}
                            <Scene
                                navigationBarStyle={{ backgroundColor: 'red' }}
                                backButtonImage={require('./assets/arrow-left.png')}
                                renderRightButton={<View style={{ marginRight: 20 }}>
                                    <Icon color='#fff' name='ellipsis'></Icon></View>}
                                key="myPublish"
                                title='我的发布'
                                titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}//标题的文本居中
                                hideTabBar
                                component={MyPublish}
                                icon={({ focused }) =>
                                    <Icon color={focused ? 'red' : '#959595'} name='user' />}
                            />
                        </Scene>
                    </Tabs>
                </Scene>
                <Scene key="register" component={Register} />
                <Scene initial={!isLogin} key="login" component={Login} />
            </Lightbox>
        </Router>  
    );
};

export default App;
