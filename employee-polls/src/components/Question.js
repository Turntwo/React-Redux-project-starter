import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Question = ({ loggedInUser }) => {
  const params = useParams();
  console.log(params, loggedInUser);
  return <h1>Question {params.questionId}</h1>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps)(Question);
