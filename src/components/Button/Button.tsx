import { ButtonProps } from "./type";

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-gray-600 px-8 py-2 rounded-full text-white font-bold hover:bg-gray-500">{children}</button>;
};
