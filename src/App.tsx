import Header from "./components/header/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1300px] w-full mx-auto px-5 2xl:px-0">
        <Outlet />
      </div>
      Footer
    </>
  );
}

export default App;
