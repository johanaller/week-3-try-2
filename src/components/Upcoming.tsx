import React, { useEffect, useState } from "react";
import styled from "styled-components";

import movieApiClient from "../utils/movieApiClient";
import StatelessPresentation from "./StatelessPresentation";

export default function Upcoming() {
  const [movieListUpcoming, setMovieListUpcoming] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListUpcoming().then(data => {
      if ("message" in data) {
        setFetchError({ message: data.message, isError: true });
      } else {
        setMovieListUpcoming(data.results);
      }
    });
  }, []);

  return (
    <div>
      <StatelessPresentation
        heading={"Upcoming"} 
        movieList={movieListUpcoming}
        error={error}/>
    </div>
  );
}

