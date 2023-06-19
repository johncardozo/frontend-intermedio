import { useContext } from "react";
import TabContext from "../context/TabContext";

// eslint-disable-next-line react/prop-types
const Tab = ({ id, children }) => {
  const [activeTabId, setActiveTabId] = useContext(TabContext);
  return (
    <div
      className={`tab ${activeTabId === id ? "tab__active" : ""}`}
      onClick={() => setActiveTabId(id)}
    >
      {children}
    </div>
  );
};

export default Tab;
