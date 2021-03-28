import LogoImage from "./image";
import { Section } from "./style";
import LogoTitle from "./title";

function Logo(props) {
  let { image, title } = props;
  return (
    <Section>
      <LogoImage {...image} />
      <LogoTitle {...title} />
    </Section>
  );
}

export default Logo;
