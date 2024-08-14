import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <section className="text-gray-600 bg-white mt-28 body-font dark:bg-slate-900">
      <div className="container w-[85vw] flex flex-col items-center mx-auto md:px-24 md:py-10 md:flex-row">
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-3 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight">
            Welcome to User Profile
          </h1>
          <p className="pl-2 pr-2 mb-8 leading-relaxed md:pl-0 dark:text-gray-300">
            User Profile is a tool designed to make it easier for you to manage
            and view user lists and details easily and efficiently. Easy
            Solution to Manage and View User Details
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-emerald-600"
            >
              Start Exploring
            </a>
            <a
              href="#"
              className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
            >
              Read articles
            </a>
          </div>
        </div>
        <div className="w-3/6 mb-5 lg:max-w-lg lg:w-full md:mb-0 md:w-1/2">
          <img
            className={`object-cover  object-center rounded ${style.hero}`}
            alt="hero"
            src="../../src/assets/hero/hero.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
