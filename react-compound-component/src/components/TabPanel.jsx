import { useContext } from "react";
import TabContext from "../context/TabContext";

// eslint-disable-next-line react/prop-types
const TabPanel = ({ whenActive, children }) => {
  const [activeTabId] = useContext(TabContext);
  return (
    <div className={activeTabId === whenActive ? "tab-panel" : ""}>
      {activeTabId === whenActive ? children : null}
    </div>
  );
};

export default TabPanel;
