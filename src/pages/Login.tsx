import { useEffect} from 'react'
import logo from '../assets/login/Fisio-DGT Request-TM 3.svg'
import Input from '../Components/input';
import ButtonComponent from '../Components/ButtonComp';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/store/hooks';
import { getLoginAPI, getWelcomeImageAPI } from '../redux/features/onboardingSlice';
import { loginAPIRequest } from '../types/APIRequesttypes';


type Props = {}

const Login = ({ }: Props) => {
  const dispatch = useAppDispatch()
  const { register,handleSubmit } = useForm<loginAPIRequest>()

  useEffect(() => {
    dispatch(getWelcomeImageAPI());
  }, [])

  const loginAccess =(params:loginAPIRequest)=>
  {
    dispatch(getLoginAPI(params));
  } 


  return (
    <div className='bg-slate-300 min-h-[100vh] xs:px-10 py-8 xxs:px-8'>
      <div className='flex items-center justify-end'>
        {/* <ExitIcon /> */}
        <Link to={"/signup"}> Sign up</Link>
      </div>
      <div className='flex items-center justify-center py-10 flex-col gap-[4.5rem]'>
        <img src={logo} alt="Login" />
        <p className='text-white text-[1.75rem]'>Welcome Back</p>
      </div>
      <form onSubmit={handleSubmit(loginAccess)}>
        <div className='flex flex-col gap-4'>
          <Input type={'email'} placeholder={'Email'} onchange={(e: { target: { value: any; }; }) => console.log(e.target.value)} label={''} register={register} name={'email'} />
          <div className='w-[100%] relative'>
            <Input type={"password"}
              placeholder={'Password'} label={''} register={register} name={"password"} />
            {/* <img
            src={showText ? show : hide}
            alt={showText ? show : hide}
            onClick={handlePass}
            className="absolute right-[1.25rem] top-[50%] translate-y-[-50%] cursor-pointer"
          /> */}
          </div>
        </div>
        <div className='w-[100%] py-8 flex flex-col'>
          <ButtonComponent
            name={"Sign In"}
            type="submit"
            className={'text-white'}
          />
        </div>
      </form>
      <Link to={"/forgotPass"} className='text-white'>Forgot Password?</Link>
    </div>
  )
}

export default Login