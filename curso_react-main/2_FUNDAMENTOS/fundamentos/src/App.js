import logo from "./logo.svg";
import "./App.css";

import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
      <Container></Container>
    </div>
  );
}

export default App;
