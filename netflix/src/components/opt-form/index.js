import { Button, Container, Input, Text } from "./styles/opt-form";

function OptForm(props) {
  let { children, ...restProps } = props;

  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput(props) {
  let { ...restProps } = props;
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton(props) {
  let { children, ...restProps } = props;
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText(props) {
  let { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak(props) {
  let { ...restProps } = props;
  return <Text {...restProps} />;
};

export default OptForm;
