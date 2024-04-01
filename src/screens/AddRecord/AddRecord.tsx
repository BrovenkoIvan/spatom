import React, { memo, useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles/colors';
import { UITextInput } from './components/UITextInput';
import { UIButtonInput } from './components/UIButtonInput';
import { SvgTime } from '../../assets/icons/SvgTime';
import { SvgSchedule } from '../../assets/icons/SvgSchedule';
import { SvgPlus } from '../../assets/icons';
import DatePicker from 'react-native-date-picker';
import { formatDate, formatTime } from '../../utilities';

const { width } = Dimensions.get('screen');

enum RecordPropertiesButtons {
  FIO = 'ФИО',
  COLOR = 'Цвет',
  HOSPITAL = 'Клиника',
  REMARKS = 'Примечания',
}

export const AddRecord = memo(() => {
  const [doctor, setDoctor] = useState('');
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const onConfirmDate = useCallback((date: Date) => {
    setIsDateSelected(true);
    setOpenDatePicker(false);
    setDate(date);
  }, []);

  const onConfirmTime = useCallback((date: Date) => {
    setIsTimeSelected(true);
    setOpenTimePicker(false);
    setTime(date);
  }, []);

  const handleDate = useCallback(() => {
    setOpenDatePicker(true);
  }, []);

  const handleTime = useCallback(() => {
    setOpenTimePicker(true);
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ marginHorizontal: 14 }}>
          <Text style={styles.inputTitle}>Врач</Text>
          <View style={styles.doctorInputContainer}>
            <UITextInput value={doctor} placeholder="Врач" onChangeText={setDoctor} />
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.inputWithTitleContainer}>
              <Text style={styles.inputTitle}>Дата</Text>
              <UIButtonInput
                title={formatDate(date)}
                icon={SvgSchedule}
                onPress={handleDate}
                isSelected={isDateSelected}
              />
            </View>
            <View style={styles.inputWithTitleContainer}>
              <Text style={styles.inputTitle}>Время</Text>
              <UIButtonInput
                title={formatTime(time)}
                icon={SvgTime}
                onPress={handleTime}
                isSelected={isTimeSelected}
              />
            </View>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[{ marginVertical: 14 }]}
          contentContainerStyle={{ gap: 14, flexDirection: 'row', paddingHorizontal: 14 }}>
          {[
            RecordPropertiesButtons.FIO,
            RecordPropertiesButtons.COLOR,
            RecordPropertiesButtons.HOSPITAL,
            RecordPropertiesButtons.REMARKS,
          ].map((item, i) => (
            <UIButtonInput
              title={item}
              icon={() => <SvgPlus fill={Colors.GRAY} size="18px" />}
              key={item + i}
              style={{ gap: 10, paddingVertical: 6, flexDirection: 'row-reverse' }}
            />
          ))}
        </ScrollView>
        <Text style={[styles.inputTitle, { fontWeight: '600', marginHorizontal: 14 }]}>
          Загруженные файлы
        </Text>
        <View style={[styles.filesContainer, { paddingHorizontal: 14 }]}>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <TouchableOpacity key={item + i} style={styles.addFileButton}>
              <SvgPlus size="21px" fill={Colors.MAIN} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <DatePicker
        mode="date"
        modal={true}
        open={openDatePicker}
        date={date}
        onConfirm={onConfirmDate}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
      <DatePicker
        mode="time"
        modal={true}
        open={openTimePicker}
        date={time}
        onConfirm={onConfirmTime}
        minuteInterval={5}
        onCancel={() => {
          setOpenTimePicker(false);
        }}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  inputTitle: {
    marginBottom: 8,
  },
  doctorInputContainer: {
    marginBottom: 14,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  inputWithTitleContainer: {
    flexGrow: 1,
  },
  filesContainer: {
    gap: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
  },
  addFileButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: Colors.OUTLINED,
    width: (width - 14 * 5) / 4,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
