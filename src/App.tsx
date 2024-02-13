import Header from "./components/header/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1300px] w-full mx-auto">
        <Outlet />
      </div>
      Footer
    </>
  );
}

export default App;
