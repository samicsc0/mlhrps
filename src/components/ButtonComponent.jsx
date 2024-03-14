import { Button } from "@mui/material";

const ButtonComponent = ({
  buttonText,
  buttonType = "contained",
  buttonAction,
  color = 'success'
}) => {
  return (
    <Button variant={buttonType} color={color} onClick={buttonAction}>
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
