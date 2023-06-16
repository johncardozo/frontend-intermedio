import { useState } from "react";
import TabContext from "../context/TabContext";

// eslint-disable-next-line react/prop-types
const TabSwitcher = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState("1");
  return (
    <TabContext.Provider value={[activeTabId, setActiveTabId]}>
      {children}
    </TabContext.Provider>
  );
};

export default TabSwitcher;
