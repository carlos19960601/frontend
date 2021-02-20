import {
  Base,
  Container,
  Error,
  Input,
  Link,
  Submit,
  Text,
  TextSmall,
  Title,
} from "./styles/form";

function Form(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase(props) {
  let { children, ...restProps } = props;
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FormError(props) {
  let { children, ...restProps } = props;
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText(props) {
  let { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall(props) {
  let { children, ...restProps } = props;
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink(props) {
  let { children, ...restProps } = props;
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput(props) {
  let { children, ...restProps } = props;
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit(props) {
  let { children, ...restProps } = props;
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
