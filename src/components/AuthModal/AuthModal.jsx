import { useState } from "react";

export default function AuthModal() {
  const [type, setType] = useState("register");

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <h2 className="auth-modal__title">
          {type === "register" ? "Sign up" : "Login"}
        </h2>
        <label className="auth-modal__label">
          Username
          <input
            type="text"
            placeholder="Username"
            className="auth-modal__input"
          />
        </label>

        {type === "register" && (
          <label className="auth-modal__label">
            E-Mail
            <input
              type="email"
              placeholder="E-Mail"
              className="auth-modal__input"
            />
          </label>
        )}

        <label className="auth-modal__label">
          Password
          <input
            type="password"
            placeholder="Password"
            className="auth-modal__input"
          />
        </label>

        <button type="button" className="auth-modal__btn">
          {type === "register" ? "Sign up" : "Login"}
        </button>

        <p className="auth-modal__text">
          {type === "register" ? (
            <>
              Already have an account?{" "}
              <button
                className="auth-modal__btn-change"
                onClick={() => setType("login")}
              >
                Log in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="auth-modal__btn-change"
                onClick={() => setType("register")}
              >
                Register
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
