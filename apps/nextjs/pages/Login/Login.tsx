import { AbsoluteCenter as Center } from "@pigpile/core";
import { LoginForm } from "@pigpile/composites";
import { LayoutFullViewport } from "../../components/layouts";

interface PageProps {}

function Login({}: PageProps): JSX.Element {
  return (
    <>
      <Center
        w="80%"
        textAlign="center"
        color="white"
        top={{ base: "45%", sm: "46%" }}
      >
        <LoginForm />
      </Center>
    </>
  );
}

Login.getLayout = (page): JSX.Element => (
  <LayoutFullViewport>{page}</LayoutFullViewport>
);

export default Login;
