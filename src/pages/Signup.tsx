import {useState} from "react";
import {useSignupUserMutation} from "../redux/features/user/userApi.ts";


const Signup = () => {
  const [signupUser, {isError, error, isSuccess}] = useSignupUserMutation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await signupUser({
        email,
        username,
        credentials: [
          {
            "temporary": false,
            "type": "password",
            "value": password,
          }
        ],
        "enabled": true,
      });
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            email</label>
          <input type="email" id="email"
                 onChange={(e)=> setEmail(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="name@flowbite.com" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            username</label>
          <input type="text" id="username"
                 onChange={(e)=> setUsername(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="username" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            password</label>
          <input type="password" id="password"
                 onChange={(e)=> setPassword(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="password" required/>
        </div>
        <button type="submit"
                onSubmit={(e)=>handleSubmit(e)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>

    </div>
  );
};

export default Signup;