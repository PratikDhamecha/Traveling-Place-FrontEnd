import { FaBackward } from "react-icons/fa";

function UserProfile() {
    return (
        <>
            <div class="container">
                <section class="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
                    <button class="text-white focus:outline-none">
                        <i class="material-icons">
                            <FaBackward />
                        </i>
                    </button>
                    <div class="flex items-center">
                        <h1 class="mr-2">Escaping</h1>
                        <img class="w-6 h-6" src="https://source.unsplash.com/random" alt="verified-icon"/>
                    </div>
                    <button class="text-white focus:outline-none">
                        <i class="material-icons">more_horiz</i>
                    </button>
                </section>

                <section class="flex justify-between py-6 px-4">
                    <div class="w-1/3">
                        <div class="bg-cover bg-center w-32 h-32 rounded-full" style={{backgroundImage: "url('https://source.unsplash.com/random')"}}></div>
                    </div>
                    <div class="w-2/3 flex justify-between items-center">
                        <div>
                            <div class="text-lg font-semibold">6,126</div>
                            <div class="text-gray-600">Posts</div>
                        </div>
                        <div>
                            <div class="text-lg font-semibold">317 M</div>
                            <div class="text-gray-600">Followers</div>
                        </div>
                        <div>
                            <div class="text-lg font-semibold">225</div>
                            <div class="text-gray-600">Following</div>
                        </div>
                    </div>
                </section>

                <section class="py-6 px-4">
                    <h2 class="text-xl font-semibold">Instagram</h2>
                    <p class="text-gray-700">Bringing you closer to the people and things you love. ❤️</p>
                    <button href="https://www.antibullyingpro.com/resources" class="text-blue-500 hover:underline">www.antibullyingpro.com/resources</button>
                </section>

                <section class="flex justify-between py-4 px-6">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded">Message</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                        <i class="material-icons">keyboard_arrow_down</i>
                    </button>
                </section>

                <section class="flex justify-between py-6 px-4">
                    
                </section>

                <section class="flex justify-between py-6 px-4">
                </section>

                <section class="grid grid-cols-3 gap-4 px-4 py-6">
                </section>

                <section class="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around items-center py-2">
                    <button class="text-white focus:outline-none">
                        <img src="https://source.unsplash.com/random/20x20" alt="home icon"/>
                    </button>
                    <button class="text-white focus:outline-none">
                        <img src="https://source.unsplash.com/random/20x20" alt="search icon"/>
                    </button>
                    <button class="text-white focus:outline-none">
                        <img src="https://source.unsplash.com/random/20x20" alt="add icon"/>
                    </button>
                    <button class="text-white focus:outline-none">
                        <img src="https://source.unsplash.com/random/20x20" alt="heart icon"/>
                    </button>
                    <button class="text-white focus:outline-none">
                        <img src="https://source.unsplash.com/random/20x20" alt="profile picture"/>
                    </button>
                </section>
            </div>


        </>
    );
}

export default UserProfile;