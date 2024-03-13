import Results from "@/(Components)/Results";

export default async function SearchPage({ params }) {
  const api_key = process.env.API_KEY;
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results.length === 0 ? (
        <h1 className="text-center pt-6">No results found 😞 </h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
