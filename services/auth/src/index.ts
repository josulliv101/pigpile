import { getAuth } from "firebase/auth";
import { connectClientApp } from "@pigpile/connect-client";

export { signOut, signInWithPopup, GithubAuthProvider } from "firebase/auth";
export * from "./registerAuthStateHandler";

// connectClientApp();

export const auth = getAuth();
