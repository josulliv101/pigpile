export default function loadMovieDetails(req, [id]) {

  const obj = id === '0001'
    ? {
      id: "0001",
      title: "Pulp Fiction",
      releaseYear: 1992,
      star: "John Travolta",
      director: "Quentin Tarantino",
      description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, \"Pumpkin\" (Tim Roth) and \"Honey Bunny\" (Amanda Plummer)."
    }
    : {
      id: "0002",
      title: "Forrest Gump",
      releaseYear: 1994,
      star: "Tom Hanks",
      director: "Robert Zemeckis",
      description: "The story depicts several decades in the life of Forrest Gump, a slow-witted but kind-hearted, good-natured and athletically prodigious man from Alabama, who witnesses, and in some cases influences, some of the defining events of the latter half of the 20th century in the United States; more specifically, the period between Forrest\'s birth in 1944 and 1982. The film differs substantially from Winston Groom\'s novel, including Gump\'s personality and several events that were depicted."
    };

  return new Promise(resolve => setTimeout(() => resolve(obj), 4000))

}