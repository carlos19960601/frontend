import {
  Container,
  Image,
  Inner,
  Item,
  Pane,
  SubTitle,
  Title,
} from "./styles/jumbotron";

function Jumbotron(props) {
  let { children, direction = "row", ...restProps } = props;
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane(props) {
  let { children, ...restProps } = props;
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle(props) {
  let { children, ...restProps } = props;
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage(props) {
  let { ...restProps } = props;
  return <Image {...restProps} />;
};

export default Jumbotron;
