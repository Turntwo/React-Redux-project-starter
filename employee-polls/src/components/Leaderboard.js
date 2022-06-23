import "./Leaderboard.css";
import { connect } from "react-redux";
import UserDisplay from "./UserDisplay";

const Leaderboard = ({ users }) => {
  return (
    <>
      <h1>Leaderboard</h1>
      <table className="leader-table">
        <tr>
          <th className="leader-table-header">Users</th>
          <th className="leader-table-header">Answered</th>
          <th className="leader-table-header">Created</th>
        </tr>
        {Object.values(users).map((user) => (
          <UserDisplay key={user.id} user={user} />
        ))}
      </table>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
