import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "@pigpile/types";
import { connectClientApp } from "@pigpile/connect-client";
import { authSlice, selectIsAppReady, selectUser, signOutUser } from "../store";

export function useConnectClient() {
  const user = useSelector(selectUser());
  const isAppReady = useSelector(selectIsAppReady());
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onAuthStateChanged = (user: User) =>
    dispatch(authSlice.actions.autheniticate(user));

  const onLogout = () => dispatch(signOutUser());

  console.log("useConnectClient RENDER", { user, error });
  useEffect(() => {
    console.log("useConnectClient useEffect");
    try {
      connectClientApp(onAuthStateChanged);
    } catch (error: unknown) {
      const msg = getErrorMessage(error);
      console.log("ERROR", msg);
      setError(msg);
    }
  }, [dispatch]);

  return {
    error,
    isAppReady,
    user,
    onLogout,
  };
}

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);
