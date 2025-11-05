import type { PageProps } from "../types";
import graLogo from "../../login/assets/img/gra.png";
import { useState } from "react";

function ResetPasswordPage(props: PageProps<"login-reset-password.ftl">) {
  const { i18n, Template, kcContext } = props;
  const { realm, messagesPerField } = kcContext;
  const { msgStr } = i18n;
  const [username, setUsername] = useState("");

  const hasUsernameError = messagesPerField.existsError("username");

  return (
    <Template i18n={i18n} kcContext={kcContext}>
      <div className="flex flex-col items-center justify-center font-poppins relative pt-20 px-4 sm:px-0">
        {/* show error */}
        {(kcContext.message && kcContext.message.type === "error") || hasUsernameError ? (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm w-full sm:w-[770px]">
            <span
              dangerouslySetInnerHTML={{
                __html: hasUsernameError
                  ? messagesPerField.get("username")
                  : kcContext.message?.summary ?? ""
              }}
            />
          </div>
        ) : null}
        <img src={graLogo} alt="gra logo" className="w-[80px] object-cover absolute sm:top-[110px] top-[110px] z-20 pb-10" />
        <div className="w-full sm:w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-auto sm:h-[580px]">
          <div className="flex flex-col">
            <h1 className="w-full text-center text-3xl font-bold text-gray-800 pt-[100px] sm:pt-[140px]">Reset Password</h1>

            <form
              id="kc-reset-password-form"
              action={kcContext.url.loginAction}
              method="post"
              className="px-6 sm:px-16 pt-10 pb-5 flex flex-col"
            >
              <div className="pb-5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  {realm.loginWithEmailAllowed ? msgStr("email") : msgStr("username")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    {/* icon */}
                  </div>
                  <input
                    type="text"
                    className={`w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 ${
                      hasUsernameError ? "focus:ring-red-300" : "focus:ring-gray-200"
                    } text-lg ${hasUsernameError ? "ring-2 ring-red-300" : ""}`}
                    placeholder={realm.loginWithEmailAllowed ? "example@mts.com" : "username"}
                    name="username"
                    id="username"
                    autoComplete={realm.loginWithEmailAllowed ? "email" : "username"}
                    inputMode={realm.loginWithEmailAllowed ? "email" : "text"}
                    aria-invalid={hasUsernameError || undefined}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </div>
                {hasUsernameError && (
                  <p className="mt-2 text-sm text-red-600 font-medium">
                    {messagesPerField.get("username")}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-2 text-lg"
              >
                {msgStr("doSubmit")}
              </button>
            </form>

            <div className="text-[15px] px-10 pb-6">
              <h2 className="text-sm flex flex-row justify-center gap-1 p-2">
               Back to Login Page
                <a href={kcContext.url.loginUrl} className="text-[#0f172a] font-bold underline ml-1">
                  {msgStr("doLogIn")}
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ResetPasswordPage;