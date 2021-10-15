import { InitializeApp } from "../../components/InitializeApp";
import { defaultLang } from "../../i18n";

const Excalidraw = (props) => {
  const {
    langCode = defaultLang.code,
  } = props;

  return <InitializeApp langCode={langCode}>

  </InitializeApp>
}

export default Excalidraw;

export { defaultLang, languages } from '../../i18n';
