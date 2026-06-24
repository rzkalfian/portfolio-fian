type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4
        py-2
        rounded-full
        font-regular
        text-sm
        md:text-base
        lg:text-md
        text-white
        bg-gradient-to-r
        from-[#005BFF]
        to-[#14C8A8]
        transition
        hover:opacity-90
        ${className}
      `}
    >
      {children}
    </button>
  );
}