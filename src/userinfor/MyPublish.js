import React, { Component } from 'react'
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

export default class MyPublish extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?page=1&limit=11')
            .then(res => res.json())
            .then(res => {
                this.setState({ tits: res.data });
            })
    }
    nextTitle = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=11')
                .then(res => res.json())
                .then(res => {
                    this.setState({ tits: res.data });
                })
        });
    }
    lastTitle = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            }, () => {
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=11')
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ tits: res.data });
                    })
            })
        }
        else {
            ToastAndroid.show('已经是第一页', 1000);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ScrollView>
                    {
                        this.state.tits.map((item) => (
                            <View style={styles.box}>
                                <View style={{ height: 50, width: 310 }}>
                                    <Text style={styles.title}>
                                        {item.title ? (item.title.length > 16 ? item.title.substr(0, 16) + "..." : item.title) : ""}
                                    </Text>
                                </View>
                                <View style={{ height: 50, width: 110 }}>
                                    <Text style={{ fontSize: 16, lineHeight: 50 }}>
                                        {item.create_at.substr(0, 10)}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 16,
                                        lineHeight: 50
                                    }}>
                                        {(parseInt(Math.random() * 2) === 0) ? <Text>已回复</Text> : <Text style={{ color: "red" }}>待回复</Text>}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
                <View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={[styles.button, { marginLeft: 20 }]} onPress={this.lastTitle} >
                            <Text style={{ color: "#fff", fontSize: 15, marginLeft: 38 }}>上一页</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>第{this.state.page}页</Text>
                        <TouchableOpacity style={[styles.button, { marginRight: 20 }]} onPress={this.nextTitle} >
                            <Text style={{ color: "#fff", fontSize: 15, marginLeft: 38 }}>下一页</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#F5F5F5",
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        lineHeight: 50,
        marginLeft: 20
    },
    bottom: {
        height: 130,
        backgroundColor: "#fff",
        marginBottom: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: "red",
        justifyContent: 'center',
        borderRadius: 20
    },
})