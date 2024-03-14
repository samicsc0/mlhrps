import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Text from "../components/Text";
import Image from "../components/Image";
import ButtonComponent from "../components/ButtonComponent";
import { Container, Grid, CircularProgress } from "@mui/material";

// Import images for display
import paper from "../assets/contract.png";
import scissors from "../assets/scissors.png";
import rock from "../assets/stone.png";
import SelectHandGesture from "../components/SelectHandGesture";

const Playing = () => {
  const [computerScore, setComputerScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [playAgain, setPlayAgain] = useState(false);
  const [firstRender, setFirstRender] = useState(true)
  useEffect(()=>{
    if(!firstRender){
      judgingFunction()
    }
    setFirstRender(false)
  },[userSelection, computerSelection])

  // Random choice for the computer
  const ComputerRandomGestures = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        setComputerSelection(rock);
        break;
      case 1:
        setComputerSelection(paper);
        break;
      case 2:
        setComputerSelection(scissors);
        break;
    }
  };
  // Selection for the user/player
  const playerSelection = (selection) => {
    switch (selection) {
      case "rock":
        setUserSelection(rock);
        break;
      case "paper":
        setUserSelection(paper);
        break;
      case "scissor":
        setUserSelection(scissors);
        break;
    }
    ComputerRandomGestures();
  };
  // function to decide the winner
  const judgingFunction = () => {
    if (userSelection === computerSelection) {
      console.log('draw')
      setPlayAgain(true)
    } else if (
      (userSelection === rock && computerSelection === scissors) ||
      (userSelection === paper && computerSelection === rock) ||
      (userSelection === scissors && computerSelection === paper)
    ) {
      setUserScore(userScore + 1)
      console.log("You win!");
      setPlayAgain(true)
    } else {
      setComputerScore(computerScore + 1)
      console.log("You lose!");
      setPlayAgain(true)
    }
  };
  // playing again
  const PlayagainHandler = ()=>{
    setComputerSelection(null)
    setUserSelection(null)
    setPlayAgain(false)
  }
  return (
    <>
      <Container>
        <Header />
        <Grid container>
          <Grid item md={6} xs={6}>
            <div>
              <Text
                text={`Computer: ${computerScore}`}
                variant={"h6"}
                gutterBottom={true}
              />
              {computerSelection ? (
                <Image src={computerSelection} />
              ) : (
                <CircularProgress />
              )}
            </div>
          </Grid>
          <Grid item md={6} xs={6}>
            <div>
              <Text
                text={`You: ${userScore}`}
                variant={"h6"}
                gutterBottom={true}
              />
              {userSelection ? (
                <Image src={userSelection} />
              ) : (
                <SelectHandGesture userSelection={playerSelection} />
              )}
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          {playAgain && <ButtonComponent buttonText={"Play Again"} buttonAction={PlayagainHandler}/>}
        </div>
      </Container>
    </>
  );
};

export default Playing;
