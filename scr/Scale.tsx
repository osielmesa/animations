import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

// Scale x and y can be done independently & they are applied from the center of the box.
const Scale = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 2, // 2 means double the size. I fwe use negative values it will scale but in reverse (we can do flip animation), float values will scale down
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleAnim, {
        toValue: 1, // 1 means original size.
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[styles.box, {transform: [{scale: scaleAnim}]}]} // scaleY will scale vertically and scaleX will scale horizontally
        />
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

export default Scale;
