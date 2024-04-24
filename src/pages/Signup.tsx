import {useState} from "react";
import {useSignupUserMutation} from "../redux/features/user/userApi.ts";
import {toast} from "react-toastify";

const Signup = () => {
  const [signupUser] = useSignupUserMutation()

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      const res = await signupUser({
        firstName,
        lastName,
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

      // @ts-ignore
      if (!res?.data) {
        toast.success("Signup successful! Please login.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        // @ts-ignore
        toast.error(res?.error?.data?.errorMessage);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
          <input type="text" id="first-name"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="First name" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
          <input type="text" id="last-name"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Last name" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
            email</label>
          <input type="email" id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="name@flowbite.com" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
            username</label>
          <input type="text" id="username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="username" required/>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your
            password</label>
          <input type="password" id="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="password" required/>
        </div>
        <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;