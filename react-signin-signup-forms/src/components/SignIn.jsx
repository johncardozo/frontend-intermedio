import { useContext } from "react";
import SignContext from "../context/SignContext";

const SignIn = () => {
  const { setStep } = useContext(SignContext);
  return (
    <main>
      <h3>Hello, friend!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <p className="error">Password required</p>
          </fieldset>
          <button type="submit">Login</button>
          <div
            className="forgot"
            onClick={() => {
              setStep("forgot");
            }}
          >
            Forgot password?
          </div>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span
          onClick={() => {
            setStep("signup");
          }}
        >
          Sign up!
        </span>
      </p>
    </main>
  );
};

export default SignIn;
