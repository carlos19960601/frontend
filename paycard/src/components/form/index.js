import {
  ColConatiner,
  Container,
  GroupContainer,
  Inner,
  Input,
  InputConatiner,
  Label,
  RowConatiner,
  Select,
  CardWrapper,
} from "./styles/form";

function Form(props) {
  let { children, ...restProps } = props;
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Form.InputConatiner = function FormInputConatiner(props) {
  let { children, ...restProps } = props;
  return <InputConatiner>{children}</InputConatiner>;
};

Form.RowContainer = function FormRowContainer(props) {
  let { children, ...restProps } = props;
  return <RowConatiner>{children}</RowConatiner>;
};

Form.ColContainer = function FormColContainer(props) {
  let { children, ...restProps } = props;
  return <ColConatiner>{children}</ColConatiner>;
};

Form.Label = function FormLabel(props) {
  let { children } = props;
  return <Label>{children}</Label>;
};

Form.Input = function FormInput(props) {
  return <Input {...props}></Input>;
};

Form.Select = function FormSelect(props) {
  let { children, restProps } = props;
  return <Select {...restProps}>{children}</Select>;
};

Form.GroupContainer = function FormGroupContainer(props) {
  let { children, restProps } = props;
  return <GroupContainer {...restProps}>{children}</GroupContainer>;
};

Form.CardWrapper = function FormCardWrapper(props) {
  let { children, restProps } = props;
  return <CardWrapper {...restProps}>{children}</CardWrapper>;
};

export default Form;
