import { loginRoutes } from "./authRoutes/loginRoutes";
import { homeRoutes } from "./homeRoutes/homeroute";
import ProtectedRoute from "./protectedroutes";

export const routes = [
  ...loginRoutes,
  ...homeRoutes
]