import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import { NavBar, Welcome , Dock, Home } from '#components';
import { Terminal, Resume, Finder, Text, Image, Contact } from '#windows';

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  );
}

export default App;