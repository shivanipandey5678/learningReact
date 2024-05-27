// import { createContext,useState } from "react";
// export const AuthContext=createContext();



// export default function AuthContextProvider({children}){
   
//     let [authDetails,setAuthDetils]=useState({
//         token:null,
//         isLogin:false,

//     });

//     function login(token){
//         setAuthDetils({
//             token:token,
//             isLogin:true,
//         })
//     }

//     function logout(){
//         setAuthDetils({
//             token:null,
//             isLogin:false,
//         })
//     }
//    return (
//     <AuthContext.Provider value={{authDetails,login,logout}}>
//        {children}
//     </AuthContext.Provider>
//    );
   
// }

import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    token: null,
    isLogin: false,
  });

  function login(token) {
    setAuthDetails({
      token: token,
      isLogin: true,
    });
  }

  function logout() {
    setAuthDetails({
      token: null,
      isLogin: false,
    });
  }

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
