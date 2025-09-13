import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthModal({ setUsername, isHidden, setIsHidden }) {
  const [type, setType] = useState("register");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (type === "register") {
      const emailExists = users.some((u) => u.email === data.email);
      if (emailExists) {
        toast.error("This email is already registered!");
        return;
      }

      const usernameExists = users.some((u) => u.username === data.username);
      if (usernameExists) {
        toast.error("This username is already taken!");
        return;
      }

      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));

      setUsername(data.username);
      localStorage.setItem("currentUser", JSON.stringify(data));

      setIsHidden(true);
      reset();
      toast.success(`Account created for ${data.username}!`);
    } else {
      const foundUser = users.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );

      if (!foundUser) {
        toast.error("User with this name and password not found");
        return;
      }
      setUsername(foundUser.username);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setIsHidden(true);
      reset();
      toast.success(`Welcome back, ${foundUser.username}!`);
    }
  };

  const onError = (formErrors) => {
    Object.values(formErrors).forEach((err) => {
      toast.error(err.message);
    });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className={`auth-backdrop ${isHidden ? "is-hidden" : ""}`}>
        <div className="auth-modal">
          <h2 className="auth-modal__title">
            {type === "register" ? "Sign up" : "Login"}
          </h2>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <label className="auth-modal__label">
              Username
              <input
                type="text"
                placeholder="Username"
                className="auth-modal__input"
                {...register("username", { required: "Username is required" })}
              />
            </label>

            {type === "register" && (
              <label className="auth-modal__label">
                E-Mail
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="auth-modal__input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>
            )}

            <label className="auth-modal__label">
              Password
              <input
                type="password"
                placeholder="Password"
                className="auth-modal__input"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </label>

            <button type="submit" className="auth-modal__btn">
              {type === "register" ? "Sign up" : "Login"}
            </button>
          </form>

          <p className="auth-modal__text">
            {type === "register" ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
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
                  type="button"
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
    </>
  );
}