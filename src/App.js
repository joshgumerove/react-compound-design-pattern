import React, { useState } from "react";
import "./App.css";
import Tab from "./Tab";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (newIndex) => {
    setCurrentTabIndex(newIndex);
  };
  return (
    <div className="App">
      <h1>Compound Pattern Design</h1>
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={0} />
          <Tab.Item label="Tab2" index={1} />
          <Tab.Item label="Tab3" index={2} />
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={0}>
            <h1>I am content first</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={1}>
            <h1>I am content second</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h1>I am content third</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
      {/* text is still considered a child */}
    </div>
  );
}

export default App;
