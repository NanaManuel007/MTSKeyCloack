
import { CustomTemplateProps } from './types'
import type { KcContext } from './KcContext'

function Template<T extends KcContext["pageId"]>(props: CustomTemplateProps<T>) {
    const { children } = props



    return (
        <div className="bg-login-bg bg-[length:200px] bg-repeat bg-gray-100 flex items-center justify-center h-screen w-screen">
        <div className=" flex items-center justify-center h-screen w-screen   bg-opacity-80  bg-white">
            <div className="max-w">
                {/* <div className="bg-white rounded-lg shadow-lg p-6"> */}
                    {children}
                </div>
                <div className="flex items-center mt-[1%]">
                    
                    {/* {!!enabledLanguages?.length && internationalizationEnabled && (
                        <div className="ml-auto">
                            <LanguageSelect i18n={i18n} />
                        </div>
                    )} */}
                </div>
            </div>
        </div>
     
        // <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        //{/* <div className="absolute inset-0 bg-login-bg bg-repeat bg-[length:200px] opacity-40 -z-10"></div> */}
        //    <div className="absolute inset-0 bg-gray-200 bg-[length:200px] opacity-40 -z-10"></div>
        //   {children}
        // </div>
        );
    }

    export { Template }