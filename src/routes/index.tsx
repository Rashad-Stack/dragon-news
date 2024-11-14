import Error from "@/pages/Error";
import RootLayout from "@/pages/RootLayout";
import { Route } from "@/typing";

const routes: Route[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
];

export default routes;
