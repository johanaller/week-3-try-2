import React, { useEffect, useState } from "react";
import movieApiClient from "../utils/movieApiClient";
import StatelessPresentation from "./StatelessPresentation";


export default function TrendingNow() {
  const [movieListTrending, setMovieListTrending] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListNowPlaying().then((data) => {
      if ("message" in data) {
        setFetchError({ message: data.message, isError: true });
      } else {
        setMovieListTrending(data.results);
      }
    });
  }, []);

  return (
    <div>
      <StatelessPresentation
        movieList={movieListTrending}
        error={error}
        heading={"Trending"}
      />
    </div>
  );
}

