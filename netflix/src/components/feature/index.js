import { Conatiner, SubTitle, Title } from "./styles/feature";

function Feature(props) {
  let { children, ...restProps } = props;
  return <Conatiner {...restProps}>{children}</Conatiner>;
}

Feature.Title = function FeatureTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle(props) {
  let { children, ...restProps } = props;
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
