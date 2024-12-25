"use client";
import { useState } from "react";
import { TableData } from "@/utilities/TableData";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredData, setFilteredData] = useState(TableData); // State for filtered table data

  // Handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Normalize input for case-insensitive search
    setSearchTerm(value);

    // Filter table data
    const filtered = TableData.filter((row) =>
      row.name.toLowerCase().includes(value) || // Search in `name`
      row.topic.toLowerCase().includes(value) || // Search in `topic`
      row.status.toLowerCase().includes(value) || // Search in `status`
      row.createdOn.toLowerCase().includes(value) // Search in `createdOn`
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col mt-[20px] shadow-md mx-2 h-[50svh]">
      {/* Search Input */}
      <input
        className="md:w-[30%] mb-4 border-[2px] outline-none border-blue-200 rounded text-[.8rem] p-2"
        placeholder="Search by name, topic, status, or date"
        value={searchTerm}
        onChange={handleSearch} // Update search state on input
      />

      {/* Table */}
      <div className="overflow-x-scroll md:overflow-x-auto p-4 text-[.7rem]">
        <table className="w-[1200px] table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Topic</th>
              <th className="p-2 text-left">Status reason</th>
              <th className="p-2 text-left">Created On</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="p-2 text-left text-blue-800">
                    <input type="checkbox" className="mr-2" />
                    {row.name}
                  </td>
                  <td className="p-2 text-left">{row.topic}</td>
                  <td className="p-2 text-left">{row.status}</td>
                  <td className="p-2 text-left">{row.createdOn}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 p-4"
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
