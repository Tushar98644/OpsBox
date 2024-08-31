import { FolderIcon, HomeIcon } from "@heroicons/react/24/outline"
import { FaFileCode } from "react-icons/fa";

const links = [
  { title: "Home", icon: <HomeIcon className="size-5" /> },
  { title: "Projects", icon: <FolderIcon className="size-5" /> },
  { title: "Code", icon: <FaFileCode className="size-5" /> },
];

export const SidebarLinks = () => {
  return (
    <nav aria-label="Main" className="dark bg-indigo-600 flex flex-col h-screen ml-16 w-[20vw] py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto dark:text-black text-white">
      {
        links.map((link,index)=>(
          <div key={index} className="mx-4 text-base flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 cursor-pointer">
            {link.icon}
            <span className="ml-2 text-base"> {link.title} </span>
          </div>
        ))
      }
    </nav >
  );
}