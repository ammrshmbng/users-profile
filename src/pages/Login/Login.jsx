import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = { email: '', password: '' };

    // Validasi Email
    if (!input.email) {
      newErrors.email = 'Email is required';
    } else if (input.email !== 'eve.holt@reqres.in') {
      newErrors.email = 'Email is not valid';
    }

    // Validasi Password
    if (!input.password) {
      newErrors.password = 'Password is required';
    } else if (input.password !== 'cityslicka') {
      newErrors.password = 'Password is not valid';
    }

    // Jika ada error, set error state
    if (newErrors.email || newErrors.password) {
      setError(newErrors);
      return false;
    }

    // Reset error jika valid
    setError({ email: '', password: '' });
    return true;
  };


  const handleSubmit = () => {
   
    
  if(validateForm()){
    axios
      .post("https://reqres.in/api/login", input)
      .then((res) => {
        localStorage.setItem("access_token", res.data.token );
        navigate("/user-lists");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  };


  return (
    <div className="flex justify-center text-gray-900 bg-gray-100">
      <div className="flex justify-center flex-1 max-w-screen-xl mt-24 bg-white shadow sm:rounded-lg">
        <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
            />
          </div>
          <div className="flex flex-col items-center mt-12">
            <h1 className="text-2xl font-extrabold xl:text-3xl">Sign up</h1>
            <div className="flex-1 w-full mt-8">
              <div className="flex flex-col items-center">
                <button className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="p-2 bg-white rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>

                <button className="flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 rounded-lg shadow-sm focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="p-1 bg-white rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with GitHub</span>
                </button>
              </div>

              <div className="my-12 text-center border-b">
                <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                  Or sign up with e-mail
                </div>
              </div>

              <div className="max-w-xs mx-auto">
                <input
                  name="email"
                  onChange={handleInput}
                  className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                {error.email && (
          <span className="text-sm text-red-500">{error.email}</span>
        )}
                <input
                  onChange={handleInput}
                  name="password"
                  className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                 {error.password && (
          <span className="text-sm text-red-500">{error.password}</span>
        )}
                <button onClick={handleSubmit} className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span  className="ml-3">
                    Log In
                  </span>
                </button>
                <p className="mt-6 text-xs text-center text-gray-600">
                  I agree to abide by templatanas
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
          <div
            className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
