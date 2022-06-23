const UserDisplay = ({ user }) => {
  return (
    <tr>
      <td>
        <img className="leaderboard-image" src={user.avatarURL} alt=""></img>
        {user.name}
      </td>
      <td data-testid="answers">{Object.keys(user.answers).length}</td>
      <td data-testid="questions">{user.questions.length}</td>
    </tr>
  );
};

export default UserDisplay;
