import React, { createContext, useContext } from "react";
import "./Tab.css";

const TabContext = createContext();

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
  const { currentTab, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      className={`item ${currentTab === index ? "active" : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className="contentContainer">{children}</div>;
};

Tab.ContentItem = ({ index, children }) => {
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <div>{children}</div> : null;
};

export default Tab;

// should become equal when the index and the current tab are equal
