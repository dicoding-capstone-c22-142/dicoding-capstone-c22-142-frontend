import { deleteObject, ref as sRef } from 'firebase/storage';
import { storage } from '../data/firebase-config';

const deleteImage = (file, callback) => {
  const storageRef = sRef(storage, file);
  deleteObject(storageRef).then(() => {
    callback();
  }).catch((error) => {
    console.log(error);
  });
};

export default deleteImage;
