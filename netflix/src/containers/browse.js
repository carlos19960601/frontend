import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";

export function BrowseConatiner(props) {
  let { slides } = props;

  const [profiles, setProfiles] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profiles.displayName]);

  return <SelectProfileContainer user={user} setProfiles={setProfiles} />;
}
