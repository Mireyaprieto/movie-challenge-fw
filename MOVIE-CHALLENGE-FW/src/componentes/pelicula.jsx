function Navegacion() {
  return (
    <>
      <div className="navegacion">
        <nav>
          <img
            src="imagenes/agregar un titulo.png"
            alt="logo"
            className="logo"
          ></img>

          <ul>
            
            <li>
              <a href="#">GENERO</a>
             
            </li>

            <li>
              <a href="#"> AÑO</a>
              
            </li>
          </ul>
         
        </nav>
        <form>
        <div className='btn-buscar'>
          <input type='text' placeholder='Nombre de la Pelicula' className='inputText'>
           
          </input>
         
          <button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg></button>
        </div>
       </form>
      </div>
    </>
  );
}

export default Navegacion;
/*<img src='imagenes/btn-buscar.png'></img>
<ul>
                <li>
                  <a href="#">2023</a>
                </li>
                <li>
                  <a href="#">2022</a>
                </li>
                <li>
                  <a href="#">2021</a>
                </li>
                <li>
                  <a href="#">2020</a>
                </li>
                <li>
                  <a href="#">2019</a>
                </li>
                <li>
                  <a href="#">2018</a>
                </li>
  </ul>
               <ul>
                <li>
                  <a href="#">ACCION</a>
                </li>
                <li>
                  <a href="#">DRAMA</a>
                </li>
                <li>
                  <a href="#">FICCION</a>
                </li>
              </ul>
                /*onChange={(e)=>{ setSearch(e.target.value)}} value={search} */