import { combineReducers } from "redux";
import heroReducer from "./heroes/reducer";

const rootReducer = combineReducers({
  heroes: heroReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
