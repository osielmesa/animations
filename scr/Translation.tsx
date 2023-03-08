import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

// TranslateX & TranslateY will not cause layout changes.
const Translation = () => {
  const translateAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(translateAnim, {
      toValue: 300, // Positive values goes down/right, negative values goes up/left
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translateAnim, {
        toValue: -300,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(translateAnim, {
          toValue: 0, // 0 returns to original position
          duration: 1500,
          useNativeDriver: true,
        }).start();
      });
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View
          style={[styles.box, {transform: [{translateY: translateAnim}]}]}
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

export default Translation;
