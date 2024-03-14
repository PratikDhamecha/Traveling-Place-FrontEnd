// import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <ul className="flex gap-4">
          <div className="border rounded-2xl bg-cover bg-[url('../src/Images/Monuments.jpg')] w-32 h-14 bg-center">
            {/* <div>
                  <img src={monuments}/>
                </div> */}
            <li className="hidden sm:inline text-slate-800 hover:underline">

            </li>
          </div>
          <div className="border rounded-2xl bg-cover bg-[url('../src/Images/Religious.jpg')] w-32 h-14 bg-center">
            <li className="hidden sm:inline text-slate-800 hover:underline">

            </li>
          </div>
          <div to="/sign-in">
            <li className="text-slate-800 hover:underline">Nature</li>
          </div>
        </ul>
        
        <div>
        <form className=" float-left m-4 bg-slate-100  p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch color="black" />
        </form>
        <h1 className="float-left font-bold text-sm sm:text-xl flex flex-wrap">
          <div className="border rounded-full items-center p-6 bg-slate-800">
            <FaUser color="white" />
          </div>
        </h1>
        </div>
      </div>
    </header>
  );
}
export default Header;