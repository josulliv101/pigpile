import { useDispatch } from "react-redux";
import { AbsoluteCenter as Center } from "@josulliv101/core";
import { LoginForm } from "@josulliv101/composites";
import { LayoutFullViewport } from "../../components/layouts";
import { signInUserThunk, statusSlice } from "store";

interface PageProps {}

function Login({}: PageProps): JSX.Element {
  const dispatch = useDispatch();

  const showFeatureNotImplementedStatus = () => {
    dispatch(
      statusSlice.actions.setStatus({
        title: `Feature not implemented yet.`,
        // description: "Only Github currently works as a provider.",
        status: "info",
        isCloseable: true,
      })
    );
  };
  const handleSignIn = (provider) => {
    console.log("handleSignIn", provider.providerId, provider);
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
    dispatch(signInUserThunk({ provider, cb: () => console.log("cb here") }));
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

Login.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutFullViewport {...layoutProps}>{page}</LayoutFullViewport>
);

export default Login;
