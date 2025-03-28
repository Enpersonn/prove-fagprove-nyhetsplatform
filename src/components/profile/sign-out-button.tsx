"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";

const SignOutButton = () => {
  const handleLogout = async () => {
    await axios.post("/api/users/logout");
    window.location.href = "/";
  };
  return (
    <Button onClick={handleLogout} variant={"outline"}>
      Logg ut
    </Button>
  );
};

export default SignOutButton;
