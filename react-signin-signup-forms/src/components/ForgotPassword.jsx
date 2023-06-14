import { useContext } from "react";
import { useFormik } from "formik";
import SignContext from "../context/SignContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    // Simula el envío de datos al backend
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Tiene acceso a los datos del formulario
    console.log(
      "%cExito!",
      "color: YellowGreen",
      `Se ha enviado su password a la cuenta ${values.email}!`
    );

    // Limpia al formulario
    actions.resetForm();
  };

  // Hook useFormik que permite maneja la info del formulario
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  return (
    <main>
      <h3>Forgot password?</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
              className={errors.email ? "error-forgot-input" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </fieldset>
          <button disabled={isSubmitting} type="submit">
            Remember me!
          </button>
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
