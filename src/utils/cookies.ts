    export const getCookie = (name: string) => {
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookies.split("; ");
    const cookie = cookieArray.find((c) => c.startsWith(`${name}=`));
    return cookie ? cookie.split("=")[1] : undefined;
  };
  
  export const clearCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  };
  