import Realm, { BSON, ObjectSchema } from 'realm';

export class MedicalRecord extends Realm.Object<MedicalRecord> {
  _id!: BSON.ObjectId;
  type!: string;
  doctor!: string;
  date!: Date;
  downloadedFiles!: string[];

  static schema: ObjectSchema = {
    name: 'MedicalRecord',
    properties: {
      _id: 'objectId',
      type: { type: 'string', indexed: 'full-text' },
      doctor: 'string',
      date: 'date',
      downloadedFiles: 'string[]',
    },
    primaryKey: '_id',
  };
}
