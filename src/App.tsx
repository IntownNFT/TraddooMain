import Header from "./components/header/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      Footer
    </>
  );
}

export default App;
