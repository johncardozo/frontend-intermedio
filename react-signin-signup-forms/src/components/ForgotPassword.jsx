import { useContext } from "react";
import SignContext from "../context/SignContext";

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);
  return (
    <main>
      <h3>Forgot password?</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <button type="submit">Remember me!</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            setStep("signin");
          }}
        >
          Sign in!
        </span>
      </p>
    </main>
  );
};

export default ForgotPassword;
