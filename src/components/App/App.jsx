import Profile from "../Profile/Profile";
import userData from "./userData.json";

const App = () => {
  return (
    <>
      {userData.map((user) => (
        <Profile user={user} stats={user.stats} key={user.id} />
      ))}
    </>
  );
};
export default App;
