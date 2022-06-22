import { connect } from "react-redux";

const Leaderboard = () => {
  return <h1>Leaderboard</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
