export default function SearchBar() {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4">
                <div className="bg-neutral-white rounded-lg p-4 shadow-lg flex items-center">
                    {/* Search Input */}
                    <div className="flex items-center border border-neutral-black rounded-full p-2 w-full md:w-1/2">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.4638 15.4791C19.6192 15.6348 19.7627 15.8024 19.9181 15.9581C21.6516 17.6942 23.3851 19.4304 25.1186 21.1665C26.338 22.3998 26.2902 23.7289 24.9871 25.022C23.7198 26.2912 22.3809 26.3271 21.1734 25.1178C19.3921 23.3457 17.6227 21.5736 15.8533 19.7776C15.6142 19.5262 15.4349 19.4783 15.1002 19.6459C8.70414 22.783 1.39952 19.0592 0.156181 12.0427C-0.871965 6.37927 3.30039 0.763699 9.01497 0.0812096C15.6979 -0.721015 21.2212 4.52338 20.743 11.2525C20.6474 12.7372 20.1931 14.1381 19.4638 15.4791ZM10.3898 1.96105C5.70339 1.97302 1.97337 5.7327 1.98532 10.4263C1.99728 15.072 5.75121 18.8078 10.4018 18.8078C15.0643 18.8078 18.8541 14.9882 18.8182 10.3425C18.7943 5.69678 15.0165 1.94908 10.3898 1.96105Z"
                                fill="black"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Area, Compound, Real Estate Developer"
                            className="w-full pl-4 outline-none bg-transparent"
                        />
                    </div>

                    {/* Filter buttons */}
                    <div className="flex space-x-4 ml-4">
                        {/* Property Types */}
                        <div className="relative">
                            <button className="flex items-center text-black focus:outline-none">
                                Property Types
                                <svg
                                    className="ml-2"
                                    width="14"
                                    height="25"
                                    viewBox="0 0 14 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6623 22.894L2.4707 12.4529L11.6623 2.01181"
                                        stroke="#212427"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div className="absolute bg-white shadow-lg hidden">
                                <label className="block p-2">
                                    <input type="checkbox" name="Apartment" /> Apartment
                                </label>
                                <label className="block p-2">
                                    <input type="checkbox" name="Villa" /> Villa
                                </label>
                                <label className="block p-2">
                                    <input type="checkbox" name="Studio" /> Studio
                                </label>
                            </div>
                        </div>

                        {/* Bedrooms */}
                        <div className="relative">
                            <button className="flex items-center text-black focus:outline-none">
                                Bedrooms
                                <svg
                                    className="ml-2"
                                    width="14"
                                    height="25"
                                    viewBox="0 0 14 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6623 22.894L2.4707 12.4529L11.6623 2.01181"
                                        stroke="#212427"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div className="absolute bg-white shadow-lg hidden">
                                <label className="block p-2">
                                    <input type="checkbox" name="1 Bedrooms" /> 1 Bedroom
                                </label>
                                <label className="block p-2">
                                    <input type="checkbox" name="2 Bedrooms" /> 2 Bedrooms
                                </label>
                                <label className="block p-2">
                                    <input type="checkbox" name="3 Bedrooms" /> 3 Bedrooms
                                </label>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="relative">
                            <button className="flex items-center text-black focus:outline-none">
                                Price
                                <svg
                                    className="ml-2"
                                    width="14"
                                    height="25"
                                    viewBox="0 0 14 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6623 22.894L2.4707 12.4529L11.6623 2.01181"
                                        stroke="#212427"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div className="absolute bg-white shadow-lg hidden">
                                <label className="block p-2">
                                    <input type="checkbox" name="1M To 4M" /> 1M to 4M
                                </label>
                                <label className="block p-2">
                                    <input type="checkbox" name="4M To 10M" /> 4M to 10M
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="bg-orange-200 text-white p-2 rounded-full ml-4 hover:bg-orange-100">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
