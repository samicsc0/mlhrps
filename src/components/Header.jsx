import { Paper } from "@mui/material";
import Text from "../components/Text";

const Header = () => {
  return (
    <Paper
      style={{
        backgroundColor: "rgb(255,255,255,0.3)",
        margin: "50px 0",
        padding: "10px 0",
      }}
    >
      <Text
        variant={"h2"}
        text={"Rock, Paper, Scissors"}
        textAlign={"center"}
      />
    </Paper>
  );
};

export default Header