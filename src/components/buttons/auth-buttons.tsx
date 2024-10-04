"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Icons } from "./icons";

export const GithubSignInButton = () => {
  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        signIn(
          "github", 
        { callbackUrl: "/dashboard" }
        )
      }
    >
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Continue with Github
    </Button>
  );
}

export const GoogleSignInButton = () => {
  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        signIn("google",
        { callbackUrl: "/dashboard" }
        )
      }
    >
      <Icons.google className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  );
}