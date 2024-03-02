import React from 'react'

const AdminSidebar = ({ onItemClick }) => {
  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  return (
    <>

    <div className='bg-blue-300  w-full h-full'>
        <ul className='flex flex-col justify-center -ml-5 items-start text-lg px-20 mt-3 text-left '>
           
          <li className='py-1 flex items-center gap-3 cursor-pointer' onClick={() => handleItemClick('Dashboard')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5h-6.5ZM4 12V4h6.5v8H4Zm9.5 8v-8H20v8h-6.5ZM4 20v-5h6.5v5H4Zm1-9h4.5V5H5v6Zm9.5 8H19v-6h-4.5v6Zm0-11H19V5h-4.5v3ZM5 19h4.5v-3H5v3Zm4.5-8Zm5-3Zm0 5Zm-5 3Z"/></svg>
            Dashboard</li>
          <li className='py-1 flex items-center gap-3 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3.497 15.602a.7.7 0 1 1 0 1.398H.7a.7.7 0 1 1 0-1.398h2.797Zm15.803 0a.7.7 0 1 1 0 1.398H5.529a.7.7 0 1 1 0-1.398H19.3ZM3.497 9.334a.7.7 0 1 1 0 1.399H.7a.7.7 0 1 1 0-1.399h2.797Zm15.803 0a.7.7 0 1 1 0 1.399H5.528a.7.7 0 1 1 0-1.399H19.3ZM3.497 3a.7.7 0 1 1 0 1.398H.7A.7.7 0 1 1 .7 3h2.797ZM19.3 3a.7.7 0 1 1 0 1.398H5.528a.7.7 0 1 1 0-1.398H19.3Z"/></svg>
            Categories</li>
          <li className='py-1 flex items-center gap-3 cursor-pointer' onClick={() => handleItemClick('Add Blog')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10.5v-1h7v1H8Zm0 3v-1h7v1H8Zm0 3v-1h7v1H8ZM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2h-1Zm-14 12V4h10.923v1H4.5v14h14V9.077h1V20h-16Z"/></svg>
            Add Blog</li>
          <li className='py-1 flex items-center gap-3 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M107.19 159a56 56 0 1 0-46.38 0a91.83 91.83 0 0 0-53.93 38.81a4 4 0 1 0 6.7 4.37a84 84 0 0 1 140.84 0a4 4 0 1 0 6.7-4.37A91.83 91.83 0 0 0 107.19 159ZM36 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48Zm212 95.35a4 4 0 0 1-5.53-1.17A83.81 83.81 0 0 0 172 164a4 4 0 0 1 0-8a48 48 0 1 0-17.82-92.58a4 4 0 1 1-3-7.43a56 56 0 0 1 44 103a91.83 91.83 0 0 1 53.93 38.86a4 4 0 0 1-1.11 5.5Z"/></svg>
            Profile</li>
          <li className='py-1 flex items-center gap-3 cursor-pointer'  onClick={() => handleItemClick('Profile Settings')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93l1.45-2.5M13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46h4m-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/></svg>
            Settings</li>
          

        </ul>
      </div>
    </>
  )
}

export default AdminSidebar