export enum MainScreens {
  MedicalRecords = 'Main/MedicalRecords',
  AddRecord = 'Main/AddRecord',
  Profile = 'Main/Profile',
}

export type MainStackScreenList = {
  [MainScreens.MedicalRecords]: undefined;
  [MainScreens.AddRecord]: { title: string };
  [MainScreens.Profile]: undefined;
};
