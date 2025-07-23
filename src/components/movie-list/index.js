// import React  from "react";
// import "./index.css";

// function MovieList() {

//   return (
//     <div className="layout-column align-items-center mt-50">
//       <section className="layout-row align-items-center justify-content-center">
//         <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input"/>
//         <button className="" data-testid="submit-button">Search</button>
//       </section>

//       <ul className="mt-50 styled" data-testid="movieList">
//         <li className="slide-up-fade-in py-10"></li>
//       </ul>

//       <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
//     </div>
//   );
// }

// export default MovieList

// The MovieList component contains the core functionality for fetching and displaying movies.
// function MovieList() {
//   // State to hold the year input by the user.
//   const [year, setYear] = useState("");
//   // State to store the list of movies fetched from the API.
//   const [movieData, setMovieData] = useState(null);

//   // API endpoint URL.
//   const API_URL = "https://jsonmock.hackerrank.com/api/movies";

//   /**
//    * Handles the search button click.
//    * Fetches data from the API based on the entered year.
//    */
//   const handleSearch = async () => {
//     // Prevent API call if the input is empty.
//     if (!year) {
//       return;
//     }

//     try {
//       // Construct the full URL with the year query parameter.
//       const response = await fetch(`${API_URL}?Year=${year}`);
//       const data = await response.json();
//       // The API returns an object with a 'data' property containing the movie array.
//       setMovieData(data.data);
//     } catch (error) {
//       console.error("Failed to fetch movies:", error);
//       // In case of an API error, reset the movie data.
//       setMovieData([]);
//     }
//   };

//   return (
//     <div className="layout-column align-items-center mt-50">
//       <section className="layout-row align-items-center justify-content-center">
//         {/* Input field for the year */}
//         <input
//           type="number"
//           className="large"
//           placeholder="Enter Year eg 2015"
//           data-testid="app-input"
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//         />
//         {/* Search button */}
//         <button className="" data-testid="submit-button" onClick={handleSearch}>
//           Search
//         </button>
//       </section>

//       {/* Render the movie list only if movieData is an array with items */}
//       {movieData && movieData.length > 0 && (
//         <ul className="mt-50 styled" data-testid="movieList">
//           {movieData.map((movie, index) => (
//             <li
//               className="slide-up-fade-in py-10"
//               key={`${movie.imdbID}-${index}`}>
//               {movie.Title}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Render the "No Results" message if movieData is an empty array */}
//       {movieData && movieData.length === 0 && (
//         <div className="mt-50 slide-up-fade-in" data-testid="no-result">
//           No Results Found
//         </div>
//       )}
//     </div>
//   );
// }


function MovieList() {
  // State to hold the year input by the user.
  const [year, setYear] = useState("");
  // State to store the list of movies fetched from the API.
  // Initialized to null to indicate that no search has been performed yet.
  const [movieData, setMovieData] = useState(null);

  // API endpoint URL.
  const API_URL = "https://jsonmock.hackerrank.com/api/movies";

  /**
   * Handles the search button click.
   * Fetches data from the API based on the entered year.
   */
  const handleSearch = async () => {
    // Prevent API call if the input is empty.
    if (!year) {
      return;
    }

    try {
      // Construct the full URL with the year query parameter.
      const response = await fetch(`${API_URL}?Year=${year}`);
      const data = await response.json();
      // The API returns an object with a 'data' property containing the movie array.
      setMovieData(data.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      // In case of an API error, reset the movie data to an empty array to show the "no results" message.
      setMovieData([]);
    }
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        {/* Input field for the year */}
        <input
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {/* Search button */}
        <button className="" data-testid="submit-button" onClick={handleSearch}>
          Search
        </button>
      </section>

      {/* The movie list container is always rendered. */}
      <ul className="mt-50 styled" data-testid="movieList">
        {/* The list items are rendered only when there is movie data with at least one movie. */}
        {movieData &&
          movieData.length > 0 &&
          movieData.map((movie) => (
            <li className="slide-up-fade-in py-10" key={movie.imdbID}>
              {movie.Title}
            </li>
          ))}
      </ul>

      {/* Render the "No Results" message if the search was performed and returned an empty array. */}
      {movieData && movieData.length === 0 && (
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">
          No Results Found
        </div>
      )}
    </div>
  );
}

// export default App;

export default MovieList;
