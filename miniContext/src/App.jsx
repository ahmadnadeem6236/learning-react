/* eslint-disable no-unused-vars */
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h1>Where are you everyone is here,</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
