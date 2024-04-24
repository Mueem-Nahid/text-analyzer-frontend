import {TrashIcon} from '@heroicons/react/24/outline'
import {useDeleteTextMutation} from "../redux/features/analyzer/analyzerApi.ts";

type IProps = {
  data: {
    _id: string,
    text: string,
  }[]
}

const AllTexts = ({data}: IProps) => {
  const [deleteText] = useDeleteTextMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteText(id);
    } catch (error) {
      console.log("Failed to delete:", error);
    }
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
      {
        data?.length && data?.length > 0 ?
          <>
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
              {
                data.map((item, index) => (
                  <tr
                    key={item._id}
                    className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-black">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {item.text.substring(0, 30)}...
                    </td>
                    <td className="px-6 py-4">
                      <a href={`/analyze/${item._id}`}>Analyze</a>
                    </td>
                    <td className="px-6 py-4">
                      <button type="button" onClick={() => handleDelete(item._id)}>
                        <TrashIcon className="h-6 w-6 text-red-600" aria-hidden="true"/>
                      </button>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </> :
          <h1 className="my-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-xl">
            No texts available.
          </h1>
      }

    </div>
  );
};

export default AllTexts;