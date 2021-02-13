import { Column, Container, Link, Row, Text, Title, Break } from "./styles/footer";

function Footer(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow(props) {
  let { children, ...restProps } = props;
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn(props) {
  let { children, ...restProps } = props;
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink(props) {
  let { children, ...restProps } = props;
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText(props) {
  let { children, ...restProps } = props;
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak(props) {
  let { children, ...restProps } = props;
  return <Break {...restProps}>{children}</Break>;
};

export default Footer;
