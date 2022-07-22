import { useDispatch } from "react-redux";
import { AbsoluteCenter as Center } from "@josulliv101/core";
import { LoginForm } from "@josulliv101/composites";
import { LayoutFullViewport } from "../../components/layouts";
import { signInUser, wrapper } from "store";

interface PageProps {}

function Login({}: PageProps): JSX.Element {
  const dispatch = useDispatch();
  const handleSignIn = (provider) => {
    console.log("handleSignIn", provider);
    dispatch(signInUser({ provider, cb: () => console.log("cb here") }));
  };
  return (
    <>
      <Center
        w="80%"
        textAlign="center"
        color="white"
        top={{ base: "45%", sm: "46%" }}
      >
        <LoginForm onSignInWithProvider={handleSignIn} />
      </Center>
    </>
  );
}

Login.getLayout = (page, layoutProps): JSX.Element => (
  <LayoutFullViewport {...layoutProps}>{page}</LayoutFullViewport>
);

export default Login;
