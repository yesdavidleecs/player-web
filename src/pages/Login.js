import { useState } from "react";
import { logIn } from "../handles/handleauth";
import Navbar from '../Navbar';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await logIn(email, password);
    if (res.error) seterror(res.error);
  };
  return (
    <>
      <Navbar />
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Login;