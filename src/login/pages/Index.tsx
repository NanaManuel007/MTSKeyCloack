// // import { useState, useEffect, useReducer } from "react";
// // import { assert } from "keycloakify/tools/assert";
// import type { PageProps } from "../types";

// // import type { I18n } from "../i18n";
// import graLogo from "../../login/assets/img/gra.png";
// import { useState } from "react";

// const LoginPage = (props: PageProps<"login.ftl">) => {
//   // const [loading, setLoading] = useState(false);
//   const { i18n, Template, kcContext } = props;
//   const { url, realm, messagesPerField } = kcContext;
//   const { loginWithEmailAllowed } = realm;
//   const { msgStr } = i18n;
//   const [showPassword, setShowPassword] = useState(false);
//   // const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;
//   // const { msg, msgStr } = i18n;
//   // const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

//   return (
//     <Template i18n={i18n} kcContext={kcContext} >
//       <div className="flex flex-col items-center justify-center font-poppins relative pt-20">
//         {/* <img src={graLogo} alt="gra logo" className="w-[150px] object-cover absolute -top-4 z-10 pb-10" /> */}
//         <img src={graLogo} alt="gra logo" className="w-[100px] object-cover absolute top-[130px] z-20 pb-10" />
//       <div className=" w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-[610px] ">
//         <div className="flex flex-col">
//             <h1 className="  w-full text-center text-3xl font-bold text-gray-800 pt-[190px]">Sign In MTS</h1>
//             <div className=" px-16 pt-10 pb-5">
//                 <div className=" pb-5">
//                 <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                 </svg>
//                             </div>
//                             <input
//                                 type="text"
//                                 className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
//                                 placeholder={loginWithEmailAllowed ? msgStr('usernameOrEmail') : msgStr('username')}
//                                 name="username"
//                                 id="username"
//                             />
//                         </div>
//                 </div>

//                 <div className="pb-5">
//                 <div className="relative">
//                             <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                             <input
//                                 type="password"
//                                 className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
//                                 placeholder="Password"
//                                 id="password"
//                                 name="password"
//                             />
//                         </div>
//                 </div>
//                 <button
//                             type="submit"
//                             // className="w-full bg-[#0f172a] text-white font-medium py-3 px-6 rounded-full transition duration-200 hover:bg-[#1e293b] mt-6 text-lg"
//                             className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-6 text-lg"
//                         >
//                           {msgStr('doLogIn')}
//                         </button>
//             </div>

//            <div className="text-[15px] px-10 pb-10">
//            <h2 className="text-sm flex flex-row justify-center gap-1 p-2">
//               By signing in, I agree to the  <a href={kcContext.properties.TERMS_AND_POLICY_URL}className="text-[#0f172a] font-bold underline">
//                 T&Cs
//               </a>
//             </h2>
//               <h2 className=" flex items-end justify-center gap-1">
//                 Forgot{" "}
                
//                 <a href={kcContext.properties.FORGOT_PASSOWRD}className="text-[#0f172a] font-bold underline">
//                 Password
//               </a>
//               </h2>
//            {/* <h2 className=" pb-2 flex items-center justify-center">
//                 By signing in, I agree to the <span className="text-[#0f172a] font-bold">Terms of Service</span> and <span className="text-[#0f172a] font-bold">Privacy Policy</span>
//             </h2>

//             <h2 className="pb-2 flex items-center justify-center gap-1">Forgot <span className="text-[#0f172a] font-bold">Username</span> | <span className="text-[#0f172a] font-bold">Password</span></h2>
//             */}
           
//            </div>
      
   
//         </div>
//       </div>
//       </div>


//     </Template>
//   );
// };

import { useState } from "react";
import type { PageProps } from "../types";
import graLogo from "../../login/assets/img/gra.png";

const LoginPage = (props: PageProps<"login.ftl">) => {
  const { i18n, Template, kcContext } = props;
  const { realm, login, url, messagesPerField } = kcContext; 
  const { loginWithEmailAllowed } = realm;
  const { msgStr } = i18n;
  const [showPassword, setShowPassword] = useState(false);

  const hasUsernameError = messagesPerField.existsError("username");
  const hasPasswordError = messagesPerField.existsError("password");

  return (
    <Template i18n={i18n} kcContext={kcContext}>
      <div className="flex flex-col items-center justify-center font-poppins relative pt-20 px-4 sm:px-0">
        {kcContext.message && (
          <div
            className={`mb-4 p-4 border rounded-md text-sm w-full sm:w-[770px] ${
              kcContext.message.type === "error"
                ? "bg-red-50 border-red-200 text-red-700"
                : "bg-green-50 border-green-200 text-green-700"
            }`}
          >
            <span
              dangerouslySetInnerHTML={{ __html: kcContext.message.summary }}
            />
          </div>
        )}
        <img src={graLogo} alt="gra logo" className="w-[80px] object-cover absolute sm:top-[110px] top-[110px] z-20 pb-10" />
        <div className="w-full sm:w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-auto sm:h-[610px]">
          <div className="flex flex-col">
            <h1 className="w-full text-center text-3xl font-bold text-gray-800 pt-[100px] sm:pt-[140px]">Sign In MTS</h1>
            
            <form action={url.loginAction} method="post" className="flex flex-col">
              <div className="px-6 sm:px-16 pt-5 pb-5">

                {/* Username */}
                <div className="pb-5">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    {loginWithEmailAllowed ? msgStr('usernameOrEmail') : msgStr('username')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className={`w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 ${
                        hasUsernameError ? "focus:ring-red-300" : "focus:ring-gray-200"
                      } text-lg ${hasUsernameError ? "ring-2 ring-red-300" : ""}`}
                      placeholder={"example@mts.com or user"}
                      name="username"
                      id="username"
                      required
                    />
                  </div>
                  {hasUsernameError && (
                    <p className="mt-2 text-sm text-red-600 font-medium">
                      {messagesPerField.get("username")}
                    </p>
                  )}
                </div>

                {/* Password with visibility toggle */}
                <div className="pb-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 ${
                        hasPasswordError ? "focus:ring-red-300" : "focus:ring-gray-200"
                      } text-lg ${hasPasswordError ? "ring-2 ring-red-300" : ""}`}
                      placeholder="Password"
                      id="password"
                      name="password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(v => !v)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.866 3.866m0 0A10.07 10.07 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-3.866-3.866" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.543 7-4.477 0-8.268-2.943-9.543-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {hasPasswordError && (
                    <p className="mt-2 text-sm text-red-600 font-medium">
                      {messagesPerField.get("password")}
                    </p>
                  )}
                </div>

                {/* Remember me + Forgot password */}
                <div className="mt-3 flex items-center justify-between">
                  {realm.rememberMe && (
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        defaultChecked={Boolean(login?.rememberMe)}
                        className="rounded border-gray-300 text-gray-700 focus:ring-gray-400"
                      />
                      {msgStr('rememberMe')}
                    </label>
                  )}
                  <a
                    href={url.loginResetCredentialsUrl}
                    onClick={(e) => {
                      const canSwitch =
                        typeof window !== "undefined" &&
                        typeof (window as any).setKcPageId === "function";
                      if (import.meta.env.DEV && canSwitch) {
                        e.preventDefault();
                        (window as any).setKcPageId("login-reset-password.ftl");
                      }
                    }}
                    className="text-sm text-[#0f172a] font-semibold hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-6 text-lg"
                >
                  {msgStr('doLogIn')}
                </button>
              </div>

              <div className="text-[15px] px-10 pb-10">
                <h2 className="text-sm flex flex-row justify-center gap-1 p-2">
                  By signing in, I agree to the
                  <a href={kcContext.properties.TERMS_AND_POLICY_URL} className="text-[#0f172a] font-bold underline ml-1">Terms & Conditions</a>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default LoginPage;