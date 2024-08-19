import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const ReviewButton = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={`capitalize border-effectSecondary opacity-90 hover:opacity-100 border-b-2 hover:border-primary transition-all duration-500 absolute h-fit end-0 bottom-0 w-fit px-8 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
};
