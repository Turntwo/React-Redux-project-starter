import "./QuestionListDisplay.css";
import { Link } from "react-router-dom";

const QuestionListDisplay = ({ question, author }) => {
  const formattedDate = Intl.DateTimeFormat("default", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(question.timestamp));

  return (
    <li className="question-list-display">
      <Link to={`/question/${question.id}`}>
        <img
          src={author.avatarURL}
          alt="Avatar for author.name}"
          className="author-image"
        />
        <div>{author.name}</div>
        <div className="question-date-time">{formattedDate}</div>
      </Link>
    </li>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     users: state.users,
//     questions: state.users,
//     loggedInUser: state.loggedInUser,
//   };
// };

// export default connect(mapStateToProps)(QuestionListDisplay);
export default QuestionListDisplay;
