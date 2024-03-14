import ButtonComponent from "./ButtonComponent";

const SelectHandGesture = ({ userSelection }) => {
  return (
    <div>
      <ButtonComponent
        buttonText={"🤘"}
        buttonType="outlinded"
        color="primary"
        buttonAction={() => {
          userSelection("rock");
        }}
      />
      <ButtonComponent
        buttonText={"✋"}
        buttonType="outlinded"
        buttonAction={() => {
          userSelection("paper");
        }}
      />
      <ButtonComponent
        buttonText={"✌️"}
        buttonType="outlinded"
        buttonAction={() => {
          userSelection("scissor");
        }}
      />
    </div>
  );
};
export default SelectHandGesture;
