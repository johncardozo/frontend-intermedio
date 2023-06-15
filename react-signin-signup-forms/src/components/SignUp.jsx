import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SignContext from "../context/SignContext";
import { signUpSchema } from "../schemas/signUpSchema";

// Inicialización de valores del formulario
const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const onSubmit = () => {
  console.log("Form submitted!");
};

const SignUp = () => {
  const { setStep } = useContext(SignContext);
  return (
    <main>
      <h3>Welcome, join us!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="fullName">Full name</label>
              <Field id="fullName" name="fullName" type="text" autoFocus />
              <ErrorMessage
                name="fullName"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirm password</label>
              <Field id="confirm" name="confirm" type="password" />
              <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="framework">Favorite framework</label>
              <Field id="framework" name="framework" as="select">
                <option value="">Select your framework</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </Field>
              <ErrorMessage
                name="framework"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field id="terms" name="terms" type="checkbox" /> Accept terms
                and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit">register</button>
          </Form>
        </Formik>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            setStep("signin");
          }}
        >
          Sign in
        </span>
      </p>
    </main>
  );
};

export default SignUp;
