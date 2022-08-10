
import './_search.scss'


const Search = () => {
   
 
    return<>
     <div className="search">
            <input type="search" className="form-control py-1 px-2  rounded"  placeholder="I'm looking for..." aria-label="Search"
                aria-describedby="search-addon"  />
                <button>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
   
    </div>
    </>
}

export default Search