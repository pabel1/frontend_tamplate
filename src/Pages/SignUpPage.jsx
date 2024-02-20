import AuthForm from "../Components/Auth/AuthForm";

const SignUpPage = () => {
  const handleSignUp = () => {};
  return (
    <AuthForm
      title="Sign up to join with stack"
      buttonText="Sign Up"
      onSubmit={(data) => handleSignUp(data)}
      linkText="Already have an account?"
      link="/login"
      linkTo="Sign In"
      formType={"signup"}
    />
  );
};

export default SignUpPage;
