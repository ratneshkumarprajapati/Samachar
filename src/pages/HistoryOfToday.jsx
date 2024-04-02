import {  useLayoutEffect, useState } from 'react'
// import axios from 'axios';
import { apiConnector } from "../services/apiConnector";
const VITE_HISTORY_API = import.meta.env.VITE_HISTORY_API
console.log(VITE_HISTORY_API)

const HistoryOfToday = () => {
  const [newsData,setNewsData]=useState(null);
 
  console.log(newsData)
  const handleFecthData = async () => {
    try {
      
      const response = await apiConnector('GET', VITE_HISTORY_API, null, {
        'X-RapidAPI-Key': '93efe82631msh12fddb7c9403f67p135214jsn52b8a741e679',
        'X-RapidAPI-Host': 'current-affairs-of-india.p.rapidapi.com'
      })
    
      // console.log("data", data)
      const data=response.data
      setNewsData(data)

    } catch (error) {
      console.error(
        error
      )

    }


      // const options = {
      //   method: 'GET',
      //   url: 'https://current-affairs-of-india.p.rapidapi.com/history-of-today',
      //   headers: {
      //     'X-RapidAPI-Key': '93efe82631msh12fddb7c9403f67p135214jsn52b8a741e679',
      //     'X-RapidAPI-Host': 'current-affairs-of-india.p.rapidapi.com'
      //   }
      // };

      // try {
      //   const response = await axios.request(options);
      //   console.log(response);
      // } catch (error) {
      //   console.error(error);
      // }
     }



    useLayoutEffect(() => {

      handleFecthData()
    }



      , [])


    return (
      <div className='w-11/12 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  '>
      {
        newsData?newsData.map((data,index)=>(
          <div key={index} className=' text-2xl border shadow-richblack-300 shadow-inner opacity-90 bg-white rounded-md min-h-[10rem] p-2'>
            <div className=''>
                  <p className='text-2xl font-semibold'>Date</p>
              <p>
                {
                  data?.date
                }
              </p>
              <p className='text-2xl font-semibold'>Description</p>
              <p>{data?.description}
              </p>
            
            </div>
          </div>
        )):(
            <div className="loader absolute left-[50rem] top-[17rem] "></div>
        )
      }
      </div>
    )
  }

  export default HistoryOfToday
