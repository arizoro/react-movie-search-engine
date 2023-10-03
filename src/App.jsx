import { useEffect,useState } from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Search from './component/Search'

import { movieList, searchMovie } from './api/api'


function App() {
  const [datas, setDatas] = useState([])

  useEffect( () => {
    movieList()
    .then((result) => { setDatas(result) })
    .catch((err) => { console.log(err) })
  },[])

  const movieSearch = async(q) =>{
    if(q.length > 3 ){
      const query = await searchMovie(q)
      setDatas(query.results)
      console.log(query)
    }
  }


  return (
    <>
    <Navbar/>
    <h1 className='text-center mt-3' >Ariemovie Search</h1>
    <Search movieSearch={movieSearch}/>
    <div className='row mt-3'>
    {datas.map((data,i)=> (
      <div key={i} className='col-4' >
        <Card data={data}/>
      </div>
    ))}
    </div>
    </>
  )
}

export default App
