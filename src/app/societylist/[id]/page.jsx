"use client";
import React from "react";
import AdminPage from "../../../Component/Super-admin/AllAdmin/Admin";
export default function page({ params }) {
  const { id } = params;
  return (
   <AdminPage/>
  );
}
