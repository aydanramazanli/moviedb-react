import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './_wishList.scss'

export default function WishList() {
  const { wishList, removeMovielist } = useContext(GlobalContext)
  return (
    <div className="wishList">
      {wishList.length > 0 ? (
        wishList.map((item) => {
          return (
            <div className="details">
              <div className="detail-img">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.poster_path
                  }`}
                  alt="background"
                />
              </div>
              <div className="footer">
                <h2>{item.title}</h2>
                <button onClick={()=>{removeMovielist(item.id)}}>Delete</button>
              </div>
            </div>
          )
        })
      ) : (
        <h1>No Movies Yet</h1>
      )}
    </div>
  )
}
