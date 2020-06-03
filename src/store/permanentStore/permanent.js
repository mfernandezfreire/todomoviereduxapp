export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("movies");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};
export const saveState = (movies) => {
  try {
    let serializedData = JSON.stringify(movies);
    window.localStorage.setItem("movies", serializedData);
  } catch (error) {
    console.log(error);
  }
};
