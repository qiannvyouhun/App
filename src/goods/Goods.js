import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 640;
const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good2.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good2.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good1.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../../assets/good2.png')
    }
]

export default class Goods extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput
                            placeholder='请输入商品名称'
                            placeholderTextColor='#999999'
                            style={{
                                width: 500 * s,
                                height: "100%",
                                paddingLeft: 10,
                                fontSize: 15
                            }}
                        />
                        <Icon color='#a0a0a0' name='search' style={{ fontSize: 25 }} />
                    </View>
                </View>
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17, color: 'red' }}>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17 }}>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17 }}>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17 }}>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 17 }}>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: '#f4f4f4' }}
                    data={goods}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.good}>
                            <Image
                                resizeMode="contain"
                                source={item.img}
                                style={{ height: 180 * s, marginTop: 60 * s }}
                            />
                            <Text
                                style={{ marginTop: 20 }}

                            >{item.title}</Text>
                            <Text
                                style={{ width: '100%', color: 'red' }}
                            >{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        height: 40,
        width: 544 * s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav: {
        height: 73 * s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good: {
        width: 290 * s,
        backgroundColor: '#fff',
        marginLeft: 20 * s,
        marginTop: 20 * s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center'
    },
})
