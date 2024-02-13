import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
]);

function App() {
  return (
    <>
      Navbar
      <RouterProvider router={router} />
      Footer
    </>
  );
}

export default App;
