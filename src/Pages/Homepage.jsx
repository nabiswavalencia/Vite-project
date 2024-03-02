import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainNews from '../Component/MainNews'
import NewsCard from '../Component/NewsCard'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

function Homepage() {
  const [newsData, setNewsData] = useState([]);
  const [latestData, setLatestData] = useState([]);
  const [businessData, setBusinessData] = useState([]);
  const [moreBusinessData, setMoreBusinessData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  

  useEffect(() => {
    // latest news data from api
    fetch('https://mmust-jowa.onrender.com/news')
      .then((response) => response.json())
      .then((data) => setLatestData(data.slice(0, 1)))
      .catch((error) => console.error('Error fetching news data:', error));
    // latest sports data from api
    fetch('https://mmust-jowa.onrender.com/sports')
      .then((response) => response.json())
      .then((data) => setSportsData(data.slice(0, 3)))
      .catch((error) => console.error('Error fetching news data:', error));
    // latest entertainment data from api
    fetch('https://mmust-jowa.onrender.com/entertainment')
      .then((response) => response.json())
      .then((data) => setEntertainmentData(data.slice(0, 3)))
      .catch((error) => console.error('Error fetching news data:', error));
    // Fetch news data from the API
    fetch('https://mmust-jowa.onrender.com/news')
      .then((response) => response.json())
      .then((data) => setNewsData(data.slice(1, 3)))
      .catch((error) => console.error('Error fetching news data:', error));

    // Fetch business data from the API
    fetch('https://mmust-jowa.onrender.com/business')
      .then((response) => response.json())
      .then((data) => setBusinessData(data.slice(0, 1)))
      .catch((error) => console.error('Error fetching business data:', error));
    fetch('https://mmust-jowa.onrender.com/business')
      .then((response) => response.json())
      .then((data) => setMoreBusinessData(data.slice(0, 3)))
      .catch((error) => console.error('Error fetching business data:', error));
  }, []);
  return (
    
    <div className=' overflow-x-hidden'>
      <div className='relative mb-24'>
      <Navbar/>
      </div >

      <h1 className='w-screen mt-20 flex text-2xl font-bold  justify-center -mb-8'>LATEST NEWS</h1>

      {latestData.map((item, index) => (
          <MainNews
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      <div className='w-9/12 mx-auto mt-10 grid grid-cols-3 gap-2 max-[475px]:grid-cols-1 max-[475px]:w-11/12 '>
    
      
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      
         

     
      {businessData.map((item, index) => (
          <NewsCard
          key={index}
          title={item.title}
          slug={item.slug}
          published_on={item.published_on}
          image={item.image_id}
          />
        ))}

      
        
   </div>
   <div className='w-9/12 mx-auto mt-10   '>
    
    <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>NEWS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/News">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>SPORTS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Sports">VIEW MORE</Link></p>
      
    </div>

    <div className='w-full flex'>
      {sportsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>BUSINESS</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Business">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {moreBusinessData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      </div>

      <div className='w-full flex justify-between mt-10  '>
      <h1 className='font-bold  text-lg mb-1'>ENTERTAINMENT</h1>
      <p className=' cursor-pointer hover:text-orange-500 ease-in-out hover:underline duration-150'><Link to="/Entertainment">VIEW MORE</Link></p>
      
    </div>
    <div className='w-full flex'>
      {entertainmentData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            slug={item.slug}
            published_on={item.published_on}
            image={item.image_id}
          />
        ))}
      </div>
    
   </div>
 
    </div> 

    
  )
}

export default Homepage;