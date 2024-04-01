import React, { memo, useCallback, useRef, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, TextInputProps, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../../styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const UITextInput = memo<TextInputProps>(({ ...props }) => {
  const inputRef = useRef<TextInput>(null);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [value, setValue] = useState('');

  const handlePress = useCallback(() => {
    setIsInputFocus(true);
    inputRef.current?.focus();
  }, []);

  const borderShow = useDerivedValue(() => {
    return value.length > 0
      ? 1
      : isInputFocus === true
      ? withSpring(1, {
          damping: 500,
          overshootClamping: true,
          stiffness: 300,
        })
      : withSpring(0, {
          damping: 500,
          overshootClamping: true,
          stiffness: 300,
        });
  });

  const handleBlur = useCallback(() => {
    setIsInputFocus(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsInputFocus(true);
  }, []);

  const rBorderStyle = useAnimatedStyle(() => {
    const color = interpolateColor(borderShow.value, [0, 1], [Colors.OUTLINED, Colors.MAIN]);

    return {
      borderColor: color,
    };
  }, []);

  const rSearchColor = useAnimatedProps(() => {
    const color = interpolateColor(borderShow.value, [0, 1], [Colors.OUTLINED, Colors.MAIN]);

    return {
      fill: color,
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress} style={{ height: 50 }}>
      <Animated.View style={[styles.container, rBorderStyle]}>
        <View style={styles.searchIcon}>
          <Svg height="100%" viewBox="0 0 24 24" width="100%">
            <AnimatedPath
              fill={'url(#grad)'}
              animatedProps={rSearchColor}
              d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </Svg>
        </View>
        <TextInput
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={setValue}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.GRAY}
          style={[styles.inputStyle]}
          autoCorrect={false}
          autoCapitalize={'none'}
          {...props}
        />
      </Animated.View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputStyle: {
    paddingHorizontal: 10,
    height: '100%',
    color: Colors.GRAY,
    justifyContent: 'center',
    fontWeight: '500',
    flexBasis: 100,
    flexGrow: 1,
  },
  searchIcon: {
    width: 34,
    height: '100%',
    marginLeft: 10,
  },
});
