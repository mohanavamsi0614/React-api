import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Book from './book'

function App() {
  const [data, setdata] = useState([])
  const [load,setload]=useState(true)
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'Vamsi' }})
    .then((da)=>{
      return da.data.books
    }).then((da)=>{
      setdata(da)
      setload(false)
    })
    return ()=>{return 0}
  },[data])
  return (
    <>
        <h1>The BOOKS</h1>

    {load? (<h1>Loading...</h1>): data.map((i,ind)=>{
      return(
        <>
        <div key={ind}>
        <Book  auth={i.authors[0]} title={i.title} des={i.description} img={i.imageLinks.smallThumbnail}/>
        <a href={i.infoLink}><button>Read</button></a>
        <hr></hr>
      </div>
      </>
      )

    })}

      </>
  )
}

export default App
