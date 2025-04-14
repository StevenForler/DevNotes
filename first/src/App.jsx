import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'


function App() {

  return(
  //only capable of returning one function unless you surround the programs within a fragment 
  // which are just this:<></>
    <>
    <Header/>
    <Food/>
    <Footer/>
    </>
  );

}

export default App
