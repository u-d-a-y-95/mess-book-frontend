import {
  PlusIcon,
  EyeIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";

const Users = () => {
  return (
    <div>
      <div className="flex justify-between my-2">
        <div>
          <h1 className="text-2xl text-sky-500 font-bold tracking-wide">
            Users
          </h1>
        </div>
        <div>
          <button className="text-white bg-sky-500 px-2 py-1 rounded flex justify-center items-center">
            <PlusIcon className="h-5" />
            <span className="ml-1 capitalize">Add</span>
          </button>
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="border text-sm py-2 px-2 bg-gray-200 text-gray-600">
                SL
              </th>
              <th className="border text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Name
              </th>
              <th className="border text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Mail
              </th>
              <th className="border text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Mobile
              </th>
              <th className="border text-sm py-1 px-2 bg-gray-200 text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border text-sm py-2 px-2 text-gray-600">SL</td>
              <td className="border text-sm py-1 px-2 text-gray-600">
                Saiful Islam UDay
              </td>
              <td className="border text-sm py-1 px-2 text-gray-600">Mail</td>
              <td className="border text-sm py-1 px-2 text-gray-600">Mobile</td>
              <td className="border text-sm py-1 px-2 text-gray-600 w-[200px]">
                <span>
                  <span className="relative inline-block group">
                    <button className="bg-gray-200 p-2 rounded hover:bg-gray-500 hover:text-white active:bg-gray-800 transition duration-300 ease-in flex">
                      <EyeIcon className="h-5" /> <span className="ml-2 font-bold">view</span>
                    </button>
                    <span
                      className="whitespace-nowrap text-sm py-2 absolute left-2/4 -translate-x-2/4 p-2 px-4 bottom-full bg-gray-400 rounded text-white mb-3
                    before:text-gray-400 before:absolute before:content-['▼'] before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:text-3xl invisible group-hover:visible transition-all duration-200 ease-in z-10 "
                    >
                     view
                    </span>
                  </span>

                  <button className="mx-3 bg-gray-200 p-2 rounded hover:bg-gray-500 hover:text-white active:bg-gray-800">
                    <PencilAltIcon className="h-5" />
                  </button>
                  <button className="bg-gray-200 p-2 rounded">
                    <TrashIcon className="h-5" />
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
