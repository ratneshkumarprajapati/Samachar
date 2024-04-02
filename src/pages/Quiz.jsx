import {  useEffect, useState } from 'react'
// import axios from 'axios';
import { apiConnector } from "../services/apiConnector";
const VITE_QUIZ_API = import.meta.env.VITE_QUIZ_API
console.log(VITE_QUIZ_API)

const Quiz = () => {
  const [newsData,setNewsData]=useState(null);
  // const [loading,setLoading] =useState(false)
  console.log(newsData)
  const handleFecthData = async () => {
    try {
   
      const response = await apiConnector('GET', VITE_QUIZ_API, null, {
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



    useEffect(() => {

      handleFecthData()
    }



      , [])


    return (
      <div className='w-11/12 relative mt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  '>
      {
        newsData?newsData.map((data,index)=>(
          <div key={index} className=' text-xl border shadow-richblack-300 shadow-inner opacity-90 bg-white rounded-md min-h-[20rem] p-2'>
            <div>
              {/* <p className='text-2xl font-semibold'>Date</p>
              <p>
                {
                  data?.date
                }
              </p>
              <p className='text-2xl font-semibold'>Description</p>
              <p>{data?.description}
              </p> */}
              {
                data
              }
            </div>
          </div>
        )):<div className="loader absolute left-[50rem] top-[17rem] "></div>
      }
      </div>
    )
  }

  export default Quiz
