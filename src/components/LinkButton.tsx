import { Link } from "react-router-dom";

type Props = {
  text: string;
  to: string;
  wClass: string
};

export default function LinkButton({ text, to, wClass }: Props) {
  return (
    <Link
      className={`flex flex-col justify-center items-center p-2 my-1 bg-white ${wClass} h-[40px] rounded cursor-pointer text-slate-950 hover:bg-slate-100`}
      to={to}
    >
      {text}
    </Link>
  );
}
