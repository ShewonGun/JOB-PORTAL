import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center">Applicants</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b">{job.title}</td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full font-semibold text-sm">
                    {job.applicants}
                  </span>
                </td>

                <td className="py-2 px-4 border-b">
                  <input className="scale-125 ml-4" type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="w-28 py-2 mt-4 bg-gradient-to-r from-black via-gray-800 to-black text-white rounded transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 font-semibold"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
