import ListeTaches from './ListeTaches';

import Logo from './logo';
import LecteurAudio from './LecteurAudio';

function Accueil() {
  return (
    <div>
      <h2>Page d’accueil</h2>
      <Logo />
      <LecteurAudio />
      <ListeTaches />
    </div>
  );
}

export default Accueil;