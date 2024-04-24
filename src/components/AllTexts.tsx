const AllTexts = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
      <h1 className="my-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-xl">
        All texts
      </h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Text
          </th>
          <th scope="col" className="px-6 py-3">
            Analyze
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-black">
            1
          </th>
          <td className="px-6 py-4">
            This is text
          </td>
          <td className="px-6 py-4">
            Link
          </td>
          <td className="px-6 py-4">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllTexts;