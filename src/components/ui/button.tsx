import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

export function Button({ children, variant = "default", className = "", ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyles = {
    default: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200",
    outline: "border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  }

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
} 