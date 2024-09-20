import NavBar from "../Components/navBar";
import SearchBar from "../Components/searchBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className="bg-neutral-white h-screen flex items-start">
                <div className="w-full px-6 md:ml-32 md:w-auto text-center md:text-left mt-10 md:mt-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-black">
                        Welcome to HomeFindr
                    </h1>
                    <p className="text-lg text-neutral-black">
                        The best place to find your dream home
                    </p>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
}
