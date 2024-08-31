'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const menuItems = ['Home', 'New Search', 'Browse', 'Legal']

const generateDummyData = () => Array(20).fill(null).map((_, index) => ({
  jobId: `JOB${(index + 1).toString().padStart(3, '0')}`,
  location: ['New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'][index % 5],
  positionTitle: ['Junior Developer', 'Senior Developer', 'Product Manager', 'Engineering Manager'][index % 4],
  salary: `$${Math.floor(Math.random() * 150 + 50)}k`,
  remote: index % 2 === 0 ? 'Yes' : 'No',
  contract: index % 3 === 0 ? 'Yes' : 'No',
}))

const Dashboard = () => {
  const [dummyData, setDummyData] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  useEffect(() => {
    setDummyData(generateDummyData())
  }, [])

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100">
      <div className={`${isMenuOpen ? 'w-64' : 'w-16'} bg-white rounded-r-lg shadow-lg mt-5 ml-[20px] transition-all duration-300 ease-in-out relative`}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-2 left-2 z-10 p-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg className="w-6 h-6 text-accent3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="space-y-4 mt-12 p-6">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="block py-2 px-4 text-accent3 border-2 border-accent3 rounded-full text-center hover:bg-accent3 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 p-10 overflow-auto mt-5">
        <h5 className="text-primary text-lg font-poppins font-light mb-3">Current Open Positions</h5>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden font-poppins">
          <thead className="bg-[#ff3e4c] text-white">
            <tr>
              <th className="py-3 px-4 text-left font-bold">Job ID</th>
              <th className="py-3 px-4 text-left font-bold">Location</th>
              <th className="py-3 px-4 text-left font-bold">Position Title</th>
              <th className="py-3 px-4 text-left font-bold">Salary</th>
              <th className="py-3 px-4 text-left font-bold">Remote</th>
              <th className="py-3 px-4 text-left font-bold">Contract</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {dummyData.map((job, index) => (
              <tr key={job.jobId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 px-4">{job.jobId}</td>
                <td className="py-3 px-4">{job.location}</td>
                <td className="py-3 px-4">{job.positionTitle}</td>
                <td className="py-3 px-4">{job.salary}</td>
                <td className="py-3 px-4">{job.remote}</td>
                <td className="py-3 px-4">{job.contract}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard