import axios from "axios";
import { useState } from "react";

const App = () => {

  // api calling by using normal function and fetch
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   console.log(response);
    
  // }

  // api calling by using arrow function and fetch
  // const getData = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   console.log(response);
  // }

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    
    setData(response.data)
    
    
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem,idx) => {
          return <h1 key={idx}>I'm {elem.author} and download url is {elem.download_url}</h1>
        })}
      </div>
    </div>
  )
}

export default App