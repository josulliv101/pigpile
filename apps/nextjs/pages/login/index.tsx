import { Provider } from "@josulliv101/types";
import { AbsoluteCenter as Center } from "@josulliv101/core";
import { LoginForm } from "@josulliv101/composites";
import { LayoutFullViewport } from "../../components/layouts";
import { signInUserThunk, statusSlice } from "store";
import { useAppDispatch } from "hooks";

function Login(): JSX.Element {
  const dispatch = useAppDispatch();

  const showFeatureNotImplementedStatus = () => {
    dispatch(
      statusSlice.actions.setStatus({
        title: `Feature not implemented yet.`,
        status: "info",
        isCloseable: true,
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
          isCloseable: true,
        })
      );
      return;
    }
    dispatch(signInUserThunk(provider));
  };
  return (
    <>
      <Center w="80%" textAlign="center" color="white" top={{ base: "45%", sm: "46%" }}>
        <LoginForm
          onSignInWithProvider={handleSignIn}
          onSignIn={showFeatureNotImplementedStatus}
          onSignUp={showFeatureNotImplementedStatus}
          onForgotPassword={showFeatureNotImplementedStatus}
        />
      </Center>
    </>
  );
}

Login.getLayout = (page): JSX.Element => <LayoutFullViewport>{page}</LayoutFullViewport>;

export default Login;
