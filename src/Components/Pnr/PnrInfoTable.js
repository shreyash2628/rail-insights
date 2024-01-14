import React from 'react'

const PnrInfoTable = ({ data }) => {
  return (
    <table className="border-collapse border border-slate-500 w-4/5 mt-8 mb-8">
      <thead>
        <tr>
          <th className="border border-slate-600 ">No</th>
          <th className="border border-slate-600 ">Passenger</th>
          <th className="border border-slate-600 ">Coach Number</th>
          <th className="border border-slate-600 ">Berth Number</th>
          <th className="border border-slate-600 ">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          data.passengerInfo.map((info, i) => (
            <tr>
              <td className="border border-slate-700 text-center">{i + 1}</td>
              <td className="border border-slate-700 text-center">Passenger {i + 1}</td>
              <td className="border border-slate-700 text-center">{info.currentCoach}</td>
              <td className="border border-slate-700 text-center">{info.currentBerthNo}</td>
              <td className="border border-slate-700 text-center">CNF/{info.currentCoach}/{info.currentBerthNo}</td>
            </tr>

          ))
        }
      </tbody>
    </table>
  )
}

export default PnrInfoTable
