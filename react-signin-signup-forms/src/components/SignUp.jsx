const SignUp = () => {
  return (
    <main>
      <h3>Welcome, join us!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full name</label>
            <input type="text" id="fullName" autoFocus />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <p className="error">Password required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="confirm">Confirm password</label>
            <input type="password" id="confirm" />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="framework">Favorite framework</label>
            <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" /> Accept terms and conditions
            </label>
            <p className="error">Required</p>
          </fieldset>
          <button type="submit">register</button>
        </form>
      </div>
      <p>
        Already have an account? <span>Sign in</span>
      </p>
    </main>
  );
};

export default SignUp;
