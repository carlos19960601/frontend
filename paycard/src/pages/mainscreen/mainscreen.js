import { PaycardContainer } from "../../containers/paycard";
import { Container } from "./styles/mainscreen";

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: "FULL NAME",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
  isCardFlipped: false,
};

function MainScren() {
  return (
    <Container>
      <PaycardContainer />
    </Container>
  );
}

export default MainScren;
