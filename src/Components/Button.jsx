import React from 'react'

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = ""
}) => {

  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",

    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",

    outlineSuccess:
      "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500",

    outlineDanger:
      "border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading ? "Loading..." : label}
    </button>
  )
}

export default Button