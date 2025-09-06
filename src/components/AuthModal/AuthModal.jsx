import { useState } from "react";
import styles from "./AuthModal.module.scss";

export default function AuthModal() {
  const [type, setType] = useState("register");

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2 className={styles.title}>
          {type === "register" ? "Sign up" : "Login"}
        </h2>
        <label className={styles.label}>
          Username
          <input type="text" placeholder="Username" className={styles.input} />
        </label>

        {type === "register" && (
          <label className={styles.label}>
            E-Mail
            <input type="email" placeholder="E-Mail" className={styles.input} />
          </label>
        )}

        <label className={styles.label}>
          Password
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
        </label>

        <button type="button" className={styles.btn}>
          {type === "register" ? "Sign up" : "Login"}
        </button>

        <p className={styles.text}>
          {type === "register" ? (
            <>
              Already have an account?{" "}
              <button
                className={`${styles.btnChange} ${styles.btnToLogin}`}
                onClick={() => setType("login")}
              >
                Log in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className={`${styles.btnChange} ${styles.btnToRegister}`}
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
