import React, {useContext, useEffect} from 'react'
import {Context} from "../context/contextApi"
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'

const Feed = () => {
  const{loading, searchResult} = useContext(Context)

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h")
  }, [])

  return (
  <div className='flex flex-row h-[clac(100%-56px)] pt-14'>
    <LeftNav/>
    <div className="grow ml-[250px] w-[calc(100%-250px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && searchResult &&
          Array.isArray(searchResult)&&
          searchResult?.map((item, index)=>{
            if(item?.type !== "video") return false;
            return(
              <VideoCard
              key={`${item?.video?.videoId}-${index}`} 
              video={item?.video}
              />
            )
          })}
      </div>
    </div>
  </div>
  )
}

export default Feed
