 export interface WelcomeImage {
    _id: string;
    image: string;
    type: "Marketing" | "welcome" | "Register" | "login";
    text: string;
    subtext: string;
}



////////////// Generic Section
export interface APIResponse<T> {
    success: boolean;
    message: string;
    data: T
}

//////// Response 

 export interface getWelcomeImageAPIResponse {
    welcome: WelcomeImage[];
    Marketing: WelcomeImage[];
    Register: WelcomeImage[];
    login: WelcomeImage[];
}

export interface loginAPIResponse {
    success: boolean;
    message: string;
user:{    _id: string;
    full_name: string;
    email: string;
    user_type: string;
    registered_at: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: string;
    height: string;
    weight: string;
    address: string;
    country: string;
    postal_code: string;
    time_zone: string;
    userid: number;
    is_confirm: number;
    updated_at: string;
    created_at: string;
    last_login_at: string;},
    token:string;
    type: "bearer"
}

export interface ragisterAPIResposne {
    full_name: string;
    email: string;
    user_type: string;
    registered_at: string;
    first_name: string;
    last_name: string;
    gender: string;
    birthday: string;
    height: string;
    weight: string;
    address: string;
    country: string;
    postal_code: string;
    time_zone: string;
    userid: number;
    is_confirm: number;
    updated_at: string;
    created_at: string;
    _id: string;
  }