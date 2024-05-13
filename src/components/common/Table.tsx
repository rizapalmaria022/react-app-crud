import React from "react";

const Table = ({ data })  => {
    console.log(data);
    // const columns = useMemo(
    //     () => [
    //         { Header: "First Name", accessor: "id" },
    //       { Header: "First Name", accessor: "firstname" },
    //       { Header: "Last Name", accessor: "lastname" },
    //       { Header: "Email", accessor: "email" },
    //       { Header: "Role", accessor: "role" }
    //     ],
    //     []
    //   );
    
     
      return (
        <>
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white" >
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              First
            </th>
            <th scope="col" className="px-6 py-4">
              Last
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Role
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead> 
        <tbody>
                {data.map((a)=> 
                  <React.Fragment key={a.id}>    
                    <tr> 
                        <td>{a.firstname}</td>
                        <td>{a.lastname}</td>
                        <td>{a.email}</td>
                    </tr>  
                  </React.Fragment>     
               )}
          </tbody>
        {/* <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              First
            </th>
            <th scope="col" className="px-6 py-4">
              Last
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Role
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead> */}
        {/* <tbody>
          <tr className="border-b border-neutral-200 dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
              1
            </td>
            <td className="whitespace-nowrap px-6 py-4">Mark</td>
            <td className="whitespace-nowrap px-6 py-4">Otto</td>
            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            <td className="whitespace-nowrap px-6 py-4">Otto</td>
            <td className="whitespace-nowrap px-6 py-4">
            <button type="button" className="mx-0.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </td>
          </tr>
        </tbody> */}
      </table>
        </>
      )
};

export default Table;