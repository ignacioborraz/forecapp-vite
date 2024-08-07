import Box from "./Box";
import LinkButton from "./LinkButton";

export default function NotFound() {
  return (
    <Box title="Not Found" relative={false}>
      <LinkButton text="go back!!" to="/" wClass="w-[340px]" />
    </Box>
  );
}
