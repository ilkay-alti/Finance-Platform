"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const WelcomeMwssage = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="text-white">
      <h2 className="font-extrabold text-3xl mb-4">
        {isLoaded ? `Welcome, ${user?.fullName}` : "Welcome, Back"}
      </h2>
      <p className="font-medium text-small     ">
        This is your Financial Overview Report
      </p>
    </div>
  );
};

export default WelcomeMwssage;
