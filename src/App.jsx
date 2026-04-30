import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

import { NavBar, Welcome , Dock } from '#components';
import { Terminal, Resume } from '#windows';

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
    </main>
  );
}

export default App;