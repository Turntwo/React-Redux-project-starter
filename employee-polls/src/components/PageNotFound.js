import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <h1>
      Hey it looks like the page you are looking for doesn't exist. Maybe try
      again, or click <Link to="/">here</Link> to start over.
    </h1>
  );
};

export default PageNotFound;
