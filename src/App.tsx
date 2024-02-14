import Header from "./components/header/Header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="max-w-[1300px] w-full mx-auto px-5 2xl:px-0">
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
