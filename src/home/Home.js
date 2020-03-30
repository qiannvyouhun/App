import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <View style={styles.hearder}>
                    <View style={styles.search}>
                        <Icon style={{ fontSize: 30, color: '#fff', marginLeft: 15 }} name='search' />
                        <TextInput
                            placeholder='请输入您要搜索的关键字'
                            placeholderTextColor='#fff'
                            style={{ fontSize: 17 }}
                        />
                    </View>
                    <Icon style={{ color: "#fff", fontSize: 30, marginLeft: 15 }} name='shopping-cart' />
                </View>
                <View style={styles.container}>
                    <Swiper
                        dot={<View style={{ backgroundColor: '#fff', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        activeDot={<View style={{ backgroundColor: '#fd0304', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        autoplay={true}
                    >
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../assets/carousel1.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../assets/carousel2.png')} />
                        </View>
                    </Swiper>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.touch}>
                        <Image
                            style={{ height: 105 * s, width: 105 * s, marginLeft: 20, marginRight: 40 }}
                            source={require('../../assets/home1.png')}
                        />
                        <Text style={{ fontSize: 22 * s, color: '#333333' }}>
                            居家维修保养
                        </Text>
                        <Icon style={{ marginLeft: 275 * s }} name='right' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <Image
                            style={{ height: 105 * s, width: 105 * s, marginLeft: 20, marginRight: 40 }}
                            source={require('../../assets/home2.png')}
                        />
                        <Text style={{ fontSize: 22 * s, color: '#333333' }}>
                            住宿优惠
                        </Text>
                        <Icon style={{ marginLeft: 320 * s }} name='right' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <Image
                            style={{ height: 105 * s, width: 105 * s, marginLeft: 20, marginRight: 40 }}
                            source={require('../../assets/home3.png')}
                        />
                        <Text style={{ fontSize: 22 * s, color: '#333333' }}>
                            出行接送
                        </Text>
                        <Icon style={{ marginLeft: 320 * s }} name='right' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <Image
                            style={{ height: 105 * s, width: 105 * s, marginLeft: 20, marginRight: 40 }}
                            source={require('../../assets/home4.png')}
                        />
                        <Text style={{ fontSize: 22 * s, color: '#333333' }}>
                            E族活动
                        </Text>
                        <Icon style={{ marginLeft: 320 * s }} name='right' />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 35 }}>
                        <TouchableOpacity style={styles.release}>
                            <Text style={{ fontSize: 24 * s, color: '#fff' }}>
                                发布需求
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 60, marginBottom: 30, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 * s, color: '#818181' }}>
                            ©E族之家 版权所有
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hearder: {
        height: 70 * s,
        backgroundColor: '#f23030',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        height: 52 * s,
        width: 530 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6
    },
    touch: {
        height: 120 * s,
        backgroundColor: "#fff",
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    release: {
        height: 65 * s,
        width: 540 * s,
        backgroundColor: '#f23030',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: 200,
        width: width
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width,
        height: 120,
        flex: 1
    }
})