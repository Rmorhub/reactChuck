export const fetchJokebyCategory = category =>
  fetch(`http://api.icndb.com/jokes/random?limitTo=[${category}]`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });

export const fetchJokeBySearchText = () =>
  fetch(`http://api.icndb.com/jokes`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });

export const maxValueForSlice = arr => Math.floor(Math.random() * (arr.length - 5 + 1)) + 5;
