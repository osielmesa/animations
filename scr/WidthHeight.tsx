import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native';

// Animating width and height affects layout, this means the surround/inside elements will be affected, sometimes this is needed,
// pay attention to the text inside the box while animating
const WidthHeight = () => {
  const widthHeightAnim = useRef(new Animated.Value(120)).current;

  const startAnimation = () => {
    Animated.timing(widthHeightAnim, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(widthHeightAnim, {
        toValue: 120,
        duration: 1500,
        useNativeDriver: false, // width and height animations are not supported for native driver
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[
            styles.box,
            {width: widthHeightAnim, height: widthHeightAnim},
          ]}>
          <Text>
            This is a long text. This is a long text. This is a long text. This
            is a long text
          </Text>
        </Animated.View>
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
    backgroundColor: 'tomato',
  },
});

export default WidthHeight;
