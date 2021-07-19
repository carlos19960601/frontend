import {
  Chip,
  Container,
  Content,
  TOP,
  Type,
  TypeWrapper,
  Wrapper,
} from "./styles/card";

function Card() {
  return (
    <Container>
      <Wrapper>
        <TOP>
          <Chip src="/chip.png" />
          <TypeWrapper>
            <Type src="/card-type/visa.png" />
          </TypeWrapper>
        </TOP>
        <Content></Content>
      </Wrapper>
    </Container>
  );
}

export default Card;
