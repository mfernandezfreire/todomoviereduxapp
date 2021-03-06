import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./permanentStore/permanent";
import movies from "./reducers/movies";
import watchedFilters from "./reducers/watchedFilters";

const reducers = combineReducers({
  movies,
  watchedFilters,
});

const initialData = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialData,
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(function () {
  saveState(store.getState());
});

export default store;
