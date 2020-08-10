export const heroReducerInitialState = {
  heroes: [],
  profile: {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
  unusedPoints: 0,
  selectedHeroId: "",
};

export const heroes = [
  {
    id: "1",
    name: "Daredevil",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg",
  },
  {
    id: "2",
    name: "Thor",
    image:
      "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
  },
  {
    id: "3",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
    name: "Iron Man",
  },
  {
    id: "4",
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
    name: "Hulk",
  },
];

export const profile = {
  str: 5,
  int: 8,
  agi: 3,
  luk: 1,
};
