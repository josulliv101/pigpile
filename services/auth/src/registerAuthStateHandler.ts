import {
  onAuthStateChanged,
  signInAnonymously,
  IdTokenResult,
  User,
} from "firebase/auth";
import { User as PigpileUser } from "@pigpile/types";
import { auth } from "../";

const getUser = async (authUser: User | null): Promise<PigpileUser> => {
  if (authUser) {
    const { uid, displayName, isAnonymous } = authUser;
    const token: IdTokenResult = await authUser.getIdTokenResult();
    return {
      uid,
      displayName,
      isAnonymous,
      isAdmin: !!token.claims.admin,
    };
  }
  return {
    uid: "",
    displayName: "",
    isAnonymous: true,
    isAdmin: false,
  };
};

export const registerAuthStateHandler = (onLogin: (u: PigpileUser) => void) => {
  onAuthStateChanged(auth, async (authUser) => {
    const user = await getUser(authUser);
    console.log("onAuthStateChanged", authUser, user);
    onLogin(user);
  });
};

/*

    console.log('handle auth state change', authUser)
    if (authUser && auth?.currentUser) {
      const { uid, displayName, isAnonymous } = authUser;

      auth.currentUser.getIdTokenResult()
        .then((idTokenResult) => {
           let isAdmin = false
           console.log('idTokenResult', idTokenResult)
           if (String(idTokenResult.claims.admin) === 'true') {
             isAdmin = true;
           }
           const payload = { uid, displayName, isAnonymous, isAdmin }
           console.log('getIdTokenResult()', payload)
           dispatch(login(payload))
           if (callback) {
             callback(idTokenResult.token)
           }
        })
        .catch((error) => {
          console.log(error);
        });


      console.log('auth state change cb', uid, { user })
      // Router.push('/')
    } else {
      console.log('auth state change user -- no user')
      signInAnonymously(auth)
          .then((u) => {

            const { uid } = u.user;
            console.log('user signed in!@!@!', uid)
            dispatch(login({ uid, displayName: 'Anonymous', isAnonymous: true }))
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error signing in', errorCode, errorMessage)
          });
    }

*/
