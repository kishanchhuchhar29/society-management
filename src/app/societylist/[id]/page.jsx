"use client";
import React from "react";
import Login from "../../../Component/Login/Login";
export default function page({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Society List:{id}</h1>
    </div>
  );
}
