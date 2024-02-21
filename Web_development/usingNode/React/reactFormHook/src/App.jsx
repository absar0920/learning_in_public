import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (data.email) {
      data = JSON.stringify(data);
    } else {
      data = JSON.stringify({
        username: data.username,
        message: data.message,
      });
    }

    try {
      let r = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      r = await r.json();
      console.log(r);
      if (r.status_code == 200) {
        alert(r.message);
      }
    } catch {
      alert("An error occured");
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username", {
            required: "Username is Required",
            minLength: {
              value: 3,
              message: "The username must be more than 3 characters",
            },
            maxLength: {
              value: 10,
              message: "The username must be not more than 8 characters",
            },
          })}
          className="input-field"
        />
        {errors.username && (
          <p className="error">{errors.username.message} IT</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input-field"
          {...register("email", {
            required: false,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email is Invalid",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message", {
            required: {
              value: true,
              message: "Message is required",
            },
            minLength: {
              value: 10,
              message: "The message can't be less than 10 characters",
            },
          })}
          cols="30"
          rows="10"
          className="input-field"
        ></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}
        <input
          type="submit"
          value="Click Me"
          className="submit-button"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}
export default App
