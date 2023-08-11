import REACT from 'react';
import Notifications from './Notifications';
import Login from './Login';
import Footer from './Footer';
import Header from './Header'; 

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
