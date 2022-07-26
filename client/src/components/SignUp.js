import React, { useState } from "react";

function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image_url, setImage_url]=useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <div className="signPage">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Profile Picture</label>
        <input
          type="link"
          id="profile"
          autoComplete="off"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;