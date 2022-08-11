
import './_search.scss'


const Search = ({searchMovie, setSearchKey}) => {
  
   
 
 
    return<>
     <form className="search" onSubmit={searchMovie}>
            <input type="text"   placeholder="I'm looking for..." onChange={(e)=>setSearchKey(e.target.value)}  />
                <button type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
               
    </form>
    </>
}

export default Search