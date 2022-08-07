import { Provider } from "@josulliv101/types";
import { AbsoluteCenter as Center } from "@josulliv101/core";
import { LoginForm } from "@josulliv101/composites";
import { LayoutFullViewport } from "components/layouts";
import { signInUserThunk, statusSlice, getAuthApi } from "store";
import { useAppDispatch } from "hooks";

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  (async () => await getAuthApi(dispatch))();

  const showFeatureNotImplementedStatus = () => {
    dispatch(
      statusSlice.actions.setStatus({
        title: `Feature not implemented yet.`,
        status: "info",
      })
    );
  };
  const handleSignIn = (provider: Provider) => {
    if (provider.providerId !== "github.com") {
      dispatch(
        statusSlice.actions.setStatus({
          title: `${provider.providerId} provider not implemented yet.`,
          description: "Only Github currently works as a provider.",
          status: "info",
        })
      );
      return;
    }
    dispatch(signInUserThunk(provider));
  };
  return (
    <>
      <Center
        color="white"
        textAlign="center"
        top={{ base: "45%", sm: "46%" }}
        w="80%"
      >
        <LoginForm
          onForgotPassword={showFeatureNotImplementedStatus}
          onSignIn={showFeatureNotImplementedStatus}
          onSignInWithProvider={handleSignIn}
          onSignUp={showFeatureNotImplementedStatus}
        />
      </Center>
    </>
  );
}

Login.getLayout = (page): JSX.Element => <LayoutFullViewport>{page}</LayoutFullViewport>;

export default Login;
