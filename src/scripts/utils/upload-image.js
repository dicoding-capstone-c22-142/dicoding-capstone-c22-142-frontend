import { ref as sRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../data/firebase-config';

const uploadImage = (file, callback) => {
  const imgToUpload = file;
  const imgName = file.name;
  let imageUrl;
  let progress;
  const metaData = {
    contentType: imgToUpload.type,
  };

  const storageRef = sRef(storage, `images/${new Date().getTime()}`);
  const uploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData);

  uploadTask.on('state-changed', (snapshot) => {
    progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  }, (error) => {
    console.log('error: image not uploaded');
  }, async () => {
    imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
    callback(imageUrl);
  });
};

export default uploadImage;
