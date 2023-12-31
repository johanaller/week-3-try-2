### Step by Step Solution: Task 1

1. Get an API key from the movies api, [instructions here](https://developers.themoviedb.org/3)
2. Add the key to the [.env](.env) file
3. Run the App with `npm start`
4. Use the `Bare Bone Method` to break down the UI
   1. Break down the UI Visually
   2. Inspect the Component Tree with React Dev tools
   3. Sketch the State Distribution
5. Copy the `TrendingNow.ts`
   1. Change the file name
   2. Add it to the DOM
   3. Update the heading
   4. Optional: extract shared styled component into the styled file to eliminate repeated code
6. Add an api call for upcoming movies
   1. Add a new method to the api client that can fetch the upcoming movies
   2. Copy and refactor the `getMovieListNowPlaying` method - check the API docs
   3. Clean your code, and you are done
7. Write unit tests for your component, you can check the ones in [src/components/TrendingNow.spec.tsx](src/components/TrendingNow.spec.tsx)

### :file_folder: Separation of concerns

1. Create a movie card display component with the same jsx
2. Pass all the dynamic parts as props: movieList, error, heading
3. Replace it in the `Upcoming` and `Trending` now components
