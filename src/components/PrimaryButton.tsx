import { ReactNode } from "react";

type PrimaryButtonType = {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className: string
};

export const PrimaryButton = ({
  children,
  className,
  type = "submit",
}: PrimaryButtonType) => {
  return (
    <>
      <button className={className} type={type}>{children}</button>
    </>
  );
};
