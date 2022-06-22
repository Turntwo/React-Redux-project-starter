import { combineReducers } from "redux";
import { users } from "./userReducer";
import { questions } from "./questionReducer";
import { loggedInUser } from "./loggedInUserReducer";
import { loading } from "./loadingReducer";

export default combineReducers({ loggedInUser, questions, users, loading });
