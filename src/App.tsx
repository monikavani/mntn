import './App.css'
import { Section } from './components/Section/Section';
import { Tagline } from './components/Tagline/Tagline';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  // If there are multiple pages, a 'pages' directory can be build
  return (
    <div className="app">
      {/* Header section */}
      <Header />

      {/* main section */}
      <div className="mainSection">
        {/* heading */}
        <div className="mainSectionContent">
          <Tagline title={"A Hiking guide"}/>
          <h1 className="mainHeading">Be prepared for the Mountains and beyond!</h1>
          {/* scroll down link to content*/}
          <a href="#section1" className="linkTo">
            <div>scroll down</div>
            <div className="iconScroll">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
        </div>

        {/* navigation */}
        <ul className="navigationList">
            <li>
              <a href="#">start</a>
            </li>
            <li>
              <a href="#section1">01</a>
            </li>
            <li>
              <a href="#section2">02</a>
            </li>
            <li>
              <a href="#section3">03</a>
            </li>
          </ul>
        {/* Images */}
        <img className="mainSectionImg1" src="src/images/clouds.png"/>
        <img className="mainSectionImg2" src="src/images/mountains.png"/>
        <img className="mainSectionImg3" src="src/images/valley.png"/>

        {/* Gredient */}
        <div className="mainSectionGredient"></div>
      </div>

      {/* content */}
      <div id="content" className="contentWrap">
        {/* section 1 */}
        <div id="section1">
          <Section  index={1}
                    tagTitle={"Get Started"}
                    headTitle= {"What level of  hiker are you?"}
                    paragraph={"Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "}
                    image={"src/images/image01.jpg"}
          />
        </div>
        {/* section 2 */}
        <div id="section2">
          <Section  index={2}
                    tagTitle={"Hiking Essentials"}
                    headTitle= {"Picking the right Hiking Gear!"}
                    paragraph={"The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."}
                    image={"src/images/image02.jpg"}
                    isLeft
          />
        </div>
        {/* section 3 */}
        <div id="section3">
          <Section  index={3}
                    tagTitle={"where you go is the key"}
                    headTitle= {"Understand Your Map & Timing"}
                    paragraph={"To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."}
                    image={"src/images/image03.jpg"}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
