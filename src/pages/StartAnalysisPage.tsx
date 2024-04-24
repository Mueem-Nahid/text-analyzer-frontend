import {useState} from "react";

const StartAnalysisPage = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-xl">
        Write a few sentences to start analysis
      </h1>
      <div className="col-span-full my-3">
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
            <textarea
              id="text"
              name="text"
              onChange={(e) => setText(e.target.value)}
              rows={10}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={text}
            />
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartAnalysisPage;