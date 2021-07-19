import { Card, Form } from "../components";

const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month < 10 ? "0" + month : month;
});

const currentYear = new Date().getFullYear();
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export function PaycardContainer() {
  return (
    <Form>
      <Form.CardWrapper>
        <Card />
      </Form.CardWrapper>
      <Form.InputConatiner>
        <Form.Label>Card Number</Form.Label>
        <Form.Input />
      </Form.InputConatiner>
      <Form.InputConatiner>
        <Form.Label>Card Holder</Form.Label>
        <Form.Input />
      </Form.InputConatiner>
      <Form.RowContainer>
        <Form.ColContainer>
          <Form.GroupContainer>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Select value="" name="cardMonth">
              <option value="" disabled>
                Month
              </option>
              {monthsArr.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </Form.Select>
            <Form.Select name="cardYear">
              <option value="" disabled>
                Year
              </option>
              {yearsArr.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </Form.Select>
          </Form.GroupContainer>
        </Form.ColContainer>
        <Form.ColContainer>
          <Form.Label>CVV</Form.Label>
          <Form.Input />
        </Form.ColContainer>
      </Form.RowContainer>
    </Form>
  );
}
