export default function loadMovies() {
  const movies = [
  	{
  	  id: "0001",
  	  title: 'Pulp Fiction',
  	  releaseYear: 1992
  	},
  	{
  	  id: "0002",
  	  title: 'Forrest Gump',
  	  releaseYear: 1994
  	}
	];

  return new Promise(resolve => setTimeout(() => resolve(movies), 4000))
}