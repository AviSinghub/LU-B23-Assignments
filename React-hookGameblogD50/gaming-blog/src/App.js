
import Navbar from './Navbar';
import Homepage from './Homepage';

function App() {
  // const blogTitle = "Premium Games  "
  // const subscriber = 1000;
  // const blogLikes = 190;
  // const blogLink = "https://mui.com/";

  // const author = {nameAuth: "Singh", age: 27, blogsCreated: 57}
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <div className="content">
        <h1>App component</h1>
      </div>
    </div>
  );
}

export default App;
