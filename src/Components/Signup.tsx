import { useEffect, useState } from "react";
import logo from "../assets/login/Fisio-DGT Request-TM 3.svg";
import Input from "../Components/input";
import hide from "../assets/login/eyeHide.svg";
import show from "../assets/login/eyeShow.svg";
import ButtonComponent from "../Components/ButtonComp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/store/hooks";
import { ragisterUserAPI } from "../redux/features/onboardingSlice";
import { ragisterAPIRequest } from "../types/APIRequesttypes";
type Props = {};

const Signup = ({}: Props) => {
  const [showText, setShowText] = useState(false);
  const ragisterData: ragisterAPIRequest = {
    name: "",
    email: "",
    password: "",
    user_type: "user",
  };
  const { register,handleSubmit } = useForm<ragisterAPIRequest>();
  const dispatch = useAppDispatch();
  const submitRagister = (params: ragisterAPIRequest) => {
    dispatch(ragisterUserAPI(params))
  };

  return (
    <div className="bg-slate-300 min-h-[100vh] xs:px-10 py-8 xxs:px-8">
      <div className="flex items-center justify-end">
        {/* <ExitIcon /> */}
        <Link to={"/"}> Sign in</Link>
      </div>
      <div className="flex items-center justify-center py-10 flex-col gap-[4.5rem]">
        <img src={logo} alt="Login" />
        <p className="text-white text-[1.75rem]">Createe an account</p>
      </div>
      <form onSubmit={handleSubmit(submitRagister)} className="flex flex-col gap-4">
        <Input
          type={"text"}
          placeholder={"Full Name"}
          label={""}
          register={register}
          name={"name"}
        />
        <Input
          type={"email"}
          placeholder={"Email"}
          label={""}
          register={register}
          name={"email"}
        />
        <div className="w-[100%] relative">
          <Input
            type={showText ? "text" : "password"}
            placeholder={"Password"}
            label={""}
            register={register}
            name={"password"}
          />
          {/* <img
            src={showText ? show : hide}
            alt={showText ? show : hide}
            onClick={handlePass}
            className="absolute right-[1.25rem] top-[50%] translate-y-[-50%] cursor-pointer"
          /> */}
        </div>
        <div className="w-[100%] py-8 flex flex-col">
          <ButtonComponent
            name={"Sign Up"}
            type="submit"
            className={"text-white"}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
