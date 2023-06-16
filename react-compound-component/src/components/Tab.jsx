import { useContext } from "react";
import TabContext from "../context/TabContext";

// eslint-disable-next-line react/prop-types
const Tab = ({ id, children }) => {
  const [, setActiveTabId] = useContext(TabContext);
  return <div onClick={() => setActiveTabId(id)}>{children}</div>;
};

export default Tab;
