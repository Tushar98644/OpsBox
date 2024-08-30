import React, {ReactNode} from 'react';

export const Sidebar = ({children}: { children: ReactNode }) => {
  return (
    <aside className='h-[250px] w-[100vh] pt-[3px] border-[#242424]'>
      {children}
    </aside>
  )
}

export default Sidebar