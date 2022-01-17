import "./styles.css";
import "./StatefulComponent";
import "./StateLessComponent";
import StateLessComponent from "./StateLessComponent";

// import StatefulComponent from "./StatefulComponent";

export default function App() {
  return (
    <div className="App">
      <StateLessComponent />
      {/* <StatefulComponent /> */}
    </div>
  );
}
