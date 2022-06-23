import "./Login.css";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../actions/loggedInUser.js";

const Login = ({ users, loggedInUser, dispatch }) => {
  const handleLogin = (e) => {
    console.log(`Logging In: ${e.target.value}`);
    dispatch(loginUser(e.target.value));
  };

  const handleLogOut = (e) => {
    dispatch(logoutUser());
  };

  return loggedInUser ? (
    <h3 className="login-display">
      Welcome{" "}
      <img
        src={users[loggedInUser].avatarURL}
        alt="Avatar for users[loggedInUser].name}"
        height="24"
      />
      {users[loggedInUser].name}
      <button className="logout-button" onClick={(e) => handleLogOut(e)}>
        Logout
      </button>
    </h3>
  ) : (
    <select
      className="login-select"
      onChange={(e) => handleLogin(e)}
      placeholder="Who are you?"
    >
      <option key="*NONE*" value="">
        Who are you?
      </option>
      {users &&
        Object.keys(users).map((u) => (
          <option key={u} value={u}>
            {users[u].name}
          </option>
        ))}
      ;
    </select>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Login);
