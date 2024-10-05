'use client'
import Link from "next/link";
// import { redirect } from "next/navigation";

const Hoempage = () => {
  // const { data : session } = useSession({
  //   required: false,
  //   // onUnauthenticated() {
  //   //   redirect("/auth/sign-in?callbackUrl=/");
  //   // }
  // });

  return ( 
    <div>
      <h1>Home Page</h1>
      <Link href="/auth/sign-in">
        <h1>Sign In</h1>
      </Link>
    </div>
   );
}
 
export default Hoempage;