import { GlobalStateProvider } from "@/context/GlobalStateProvider";
import routes from "@/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  );
}

export default App;
