import { IdTokenResult, User as AuthUser } from "firebase/auth";
import { User as PigpileUser } from "@josulliv101/types";

export const getUser = async (
  authUser: AuthUser | null
): Promise<PigpileUser | null> => {
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
  return null;
  /*  return {
    uid: "",
    displayName: "",
    isAnonymous: true,
    isAdmin: false,
  };*/
};
