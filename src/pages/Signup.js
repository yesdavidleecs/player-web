import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../handles/handleauth";
import Navbar from '../Navbar';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      seterror("Passwords do not match");
    } else {
      setEmail("");
      setPassword("");
      const res = await signUp(email, password);
      if (res.error) seterror(res.error)
    }
  };

  return (
    <>
      <Navbar />
      <h2>Sign Up</h2>
      <div>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
