import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Todo} />
      </div>
    </Router>
  );
}

export default App;
