import Home from "../../Pages/Home";
import ProtectedRoute from "../protectedroutes";

export const homeRoutes = [
    {
      id: "HR1",
      name: "home",
      path: "/home",
      component: Home,
      auth: ProtectedRoute,
      children: [], 
    },
]