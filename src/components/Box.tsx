import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Box({ title, children }: Props) {
  return (
    <span className="w-[360px] h-[420px] text-slate-800 bg-slate-200 flex flex-col justify-between items-center p-2 rounded mb-[50px]">
      <h2 className={`text-slate-800 font-dancing font-black text-center ${title.length>11 ? "text-[40px]": "text-[75px]"}`}>
        {title}
      </h2>
      {children}
    </span>
  );
}
