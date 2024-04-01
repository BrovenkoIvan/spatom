import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgAccount } from '../../assets/icons';
import { Colors } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainScreens, MainStackScreenList } from '../types';

type DemoButtonNavigationProps = NativeStackNavigationProp<
  MainStackScreenList,
  MainScreens.MedicalRecords
>;

export const DemoButton = memo(() => {
  const { navigate } = useNavigation<DemoButtonNavigationProps>();

  const handleDemo = useCallback(() => {
    navigate(MainScreens.Profile);
  }, [navigate]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleDemo}>
      <View style={styles.iconContainer}>
        <SvgAccount />
      </View>
      <Text>{'Demo'}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: Colors.OUTLINED,
    borderRadius: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
});
