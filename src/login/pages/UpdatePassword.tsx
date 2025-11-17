import type { PageProps } from "../types";
import graLogo from "../../login/assets/img/gra.png";
import { useState } from "react";

function UpdatePasswordPage(props: PageProps<"login-update-password.ftl">) {
  const { i18n, Template, kcContext } = props;
  const { messagesPerField } = kcContext;
  const { msgStr } = i18n;

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const hasNewError = messagesPerField.existsError("password-new");
  const hasConfirmError = messagesPerField.existsError("password-confirm");

  return (
    <Template i18n={i18n} kcContext={kcContext}>
      {kcContext.message && (
        <div
          className={`mb-4 p-4 border rounded-md text-sm w-full sm:w-[770px] ${
            kcContext.message.type === "error"
              ? "bg-red-50 border-red-200 text-red-700"
              : "bg-green-50 border-green-200 text-green-700"
          }`}
        >
          <span dangerouslySetInnerHTML={{ __html: kcContext.message.summary }} />
        </div>
      )}

      <div className="flex flex-col items-center justify-center font-poppins relative pt-10 px-4 sm:px-0">
        <img
          src={graLogo}
          alt="gra logo"
          className="w-[80px] object-cover absolute sm:top-[70px] top-[60px] z-20 pb-10"
        />
        <div className="w-full sm:w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-auto sm:h-[610px]">
          <div className="flex flex-col">
            <h1 className="w-full text-center text-3xl font-bold text-gray-800 pt-[100px] sm:pt-[140px]">
              Change Password
            </h1>

            <form action={kcContext.url.loginAction} method="post" className="flex flex-col">
              <div className="px-6 sm:px-16 pt-5 pb-5">

                {/* New password */}
                <div className="pb-5">
                  <label htmlFor="password-new" className="block text-sm font-medium text-gray-700 mb-2">
                    {msgStr("passwordNew") ?? "New password"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17a2 2 0 01-2-2v-2a2 2 0 114 0v2a2 2 0 01-2 2zm6-7V7a6 6 0 10-12 0v3a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3zM8 7a4 4 0 118 0v3H8V7z" />
                      </svg>
                    </div>
                    <input
                      type={showNew ? "text" : "password"}
                      className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 ${
                        hasNewError ? "focus:ring-red-300" : "focus:ring-gray-200"
                      } text-lg ${hasNewError ? "ring-2 ring-red-300" : ""}`}
                      placeholder="Enter new password"
                      id="password-new"
                      name="password-new"
                      autoComplete="new-password"
                      required
                      aria-invalid={hasNewError || undefined}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(v => !v)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                      aria-label={showNew ? "Hide password" : "Show password"}
                      title={showNew ? "Hide password" : "Show password"}
                    >
                      {showNew ? (
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
                  {hasNewError && (
                    <p className="mt-2 text-sm text-red-600 font-medium">
                      {messagesPerField.get("password-new")}
                    </p>
                  )}
                </div>

                {/* Confirm password */}
                <div className="pb-3">
                  <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 mb-2">
                    {msgStr("passwordConfirm") ?? "Confirm password"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17a2 2 0 01-2-2v-2a2 2 0 114 0v2a2 2 0 01-2 2zm6-7V7a6 6 0 10-12 0v3a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3zM8 7a4 4 0 118 0v3H8V7z" />
                      </svg>
                    </div>
                    <input
                      type={showConfirm ? "text" : "password"}
                      className={`w-full pl-12 pr-12 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 ${
                        hasConfirmError ? "focus:ring-red-300" : "focus:ring-gray-200"
                      } text-lg ${hasConfirmError ? "ring-2 ring-red-300" : ""}`}
                      placeholder="Confirm new password"
                      id="password-confirm"
                      name="password-confirm"
                      autoComplete="new-password"
                      required
                      aria-invalid={hasConfirmError || undefined}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(v => !v)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                      title={showConfirm ? "Hide password" : "Show password"}
                    >
                      {showConfirm ? (
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
                  {hasConfirmError && (
                    <p className="mt-2 text-sm text-red-600 font-medium">
                      {messagesPerField.get("password-confirm")}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-6 text-lg"
                >
                  {msgStr("doSubmit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Template>
  );
}

export default UpdatePasswordPage;