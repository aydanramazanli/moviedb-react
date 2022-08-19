import './_movieList.scss';
import SingleMovie from '../SingleMovie/SingleMovie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MovieList ({ movieData, title, movies }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="movies">
      <h1>{title}</h1>
      <div className="list">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >

          {movies &&
            movies.results.map((movie) => {
              return <SingleMovie key={movie.id} movie={movie} />;
            })}
        </Carousel>
      </div>
    </div>
  );
}
