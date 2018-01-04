import React, { Component } from 'react';

import {
    Modal, Text, TouchableHighlight, View, StyleSheet, TouchableOpacity, PanResponder, // we want to bring in the PanResponder system
    Animated,
    Image,
    Easing,
    Dimensions
} from 'react-native'

import { CircularSlider } from 'circular-slider';


const { height, width } = Dimensions.get('window');

class Circular extends Component {

    constructor() {
        super()
        // this.animatedValue1 = new Animated.Value(0)
        // this.animatedValue2 = new Animated.Value(0)
        // this.animatedValue3 = new Animated.Value(0)
        this.state = {
            angle: 0
        }
    }

    // componentDidMount() {
    //     this.animate()
    // }
    // animate() {
    //     this.animatedValue1.setValue(0)
    //     this.animatedValue2.setValue(0)
    //     this.animatedValue3.setValue(0)
    //     const createAnimation = function (value, duration, easing, delay = 0) {
    //         return Animated.timing(
    //             value,
    //             {
    //                 toValue: 1,
    //                 duration,
    //                 easing,
    //                 delay
    //             }
    //         )
    //     }
    //     Animated.parallel([
    //         createAnimation(this.animatedValue1, 2000, Easing.ease),
    //         createAnimation(this.animatedValue2, 1000, Easing.linear, 5000),
    //         createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
    //     ]).start()
    // }

    render() {
        // const spinText = this.animatedValue2.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ['0deg', '360deg']
        // })
        return (
            <View style={[styles.container]}> 
            <CircularSlider angle={this.state.angle} onMove={angle => this.setState({ angle })}/>

                <Animated.View
                    style={{ marginTop: 20, marginRight: '50%', transform: [{ rotate: spinText }] }}>
                    <View style={{ backgroundColor: 'red', justifyContent: 'flex-end' }} >
                        <Text style={{ color: 'white', textAlign: 'right' }} >skmdfkjdsfk</Text>

                    </View>
                </Animated.View>
                </View> 
               
        )
    }
    // constructor(props) {
    //     super(props);
    //     this.spinValue = new Animated.Value(0);
    // }

    // componentDidMount() {
    //     this.spin()
    // }
    // spin() {
    //     this.spinValue.setValue(0)
    //     Animated.timing(
    //         this.spinValue,
    //         {
    //             toValue: 1,
    //             duration: 4000,
    //             easing: Easing.linear
    //         }
    //     ).start(() => this.spin())
    // }
    // render() {
    //     const spin = this.spinValue.interpolate({
    //         inputRange: [0, 1],
    //         outputRange: ['0deg', '360deg']
    //     })
    //     return (
    //         <View style={styles.container}>
    //             <Animated.Image
    //                 style={{
    //                     width: 227,
    //                     height: 200,
    //                     transform: [{ rotate: spin }]
    //                 }}
    //                 source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
    //             />
    //         </View>
    //     )
    // }
}
export default Circular

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },

})