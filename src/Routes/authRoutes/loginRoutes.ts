import Signup from "../../Components/Signup";
import forgotPass from "../../Components/forgotPass";
import Login from "../../Pages/Login";
import publicRoute from "../Publicroutes";

export const loginRoutes = [
    {
      id: "LR1",
      name: "login",
      path: "",
      component: Login,
      auth: publicRoute,
      children: [], 
    },
    {
      id: "LR2",
      name: "SignUp",
      path: "/signup",
      component: Signup,
      auth: publicRoute,
      children: [], 
    },
    {
      id: "LR3",
      name: "login",
      path: "/forgotPass",
      component: forgotPass,
      auth: publicRoute,
      children: [], 
    },
]