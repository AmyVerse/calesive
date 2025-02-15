import {
    ClerkProvider,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
    return (
        <ClerkProvider>
            <div className="bg-white dark:bg-[#040712] border-gray-800 border-b-2 dark:border-gray-800">
                <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto px-4 pt-2">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">Calesive</span>
                    </a>
                    <div className="flex items-center md:order-2 m-3 space-x-3 md:space-x-4 rtl:space-x-reverse">
                        <SignedOut>
                            <SignUpButton><button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Get Started
                            </button></SignUpButton>
                        </SignedOut>
                        <SignedIn>

                            {/* Search Icon */}
                            <div className='p-1'>
                                <button className="relative text-gray-400 transition-transform duration-200 hover:scale-110 hover:text-white focus:outline-none">
                                    <span className="sr-only">Search</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Notification Icon */}
                            <div className='p-1'>
                                <button className="relative text-gray-400 rounded-full transition-transform duration-200 hover:scale-110 hover:text-white hover:border-white focus:outline-none">
                                    <span className="sr-only">View notifications</span>
                                    <div className="absolute -right-1 h-1 w-1 bg-red-500 rounded-full flex items-center justify-center">
                                    </div>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>
                            </div>



                            {/* User Button */}
                            <div className="border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center dark:border-blue-600 dark:focus:ring-blue-800">
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10",
                                            userButtonTrigger: "focus:shadow-none",
                                        }
                                    }}
                                />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </ClerkProvider>
    );
}