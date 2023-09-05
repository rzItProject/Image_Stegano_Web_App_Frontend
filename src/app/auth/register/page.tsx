"use client";
import { useState } from "react";
import validator from "validator";

function RegisterPage() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <>
      <div>Register form !</div>
      <form>
        <input
          type="email"
          placeholder="Enter votre adresse mail"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </>
  );
}

export default RegisterPage;
