import { Container, Paper } from "@mui/material";
import Text from "../components/Text";
import ButtonComponent from "../components/ButtonComponent";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToPlayingScreen = () => {
    navigate('/play');
  };
  return (
    <Container>
      <Header />
      <Paper style={{ padding: "20px" }}>
        <Text
          text={"How to play the game"}
          color="black"
          textAlign={"center"}
          variant={"h4"}
        />
        <ol type="1">
          <li>
            <Text
              variant={"body1"}
              text={"Click the start game button"}
              color="black"
            />
          </li>
          <li>
            <Text variant={"body1"} text={"Select one emoji from the playing section"} color="black" />
          </li>
        </ol>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonComponent
            buttonText={"Play Now"}
            buttonAction={goToPlayingScreen}
          />
        </div>
      </Paper>
    </Container>
  );
};
export default Home;
