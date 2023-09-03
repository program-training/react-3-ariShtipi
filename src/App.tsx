import "./App.css";
import UsersFromServer from "./components/UsersFromServer/UsersFromServer";
import UserCard from "./components/UserCard/UserCard";
function App() {
  return (
    <>
      <UsersFromServer /> 
      <UserCard />
    </>
  );
}

export default App;
