import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Status } from '../../types/global';
import axiosClient from '../../api/api';
import { loginAPIRequest, ragisterAPIRequest } from '../../types/APIRequesttypes';
import { APIResponse, getWelcomeImageAPIResponse, ragisterAPIResposne,loginAPIResponse } from '../../types/APIResponsetypes';

export const getWelcomeImageAPI = createAsyncThunk<APIResponse<getWelcomeImageAPIResponse>, void>("onboarding/getWelcomeImageAPI", async()=>{
    const res = await axiosClient.get<APIResponse<getWelcomeImageAPIResponse>>("auth/getwelcomeimages")
    console.log(res)
    return res.data
  })
export const ragisterUserAPI = createAsyncThunk<APIResponse<ragisterAPIResposne>,ragisterAPIRequest>("onboarding/RagisterUserAPI",async(data) => {
  const res = await axiosClient.post<APIResponse<ragisterAPIResposne>>("auth/register",data)
  console.log(res)
  return res.data
})
export const getLoginAPI = createAsyncThunk<loginAPIResponse, loginAPIRequest>("onboarding/getLoginAPI",async(data)=>{
  const res = await axiosClient.post<loginAPIResponse>("auth/login",{...data, user_type: "user"})
  console.log(res);
  return res.data
})



interface OnboardingIntialState {
    getWelcomeImageAPIStatus : Status;
    getCountryZoneAPIStatus: Status;
    welcomeImages: getWelcomeImageAPIResponse;
    userLoginAPiStatus:Status;
    userLOginApiResponse:loginAPIResponse;
    ragisterUserAPIStatus : Status;
    ragisterUserAPIResponse : ragisterAPIResposne
}

const initialState: OnboardingIntialState = {
   getWelcomeImageAPIStatus : Status.SUCCESS,
   getCountryZoneAPIStatus: Status.SUCCESS,
   userLoginAPiStatus:Status.SUCCESS,
   ragisterUserAPIStatus: Status.SUCCESS,
   welcomeImages:{
    login : [],
    Marketing : [],
     Register : [], 
     welcome : []
   },
   userLOginApiResponse:{
    message: "",
    success: false,
    token: "",
     type: "bearer",
     user:{
    _id: "",
    full_name: "",
    email: "",
    user_type: "",
    registered_at: "",
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
    height: "",
    weight: "",
    address: "",
    country: "",
    postal_code: "",
    time_zone: "",
    userid: 0,
    is_confirm: 0,
    updated_at: "",
    created_at: "",
    last_login_at: ""}
   },
   ragisterUserAPIResponse:{
    full_name: "",
    email: "",
    user_type: "",
    registered_at: "",
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
    height: "",
    weight: "",
    address: "",
    country: "",
    postal_code: "",
    time_zone: "",
    userid: 0,
    is_confirm: 0,
    updated_at: "",
    created_at: "",
    _id: ""
   }
}

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getWelcomeImageAPI.pending, (state)=>{
      state.getWelcomeImageAPIStatus = Status.LOADING
    })
    .addCase(getWelcomeImageAPI.fulfilled, (state, action)=>{
      state.welcomeImages = action.payload.data
      state.getWelcomeImageAPIStatus = Status.SUCCESS
    })
    .addCase(getWelcomeImageAPI.rejected, (state)=>{
      state.getWelcomeImageAPIStatus = Status.ERROR
    }).addCase(getLoginAPI.pending, (state)=>{
      state.userLoginAPiStatus = Status.LOADING
    })
    .addCase(getLoginAPI.fulfilled, (state, action)=>{
      state.userLOginApiResponse = action.payload
      state.userLoginAPiStatus = Status.SUCCESS
    })
    .addCase(getLoginAPI.rejected, (state)=>{
      state.userLoginAPiStatus = Status.ERROR
    }).addCase(ragisterUserAPI.pending,(state)=>{
      state.ragisterUserAPIStatus = Status.LOADING
    }).addCase(ragisterUserAPI.fulfilled,(state,action)=>{
      state.ragisterUserAPIResponse = action.payload.data
      state.ragisterUserAPIStatus = Status.SUCCESS
    }).addCase(ragisterUserAPI.rejected,(state)=>{
      state.ragisterUserAPIStatus = Status.ERROR
    })
  }
});

export const {} = onboardingSlice.actions

export default onboardingSlice.reducer