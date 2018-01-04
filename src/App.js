import React, { Component } from 'react';

import {
  Modal, Text, TouchableHighlight, View, StyleSheet, TouchableOpacity, PanResponder, // we want to bring in the PanResponder system
  Animated,
  Easing,
  Dimensions
} from 'react-native'

const { height, width } = Dimensions.get('window');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      margin: height-120
      // modalVisible: false,
      // panResponder: null, 
      // position: null,
      // x: 0,
      // y: 0
    }
  }

  componentWillMount(){
    this.animated = new Animated.ValueXY();
    this._value = { x: 0, y: 0 }
    this.animated.addListener((val) => this._value = val) ;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true ,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: ( event, gesture ) => {
        this.animated.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        this.animated.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([ null , { dx: 0 ,dy: this.animated.y } ]) ,
      onPanResponderRelease: ( e, gest ) => {
        console.log(gest)
        if ( gest.moveY >= height-50 ){
          this.animated.setOffset({ x: 0, y: 0 } )
        }

      }
    })
  }

  reset() {
    // debugger;rrerrrrrrrrrrrrr
    // console.log(this.state.position)
    // Animated.spring(this.state.position, {
    //   toValue: { x: 0 , y: 0 }
    // }).start();
    // [null, {dy: position.y}]
  }

  // styling(){
  //   const margin = new Animated.Value(0) ;
  //   const margin1 = margin.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [height-120, 100 ]
  //   })
  //   this.setState({margin: margin1})
  //   Animated.timing(margin, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.ease
  //   }).start();
  // }

  render() {
    const animatedstyle = {
      transform: this.animated.getTranslateTransform()
    } 
    return (
      <View style={styles.container}>
        <View style={{ position: 'absolute', height: '100%', width: '100%' }} >
          
          <Animated.View style={[animatedstyle, {marginTop: height-120}]} >
            <TouchableOpacity >
              <View  { ...this.panResponder.panHandlers } style={[styles.circle]} style={styles.circle} />
            </TouchableOpacity>
            <View style={{ width: '100%', height: 400, backgroundColor: 'red' }} ></View>
          </Animated.View>
          {/* on touch part */}
          {/* <Animated.View style={{marginTop: this.state.margin,}} >
            <TouchableOpacity onPress={this.styling.bind(this)} >
              <View style={[styles.circle]} style={styles.circle} />
            </TouchableOpacity>
            <View style={{ width: '100%', height: 400, backgroundColor: 'red' }} ></View>
          </Animated.View> */}
        </View>

      </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    height: '70%',
    alignItems: 'center',
    backgroundColor: 'gray',

  },
  text: {
    color: '#3f2949',
    marginTop: 10
  },
  circle: {
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50
  },
})