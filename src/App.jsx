import { Navbar, Welcome, Footer, Services, Transactions, Faucet } from "./components";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      <Faucet />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
