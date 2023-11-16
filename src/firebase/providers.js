import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        //console.log('credentials', credentials);
        const { displayName, email, photoURL, uid } = result.user;
        //console.log('user', result.user);
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

  try {

      const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
      console.log('resp', resp);
      const { uid, photoURL } = resp.user;

      return {
          ok: true,
          uid, photoURL, email, displayName
      }

  } catch (error) {
      console.log(error);
      return { ok: false, errorMessage: error.message }
  }

}

