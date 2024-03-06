import React from "react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./Mutation";

export const Auth = () => {
  
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  //using on Click function to call useMutation which creates a guest session for the user
  const handleLogin = async () => {
     await mutate() 
  };

  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen">
        <button
          onClick={handleLogin}
          className="text-4xl border hover:bg-slate-300 border-black rounded-md p-2 text-black"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};
