import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  age: number;
}

const RegistrationForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    username: "",
    email: "",
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #f0f8ff, #e6f7ff)"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
          Registration Form
        </h2>

        <label htmlFor="username" style={{ fontWeight: "bold" }}>
          Username:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <label htmlFor="email" style={{ fontWeight: "bold" }}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <label htmlFor="age" style={{ fontWeight: "bold" }}>
          Age:
        </label>
        <input
          id="age"
          type="number"
          name="age"
          placeholder="Enter age"
          value={form.age}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0056b3";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#007bff";
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
