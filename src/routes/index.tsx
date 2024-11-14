import Error from "@/pages/Error";
import Home from "@/pages/Home";

interface Route {
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
}

const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
];

export default routes;
