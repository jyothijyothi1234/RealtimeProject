import './App.css';
import Header from './Heading/Header';
import About from './components/About us';
import ContactUs from './components/ContactUs';
import FeatureJobs from './components/FeatureJobs';
import JoinOurTeam from './components/Join our team';
import Subscribe from './components/SubscribeToKnow';
import TheTeam from './components/The Team';
import WebImages from './components/Web developImage';
import WhatText from './components/What we do';
import Cards from './components/cards';
import Image from './components/images';
import Fotter from './fotter/fotter';

function App() {
  return (
    <div className="App">
      <Header  />
      <Image />
      <Cards  />
      <About />
      <WhatText />
      <WebImages  />
      <JoinOurTeam />
      <ContactUs />
      <TheTeam />
      <FeatureJobs />
      <Subscribe />
     
      <Fotter />
    </div>
  );
}

export default App;
