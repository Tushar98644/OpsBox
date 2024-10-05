'use client'
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
    
    const { data : session } = useSession({
        required : true
    });

    return ( 
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {session?.user?.email}</p>
            <button onClick={()=>signOut(
                { callbackUrl : "/"}
            )}>
                sign out 
            </button>
        </div>
     );
}
 
export default Dashboard;