import React from 'react'

const Table = (props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {props.children}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.rows}
        </tbody>
      </table>
    </div>
  )
}

export default Table
