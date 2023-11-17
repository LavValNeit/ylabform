import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import ErrorMessage from "../../ui/ErrorMessage";
import { authenticate } from "../../../fake-authentication/authenticate";

type AuthInputsType = {
  email: "string";
  password: "string";
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthInputsType>();

  const onSubmitHandler: SubmitHandler<AuthInputsType> = (data) => {
    authenticate(data.email, data.password);
    reset();
  };

  return (
    <Form>
      <FormRow>
        <Label htmlFor="email">Email address:</Label>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            validate: (value) =>
              /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
          })}
        />
        {errors.email && <ErrorMessage>Invalid email</ErrorMessage>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && <ErrorMessage>Invalid password</ErrorMessage>}
      </FormRow>
      <FormRow>
        <Button $size="large" onClick={handleSubmit(onSubmitHandler)}>
          Sign in
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
