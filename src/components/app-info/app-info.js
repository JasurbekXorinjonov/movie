import "./app-info.css";

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">Sevimli filmlar: {favouriteMovieCount}</p>
    </div>
  );
};

export default AppInfo;
