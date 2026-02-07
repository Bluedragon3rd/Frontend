interface LoadingSpinnerProps {
  size?: number; // px
  className?: string;
}

const LoadingSpinner = ({ size = 64, className = "" }: LoadingSpinnerProps) => {
  return (
    <div
      className={`animate-[spin_2s_linear_infinite] rounded-full border-[6px] border-violet-200 border-t-violet-500 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Loading"
      role="status"
    />
  );
};

export default LoadingSpinner;
