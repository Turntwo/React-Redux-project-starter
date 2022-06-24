import "./Leaderboard.css";
import { connect } from "react-redux";
import UserDisplay from "./UserDisplay";

const Leaderboard = ({ users }) => {
  const getCounts = (user) => {
    return Object.keys(user.answers).length + user.questions.length;
  };

  return (
    <>
      <h1>Leaderboard</h1>
      <table className="leader-table">
        <thead>
          <tr>
            <th className="leader-table-header">Users</th>
            <th className="leader-table-header">Answered</th>
            <th className="leader-table-header">Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(users)
            .sort((a, b) => getCounts(b) - getCounts(a))
            .map((user) => (
              <UserDisplay key={user.id} user={user} />
            ))}
        </tbody>
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
