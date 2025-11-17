import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

    setUserData(response.data)
  }
 
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading....</h3>;

  if(userData.length > 0){
    printUserData = userData.map((elem,idx) => {
      return <div key={idx}>
        <a href={elem.url} target="_blank">
          <div className="h-40 w-44 overflow-hidden rounded-xl">
            <img className="h-full w-full object-cover cursor-pointer" src={elem.download_url} alt="" />
          </div>
          <h2 className="text-center">{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <div className="flex h-[82%] flex-wrap gap-4 ">
        {printUserData}
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <button style={{opacity : index==1 ? 0.6 : 1}} className="py-4 px-8 text-black font-semibold text-lg bg-amber-400 active:scale-95 cursor-pointer rounded "
        onClick={() => {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >Prev</button>
        <h3 className="text-gray-400 font-semibold ">Page {index}</h3>
        <button className="py-4 px-8 text-black font-semibold text-lg bg-amber-400 active:scale-95 cursor-pointer rounded "
        onClick={() => {
          setIndex(index+1)
          setUserData([])
        }}
        >Next</button>
      </div>
      
    </div>
  )
}

export default App