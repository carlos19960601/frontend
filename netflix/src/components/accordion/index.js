import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function Accordion(props) {
  let { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

Accordion.Title = function AccordionTitle(props) {
  let { children, ...restProps } = props;
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame(props) {
  let { children, ...restProps } = props;
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem(props) {
  const { toggleShow, setToggleShow } = useState(false);
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
    </Header>
  );
};

Accordion.Body = function AccordionBody(props) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  let { children, ...restProps } = props;
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
