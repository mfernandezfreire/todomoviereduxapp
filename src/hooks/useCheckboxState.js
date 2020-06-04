import { useState } from "react";

export default (initialValue) => {
  const [watched, setCompleted] = useState(initialValue);
  const updateWatched = (value) => {
    switch (value) {
      case "all":
        return setCompleted({ all: true, watched: false, not_watched: false });
      case "watched":
        return setCompleted({ all: false, watched: true, not_watched: false });
      case "not_watched":
        return setCompleted({ all: false, watched: false, not_watched: true });
      default:
        return setCompleted({ all: true, watched: false, not_watched: false });
    }
  };
  return [watched, updateWatched];
};
