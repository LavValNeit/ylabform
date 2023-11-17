import styled from "styled-components";
import Heading from "../components/ui/Heading";
import LoginForm from "../components/features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2.4rem;
  background-color: var(--color-bg);

  h4 {
    text-align: center;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4">Sign in to account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
