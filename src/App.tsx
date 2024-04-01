import React, { memo } from 'react';
import { MedicalRecord } from './models';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation';
import { RealmProvider } from '@realm/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const App = memo(() => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <RealmProvider schema={[MedicalRecord]} schemaVersion={2}>
            <MainNavigation />
          </RealmProvider>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
});
