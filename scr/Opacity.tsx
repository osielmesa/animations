import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Opacity = () => {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, {opacity: opacityAnim}]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'tomato',
  },
});

export default Opacity;
