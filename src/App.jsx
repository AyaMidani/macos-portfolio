import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import { NavBar, Welcome , Dock } from '#components';
import { Terminal, Resume, Finder } from '#windows';

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
    </main>
  );
}

export default App;