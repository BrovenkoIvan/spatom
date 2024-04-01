import React, { memo } from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { AddRecord, MedicalRecords, Profile } from '../screens';
import { MainScreens, MainStackScreenList } from './types';
import { Colors } from '../styles/colors';
import { DemoButton } from './components/DemoButton';

const { Screen, Navigator } = createNativeStackNavigator<MainStackScreenList>();

const commonScreenOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: Colors.BACKGROUND },
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: Colors.BLACK,
  },
};

export const MainNavigation = memo(() => {
  return (
    <Navigator>
      <Screen
        name={MainScreens.MedicalRecords}
        component={MedicalRecords}
        options={{
          headerTitle: 'Медкарта',
          headerLeft: () => <DemoButton />,
          ...commonScreenOptions,
        }}
      />
      <Screen
        name={MainScreens.AddRecord}
        component={AddRecord}
        options={({ route }) => ({
          title: route.params.title,
          ...commonScreenOptions,
        })}
      />
      <Screen
        name={MainScreens.Profile}
        component={Profile}
        options={{
          title: 'Профиль',
          ...commonScreenOptions,
        }}
      />
    </Navigator>
  );
});
