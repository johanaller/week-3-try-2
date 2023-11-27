import React from 'react'
import SimpleMovieCard from "./SimpleMovieCard";
import styled from "styled-components";

interface StatelessPresentationProps {
  movieList?: Movie[] | null; // Make the prop optional
  error?: ApiError | null; // Make the prop optional
  heading?: string; // Add a heading prop if needed
}


const StatelessPresentation = ({
  movieList,
  error,
  heading
}: StatelessPresentationProps) => {
  return (
    <div>
      Hello from StatelessPresentation
      <SectionHeading>
        <h2>{heading}</h2>
      </SectionHeading>
      <TrendingContainer>
        {!error &&
          movieList?.map(mov => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </TrendingContainer>
      {error && <p>{error?.message}</p>}
    </div>
  );
};

export default StatelessPresentation

const SectionHeading = styled.h1`
  width: 100%;
  text-align: left;
  padding-left: 10px;
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;