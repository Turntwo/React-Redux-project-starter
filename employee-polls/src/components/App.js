import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import { handleInitialData } from "../actions/shared";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <header className="App-header">Employee Polls Project</header> */}
      <Login />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/question/:questionId" element={<Question />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/new" element={<NewQuestion />} />
      </Routes>
    </div>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
