import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json()
  })
  .then((data)=>{
    setData(data)
  })
// console.log(data)
function handleFilter(e){
  setData(e.target.value)
  console.log(e.target.value)
 }
//  let filterData = data.filter((item)=>{
//    return item++
//  })
  return (
    <div>
    {data.map((data) => (
      <div> <h4>{data.userId}</h4>
            <h4>{data.id}</h4>
            <h4>{data.title}</h4>
           </div>
           
    ))};
    <pre><button onClick={handleFilter}><h2>filter</h2></button> </pre> 
    </div>
  )
}

export default App
