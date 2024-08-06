import { useNavigate } from "react-router-dom";
import { resetData } from "../store/actions";
import { useDispatch } from "react-redux";
import LinkButton from "./LinkButton";
import Button from "./Button";

export default function Buttons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
    dispatch(resetData());
  };
  return (
    <span className="w-[340px] flex justify-between items-center">
      <Button onClick={goBack} text="search another!" wClass="w-[160px]" relative={false} />
      <LinkButton text="latest ones!" to="/latest" wClass="w-[160px]" />
    </span>
  );
}
