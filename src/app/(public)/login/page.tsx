"use client";

import { Login } from "@/stories/Login";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  console.log("here");
  
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const fields = {
    username: register("username", { required: "Username is required" }),
    password: register("password", { required: "Password is required" }),
  };

  return (
    <div>
      <Login />
    </div>
  );
}
