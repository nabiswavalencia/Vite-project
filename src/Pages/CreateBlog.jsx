import React, { useState, useEffect } from 'react';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    body: '',
    image_id: '',
    category: 'News', // Default category
  });

  const [filePreview, setFilePreview] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status when the component mounts
    checkUserAuthentication();
  }, []);

  const checkUserAuthentication = async () => {
    // Check if the user is authenticated based on your login API
    try {
      const response = await fetch('https://mmust-jowa.onrender.com/api/auth/check', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('An error occurred while checking authentication:', error);
      setIsAuthenticated(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if the user is authenticated before submitting the blog
    if (!isAuthenticated) {
      console.error('User not authenticated. Unable to create a blog.');
      return;
    }
  
    try {
      const response = await fetch('https://mmust-jowa.onrender.com/createblog', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: formDataToFormData(formData), // You need to convert your JSON data to FormData
      });
  
      if (response.ok) {
        console.log('Blog post created successfully');
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  // Function to convert JSON data to FormData
  const formDataToFormData = (data) => {
    const formData = new FormData();
  
    for (const key in data) {
      if (data[key] instanceof File) {
        formData.append(key, data[key], data[key].name);
      } else {
        formData.append(key, data[key]);
      }
    }
  
    return formData;
  };
  
  
  

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
  
    // For file input
    if (type === 'file' && files && files.length > 0) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        setFilePreview(e.target.result);
      };
  
      reader.readAsDataURL(files[0]);
  
      // Do not set the file directly to state, it will be handled by FormData
  
      setFormData({
        ...formData,
        [name]: files[0], // This line is not needed
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  

  if (!isAuthenticated) {
    return <p>You are not logged in. Please log in to create a blog.</p>;
  }
  

  return (
    <>
    <div className='grid grid-cols-3 gap-9'>
      {/* create new blog */}
      <form className='mt-2 col-span-2' onSubmit={handleSubmit} encType="multipart/form-data" method="post">
    {/* ... your existing form fields ... */}

    <div className='max-w-xl bg-slate-100 px-4 py-10 mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12 '>
      {/* posttitle  */}
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label  className="block  text-lg bold font-semibold text-gray-400">
            HEADLINE
          </label>
          <div className="mt-1">
            <div className="flex shadow-sm  sm:max-w-md">
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                value={formData.title}
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Enter Title"
              />
            </div>
          </div>
        </div>
      </div>
        <div className="sm:col-span-4">
          <label  className="block mt-2 mb-2 text-lg bold font-semibold text-gray-400">
           DESCRIPTION
          </label>
          <div className="mt-1">
            <div className="flex shadow-sm  sm:max-w-md">
              <input
                type="text"
                name="slug"
                id="slug"
                onChange={handleChange}
                value={formData.slug}
                className="block flex-1 border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                placeholder="Enter subTitle"
              />
            </div>
          </div>
        </div>
      
      {/* post type  */}

      {/* description */}
      <div className="">
      <label  className="block mt-2 mb-2 text-lg bold font-semibold text-gray-400">
           TEXT
          </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="body"
            rows={3}
            onChange={handleChange}
            value={formData.body}
            className="resize-none block w-full h-fixed rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Post category */}
      <div className="sm:col-span-3">
        <label htmlFor="category" className="block mb-2 mt-5 text-base text-gray-400">
          Post Category
        </label>
        <div className="mt-2">
          <select
            id="category"
            name="category"
            autoComplete="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>News</option>
            <option>Sports</option>
            <option>Business</option>
            <option>Entertainment</option>
          </select>
        </div>
      </div>

      {/* file uploads */}
      <div className="col-span-full">
        <label  className="block mb-2 mt-5 text-base text-gray-400">
          Image
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            {filePreview && (
              <img
                src={filePreview}
                alt="File Preview"
                className="mb-4 max-w-full max-h-96"
              />
            )}
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  onChange={handleChange}
                  name="image_id"
                  type="file"
                  // value={formData.image_id}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

     
      </div>
  </form>
  <div className='w-3/4'>
      <div className='flex flex-col mb-7 py-10'>
      <button className=" mb-3 bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
>SAVE</button>
<button className=" bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>CANCEL</button>      </div>


      <div className='flex flex-col'>
      <button className="mb-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>PUBLISH</button>
<button className=" bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>PREVIEW</button>      </div>
     </div>

  </div>
    </>
  );
};

export default CreateBlog;
