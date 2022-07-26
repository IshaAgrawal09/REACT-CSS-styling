import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="content">
          <h1>Get Statrted with Apptio Today</h1>
          <p>
            Talk to an Apptio expert about your specific needs and see a live
            product demonstration. Discuss current challenges and find the right
            application for your use case.
          </p>
        </div>
        <div className="form">
          <div className="divide">
            <input type="text" id="name" placeholder="First Name" />
            <input type="text" id="name" placeholder="Last Name" />
          </div>
          <div className="divide">
            <input type="text" id="email" placeholder="Work Email" />
            <input type="text" id="phone" placeholder="Phone" />
          </div>
          <div className="divide">
            <input type="text" id="company" placeholder="Company" />
            <input type="number" id="job" placeholder="Job Function" />
          </div>
          <div className="full">
            <input type="number" id="country" placeholder="Country" />
          </div>
          <div className="full help">
            <input type="text" placeholder="How can We Help?" />
          </div>
         
            <button>Get Started</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
