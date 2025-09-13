import { useState } from "react";

export default function AuthModal() {
  const [type, setType] = useState("register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password || (type === "register" && !username)) {
      setError("Будь ласка, заповніть усі поля.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (type === "register") {
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        setError("Користувач з цим E-Mail вже існує.");
        return;
      }

      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setSuccess(" Реєстрація успішна! Тепер увійдіть.");
      setType("login");
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      const foundUser = users.find(user => user.email === email && user.password === password);

      if (foundUser) {
        setSuccess(` Вітаємо, ${foundUser.username}!`);
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
      } else {
        setError("Неправильний E-Mail або пароль.");
      }
    }
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <h2 className="auth-modal__title">
          {type === "register" ? "Sign up" : "Login"}
        </h2>

        {error && <div className="auth-message auth-message--error">{error}</div>}
        {success && <div className="auth-message auth-message--success">{success}</div>}

        <form onSubmit={handleAuth}>
          {type === "register" && (
            <label className="auth-modal__label">
              Username
              <input 
                type="text"
                placeholder="Username"
                className="auth-modal__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          )}
          <label className="auth-modal__label">
            E-Mail
            <input 
              type="email"
              placeholder="E-Mail"
              className="auth-modal__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="auth-modal__label">
            Password
            <input 
              type="password"
              placeholder="Password"
              className="auth-modal__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                className="auth-modal__btn-change"
                onClick={() => { setType("login"); setError(""); setSuccess(""); }}
              >
                Log in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button 
                className="auth-modal__btn-change"
                onClick={() => { setType("register"); setError(""); setSuccess(""); }}
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
