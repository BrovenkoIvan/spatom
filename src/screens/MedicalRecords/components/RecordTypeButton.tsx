import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface RecordTypeButtonProps {
  title: string;
  icon: React.FC;
  iconBackground: string;
  handleRecordType: (type: string) => void;
}

export const RecordTypeButton = memo<RecordTypeButtonProps>(
  ({ title, icon: Icon, iconBackground, handleRecordType }) => {
    return (
      <TouchableOpacity style={styles.container} onPress={() => handleRecordType(title)}>
        <View style={[styles.iconContainer, { backgroundColor: iconBackground }]}>
          <Icon />
        </View>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D9E1EC',
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 6,
    padding: 2,
  },
});
