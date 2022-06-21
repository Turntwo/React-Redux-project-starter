import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./login";
import { handleInitialData } from "../actions/shared";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <header className="App-header">Employee Polls Project</header> */}
      <Login />
    </div>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
