import { BSON } from 'realm';

export namespace NMedicalRecord {
  export interface IDoctorReport {
    _id: BSON.ObjectID;
    doctor: string;
    date: Date;
    time: string;
    downloadedFiles: string[];
  }
}
