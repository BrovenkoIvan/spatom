import { useQuery } from '@realm/react';
import React, { memo, useCallback, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { SvgPlus } from '../../assets/icons';
import { MedicalRecord } from '../../models';
import { RecordTypeButton } from './components';
import { SvgDoctor } from '../../assets/icons/SvgDoctor';
import { Colors } from '../../styles/colors';
import { MainScreens, MainStackScreenList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type MedicalRecordsNavigationProp = NativeStackNavigationProp<
  MainStackScreenList,
  MainScreens.MedicalRecords
>;

export const MedicalRecords = memo(() => {
  const records = useQuery(MedicalRecord);
  const { navigate } = useNavigation<MedicalRecordsNavigationProp>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleRecordType = useCallback(
    (type: string) => {
      bottomSheetModalRef.current?.close();
      navigate({ name: MainScreens.AddRecord, params: { title: type } });
    },
    [navigate],
  );

  return (
    <View style={styles.container}>
      <Text>MedicalRecords</Text>
      <TouchableOpacity style={styles.addContainer} onPress={handlePresentModalPress}>
        <SvgPlus />
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
        enableDynamicSizing
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.addRecordTitle}>Добавить запись</Text>
          <RecordTypeButton
            title="Заключение врача"
            icon={SvgDoctor}
            iconBackground={Colors.PURPLE}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Диагностика"
            icon={SvgDoctor}
            iconBackground={Colors.RED}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Процедура"
            icon={SvgDoctor}
            iconBackground={Colors.BLUE}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Анализы"
            icon={SvgDoctor}
            iconBackground={Colors.LIGHT_PURPLE}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Болезни"
            icon={SvgDoctor}
            iconBackground={Colors.PUSH_BUTTON}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Аллеергия"
            icon={SvgDoctor}
            iconBackground={Colors.GREEN}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Вакцинация"
            icon={SvgDoctor}
            iconBackground={Colors.YELLOW}
            handleRecordType={handleRecordType}
          />
          <RecordTypeButton
            title="Другое"
            icon={SvgDoctor}
            iconBackground={Colors.BROWN}
            handleRecordType={handleRecordType}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: Colors.BACKGROUND,
  },
  addContainer: {
    backgroundColor: Colors.MAIN,
    width: 56,
    height: 56,
    borderRadius: 28,
    padding: 18,
    position: 'absolute',
    bottom: 56,
    right: 16,
  },
  contentContainer: {
    // flex: 1,
    paddingBottom: 24,
  },
  addRecordTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 12,
  },
});
