'use client'
import { signIn } from "next-auth/react";

const SignIn = () => {
    return ( 
        <div>
            <button onClick={()=>signIn("google",{ callbackUrl :"/dashboard"})}>
                Sign In with Google
            </button>
        </div>
     );
}
 
export default SignIn;