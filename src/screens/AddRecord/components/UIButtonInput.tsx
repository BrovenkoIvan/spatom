import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native-gesture-handler';
import { Colors } from '../../../styles';

interface UIButtonInputProps extends TouchableOpacityProps {
  title: string;
  icon?: React.FC;
  isSelected?: boolean;
}

export const UIButtonInput = memo<UIButtonInputProps>(
  ({ title, icon: Icon = () => null, isSelected = true, ...props }) => {
    return (
      <TouchableOpacity {...props} style={[styles.container, props.style]}>
        <Text style={{ color: isSelected ? Colors.BLACK : Colors.GRAY }}>{title}</Text>
        <View style={[styles.iconContainer]}>
          <Icon />
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderColor: Colors.OUTLINED,
    borderWidth: 1,
  },
  iconContainer: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
});
