import React from 'react'

const LoadingSpinner = ({ label = "Loading..." }) => {
  return (
    <div>
        <div className="flex items-center justify-center gap-3 py-10">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
            <span className="text-sm text-gray-600">{label}</span>
        </div>
    </div>
  )
}

export default LoadingSpinner
