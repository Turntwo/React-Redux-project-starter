import { connect } from "react-redux";

const NewQuestion = () => {
  return <h1>New Question</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
