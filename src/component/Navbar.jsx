
function Navbar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
          <div className="container-fluid">
            <a className="navbar-brand ms-4  " href="#">Arimovie</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">Home</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}

export default Navbar