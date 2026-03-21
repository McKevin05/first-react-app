import React from 'react'

const Input = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full mb-5">
      
      {label && (
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-xl
          border bg-white
          text-gray-700 placeholder-gray-400
          shadow-sm
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        `}
      />
    </div>
  )
}

export default Input