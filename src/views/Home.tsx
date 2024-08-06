import Input from "../components/Input";
import Box from "../components/Box";
import CitiesTable from "../components/CitiesTable";
import LinkButton from "../components/LinkButton";

export default function Home() {
  return (
    <Box title="ForecApp" relative={false}>
      <Input />
      <CitiesTable />
      <LinkButton text="latest ones!" to="/latest" wClass="w-[340px]" />
    </Box>
  );
}
