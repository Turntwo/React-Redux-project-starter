const UserDisplay = ({ user }) => {
  return (
    <tr>
      <td>
        <img className="leaderboard-image" src={user.avatarURL} alt=""></img>
        {user.name}
      </td>
      <td>{Object.keys(user.answers).length}</td>
      <td>{user.questions.length}</td>
    </tr>
  );
};

export default UserDisplay;
