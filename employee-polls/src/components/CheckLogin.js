import "./Login.css";
import { connect } from "react-redux";
import { Fragment } from "react";

const CheckLogin = ({ loggedInUser, children }) => {
  return loggedInUser ? (
    <Fragment>{children}</Fragment>
  ) : (
    <h1>You must login to use the Polls application</h1>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loggedInUser: state.loggedInUser,
    children: ownProps.children,
  };
};

export default connect(mapStateToProps)(CheckLogin);
