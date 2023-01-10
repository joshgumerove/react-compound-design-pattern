import "./App.css";
import Tab from "./Tab";

function App() {
  return (
    <div className="App">
      <h1>Compound Pattern Design</h1>
      <Tab>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={0} />
          <Tab.Item label="Tab2" index={1} />
          <Tab.Item label="Tab3" index={2} />
        </Tab.HeadsContainer>
      </Tab>
      {/* text is still considered a child */}
    </div>
  );
}

export default App;
