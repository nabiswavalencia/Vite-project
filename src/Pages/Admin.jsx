import React, {  useState } from 'react';
import AdminNavbar from '../Component/AdminNavbar';
import Dashboard from '../Component/Dashboard';
import SidePanel from '../Component/SidePanel';
import AdminSidebar from '../Component/AdminSidebar';
import CreateBlog from './CreateBlog';
import ProfilePage from '../Component/ProfilePage.jsx'

 
function Admin() {

  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Default selected item

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className=' overflow-x-hidden'>
      <div className='relative'>
        <AdminNavbar/>
      </div>
      

    <div className='flex  mt-[80px] w-screen '>
      {/* menu section  */}

      <div className='w-1/6'>
        <AdminSidebar onItemClick={handleSidebarItemClick}/>
      </div>
       
        
      {/* blogdashboard */}
      <div className='showcase w-5/6'>
        <h5 className='mt-2 text-xl w-full  bold font-semibold text-gray-400 -mb-4  px-10'>{selectedItem}</h5>
        <div className="">
            <div className=" px-10 py-5 ">
              {/* Render content based on the selected item */}
              {selectedItem === 'Dashboard' && <Dashboard />}
              {selectedItem === 'Add Blog' && <CreateBlog />}
              {/* {selectedItem === 'Profile Settings' && <SidePanel />} */}
      
            </div>
        </div>

      </div>
    </div>
    <ProfilePage/>
    </div>
  )
}


export default Admin;