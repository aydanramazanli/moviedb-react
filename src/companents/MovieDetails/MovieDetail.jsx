import React from 'react'
import './_movieDetail.scss'

export default function MovieDetail() {
  return (
    <div className="movieDetail">
      <div className="details">
        <div className="detail-img">
          <img src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/covers/cover5.jpg" alt="" />
        </div>
        <div className="detail-info">
          <h1>movie name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, nobis? Nam, autem dolorum. Magni consequatur labore rem
            odit, nisi debitis!
          </p>
          <span><i class="fa-solid fa-star"></i> stars</span>
        </div>
      </div>
    </div>
  )
}
