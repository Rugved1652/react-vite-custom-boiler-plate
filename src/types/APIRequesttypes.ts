export interface loginAPIRequest {
    email: string;
    password: string;
    user_type: "user";
}

export interface ragisterAPIRequest {
    name:string
    email:string
    password:string
    user_type:"user"
    }