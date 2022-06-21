import { combineReducers } from "redux";
import { users } from "./userReducer";
import { loggedInUser } from "./loggedInUserReducer";
import { loading } from "./loadingReducer";

export default combineReducers({ loggedInUser, users, loading });
