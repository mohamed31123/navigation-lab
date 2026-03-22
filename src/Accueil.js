import TachesList from './TachesList';
import Brand from './Brand';
import AudioPlayer from './AudioPlayer';

function Accueil() {
  return (
    <div>
      <h2>Bienvenue sur le tableau de bord</h2>
      <Brand />
      <AudioPlayer />
      <TachesList />
    </div>
  );
}

export default Accueil;