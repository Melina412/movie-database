const MovieCard = (props) => {
  return (
    <article>
      <div className="item">
        <p className="title">{props.movie.title}</p>
        <p className="year">{props.movie.year}</p>
        <p className="director">{props.movie.director}</p>
        <p className="duration">{props.movie.duration}</p>
        <p>{props.movie.rate}</p>
        <div className="genres">
          {props.movie.genre.map((genre, index) => (
            <p key={index}>{genre}</p>
          ))}
        </div>
        <div className="rating"></div>
      </div>
    </article>
  );
};

export default MovieCard;
