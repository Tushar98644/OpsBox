import { Sidebar } from "@/components/dashboard/sidebar/index";

const Dashboard = () => {
    return ( 
        <div className="flex">
            <div className="collapsable-sidebar">
                <Sidebar />
            </div>
            <div className="section">
                section
            </div>
        </div>
     );
}
 
export default Dashboard;