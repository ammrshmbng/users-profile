import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home")

  const handleTabClick = (tab) => {
    setActiveTab(tab.target.name)
  }
  return (
    <nav onClick={handleTabClick} className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./src/assets/logo/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </Link>
    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {
          localStorage.getItem("access_token") ?  <Link to="/" onClick={() => localStorage.removeItem("access_token")} >Logout</Link>:<Link to="/login" >Login</Link>
        }
        
       
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li >
          <Link name="home" to="/" className={`block px-3 py-2 rounded md:p-0 md:dark:text-blue-500 ${activeTab === "home" ? "text-blue-700" : "text-gray-900"}  md:hover:text-blue-700`} aria-current="page">Home</Link>
        </li>
        <li >
          <Link name="user-lists" to="/user-lists" className={`block px-3 py-2 ${activeTab === "user-lists" ? "text-blue-700" : "text-gray-900"} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>User Lists</Link>
        </li>
        <li >
          <a href="#" name="services" className={`block px-3 py-2 ${activeTab === "services" ? "text-blue-700" : "text-gray-900"} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</a>
        </li>
        <li >
          <a href="#" name="contact" className={`block px-3 py-2 ${activeTab === "contact" ? "text-blue-700" : "text-gray-900"} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
