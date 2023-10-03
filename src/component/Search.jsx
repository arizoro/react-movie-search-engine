

function Search({movieSearch}){

  const valueMovie = (e) => {
    movieSearch(e.target.value)
  }


    return(
        <>
        <div className="row mt-4 justify-content-center">
          <div className="col-6">
          <div className="input-group mb-3 ">
          <input type="text" className="form-control p-2" autoFocus onChange={valueMovie}  />
        </div>
          </div>
        </div>
        
        </>
    )
}

export default Search