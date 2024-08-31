import { SideNav } from "./side-nav";
import { SidebarLinks } from "./sidebar-links";

export const Sidebar = () => {
    return ( 
        <div className="grid grid-cols gap-12">
            <SideNav />
            <SidebarLinks />
        </div>
     );
}
 
export default Sidebar;