

function Card({data}){
  
  return (
    <>
      <div className="card m-3 " style={{ cursor: "pointer" }} >
      <div className="card-body">
        <img src={`${import.meta.env.VITE_APP_BASE_IMG_URL}${data.poster_path}`} alt="" className="card-img-top" />
        <h5 className="card-title ">{data.title}</h5>
        <p className="card-text mt-2">Release : {data.release_date}
        <br />
        <span >Rating : {data.vote_average}</span></p>
        
              </div>
      </div>
    </>
  )
}
    
export default Card