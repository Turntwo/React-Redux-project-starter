import { connect } from "react-redux";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
