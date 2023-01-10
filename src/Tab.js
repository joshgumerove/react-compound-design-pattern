import React from "react";

const TabContext = React.createContext();

const Tab = ({ currentTab, onChange, children }) => {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

Tab.HeadsContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  return <div>{label}</div>;
};

Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

export default Tab;
