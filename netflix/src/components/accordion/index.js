import { createContext, useContext, useState } from "react";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordion";

const ToggleContext = createContext();

function Accordion(props) {
  let { children, ...restProps } = props;
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem(props) {
  const [toggleShow, setToggleShow] = useState(false);
  let { children, ...restProps } = props;
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader(props) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  let { children, ...restProps } = props;
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody(props) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  let { children, ...restProps } = props;
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
