import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import CheckLogin from "./CheckLogin";
import Dashboard from "./Dashboard";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <h1>Employee Polls Project</h1>
      <header>
        <Login />
        <Nav />
        <hr />
      </header>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <CheckLogin>
              <Dashboard />
            </CheckLogin>
          }
        />
        <Route
          path="/question/:questionId"
          element={
            <CheckLogin>
              <Question />
            </CheckLogin>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <CheckLogin>
              <Leaderboard />
            </CheckLogin>
          }
        />
        <Route
          path="/add"
          element={
            <CheckLogin>
              <NewQuestion />
            </CheckLogin>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
