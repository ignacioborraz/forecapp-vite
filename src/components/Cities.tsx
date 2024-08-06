import City from "../interfaces/city";
import Button from "./Button";
import LinkButton from "./LinkButton";

type Props = {
  cities: City[];
};

export default function Cities(props: Props) {
  return (
    <span className="flex flex-col w-full">
      {props.cities.length > 0 &&
        props.cities.map((each, index) => (
          <LinkButton
            to={`/${each.name}/${each.lat}/${each.lon}`}
            text={each.name + " - " + each.country}
            wClass="w-full"
            key={index}
          />
        ))}
      {!props.cities[1] && <Button wClass="w-full" text="..." />}
      {!props.cities[2] && <Button wClass="w-full" text="No more matches!" />}
    </span>
  );
}
