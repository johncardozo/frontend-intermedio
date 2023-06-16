import TabSwitcher from "./TabSwitcher";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const TabContainer = () => {
  return (
    <TabSwitcher>
      <Tab id="1">
        <span>Tab 1</span>
      </Tab>
      <Tab id="2">
        <span>Tab 2</span>
      </Tab>
      <Tab id="3">
        <span>Tab 3</span>
      </Tab>
      <TabPanel whenActive="1">
        <h3>Contenido 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </TabPanel>
      <TabPanel whenActive="2">Contenido 2</TabPanel>
      <TabPanel whenActive="3">Contenido 3</TabPanel>
    </TabSwitcher>
  );
};

export default TabContainer;
