import './LoginJoin.scss';

const LoginJoin = () => {
  return (
    <div className="loginJoin">
      <div className="Login">
        <section>
          <article className="imgWrap">
            <img
              className="img"
              src="/images/gayatri-malhotra-_CqJImMQiVQ-unsplash.jpg"
              alt=""
            />
          </article>
          <article className="loginSignUpBox">
            <header className="header">
              <span>Log in 🍻</span>
            </header>
            <form className="loginForm">
              <input
                className="inputEmail"
                type="text"
                placeholder="Type your email"
              />
              <input
                className="inputPassword"
                type="password"
                placeholder="Type your PassWard"
              />
              <button className="inputButton">Log in</button>
              <button className="GoSignup">Join HangOver 🍻</button>
            </form>
          </article>
        </section>
      </div>

      <div className="JoinFirstPage">
        <section>
          <article className="imgWrap">
            <img
              className="img"
              src="/images/heineken-206147_1920.jpg"
              alt=""
            />
          </article>
          <article className="loginSignUpBox">
            <header className="header">
              <a className="backLink">Back</a>
              <span>Join HangOver 🍻</span>
            </header>
            <form className="signUpForm">
              <input
                className="signUpFirstName"
                type="text"
                placeholder="First Name"
              />

              <button className="signUpButton">Go To HangOver 🍻</button>
            </form>
          </article>
        </section>
      </div>

      <div className="JoinSecondPage">
        <section>
          <article className="imgWrap">
            <img
              className="img"
              src="/images/heineken-206147_1920.jpg"
              alt=""
            />
          </article>
          <article className="loginSignUpBox">
            <header className="header">
              <a className="backLink">Back</a>
              <span>Join HangOver 🍻</span>
            </header>
            <form className="signUpForm">
              <input
                className="signUpFirstName"
                type="text"
                placeholder="First Name"
              />
              <input
                className="signUpLastName"
                type="passWord"
                placeholder="Last Name"
              />
              <input
                className="signUpPassword"
                type="passWord"
                placeholder="
                Enter your desired password"
              />

              <button className="signUpButton">Go To HangOver 🍻</button>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

export default LoginJoin;
