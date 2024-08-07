type Props = {
  onClick?: () => void;
  text: string;
  wClass: string;
  relative?: boolean;
};

export default function Button({ onClick, text, wClass, relative }: Props) {
  const relativeClass = relative && "relative z-10";

  return (
    <span
      className={`${relativeClass} flex flex-col justify-center items-center p-2 my-1 bg-white ${wClass} h-[40px] rounded cursor-pointer text-slate-950 hover:bg-slate-100`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}
