import React from "react";
import "./Tab.css";

const TabContext = React.createContext();

const Tab = ({ currentTab, onChange, children }) => {
  return (
    <div className="tab">
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

Tab.HeadsContainer = ({ children }) => {
  return <div className="headsContainer">{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  return <div className="item">{label}</div>;
};

Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.ContentItem = ({ index, children }) => {
  return <div>{children}</div>;
};

export default Tab;
