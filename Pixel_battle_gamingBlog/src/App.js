import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Category from "./Category";

function App() {
  return ( 
    <div className="App">
      <Navbar/>
      <Category/>
      <Homepage/>
      <div className="content">
        <h3> <button className="btn">Post your Groups here</button></h3>
      </div>
    </div>
   );
}

export default App;
