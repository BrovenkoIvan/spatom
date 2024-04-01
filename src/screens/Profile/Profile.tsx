import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../styles';
import { SvgBackup } from '../../assets/icons/SvgBackup';
import { SvgChevron } from '../../assets/icons/SvgChevron';

export const Profile = memo(() => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.rowContainer}>
          <View style={[styles.iconContainer, { marginRight: 8 }]}>
            <SvgBackup />
          </View>
          <Text>Резервная копия</Text>
        </View>
        <View style={[styles.iconContainer]}>
          <SvgChevron />
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    padding: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
