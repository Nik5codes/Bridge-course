import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/form", {
        name,
        email,
        message,
      });
      setMsg(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
      setMsg("Error submitting form");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />

        <label>Message:</label>
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br /> <br />

        <button type="submit">Submit</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}

export default ContactForm;