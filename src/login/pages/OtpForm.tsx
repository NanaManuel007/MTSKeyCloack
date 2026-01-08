import type { PageProps } from "../types";
import graLogo from "../assets/img/controller_logo.png";
import { useEffect } from "react";

export default function OtpForm(props: PageProps<"otp-form.ftl">) {
    const { i18n, Template, kcContext } = props;

    const url = (kcContext as any).url as
        | undefined
        | {
              loginAction?: string;
              resourcesPath?: string;
          };

    const resourcesPath = url?.resourcesPath;

    useEffect(() => {
        if (!resourcesPath) {
            return;
        }

        const id = "cast-css";
        if (document.getElementById(id) !== null) {
            return;
        }

        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `${resourcesPath}/css/cast.css`;
        document.head.appendChild(link);
    }, [resourcesPath]);

    useEffect(() => {
        const id = "recaptcha-api";
        if (document.getElementById(id) !== null) {
            return;
        }

        const script = document.createElement("script");
        script.id = id;
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (!resourcesPath) {
            return;
        }

        const id = "otp-time-js";
        if (document.getElementById(id) !== null) {
            return;
        }

        const script = document.createElement("script");
        script.id = id;
        script.src = `${resourcesPath}/js/time.js`;
        document.body.appendChild(script);
    }, [resourcesPath]);

    return (
        <Template i18n={i18n} kcContext={kcContext} displayInfo={false} displayMessage={true}>
            {kcContext.message && (
                <div
                    className={`mb-4 p-4 border rounded-md text-sm w-full sm:w-[770px] mx-auto ${
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
                    alt="ePayroll logo"
                    className="w-[80px] object-cover absolute sm:top-[70px] top-[60px] z-20 pb-10"
                />

                <div className="w-full sm:w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-auto sm:h-[610px]">
                    <div className="flex flex-col">
                        <h1 className="otp-title w-full text-center text-3xl font-bold text-gray-800 pt-[100px] sm:pt-[140px]">
                            Verify Your Identity
                        </h1>

                        <p className="text-center text-gray-600 mt-4 px-6">
                            We've sent a 6-digit code to your registered phone number ending in ****789
                        </p>

                        <form className="kc-otp-form flex flex-col" action={url?.loginAction} method="post">
                            <div className="px-6 sm:px-16 pt-5 pb-5">
                                <label className="enter block text-sm font-medium text-gray-700 mb-2" htmlFor="otp">
                                    Enter OTP
                                </label>

                                <input
                                    id="otp"
                                    className="otp-input w-full pl-4 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
                                    name="otp"
                                    type="text"
                                    autoComplete="one-time-code"
                                    placeholder="Enter 6-digit code"
                                />

                                <input
                                    type="submit"
                                    name="code"
                                    className="verify w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-6 text-lg"
                                    value="Verify OTP"
                                />

                                <div className="resend-wrapper mt-6 text-center text-gray-600">
                                    Didn’t get the code?{" "}
                                    <button
                                        type="submit"
                                        className="resend text-green-600 font-medium hover:underline focus:outline-none bg-transparent border-none cursor-pointer"
                                        name="action"
                                        value="resend"
                                    >
                                        Resend
                                    </button>
                                </div>

                                <p className="countdown text-gray-500 text-sm mt-2 text-center">
                                    Time remaining: <span id="countdownDisplay">20</span> seconds
                                </p>

                                <div
                                    className="g-recaptcha mt-4 flex justify-center"
                                    data-sitekey="6LeTJRIsAAAAAPuXsxYBIF0lLBRHxRoNWdkXFXDr"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Template>
    );
}