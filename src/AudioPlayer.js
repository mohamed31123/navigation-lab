import son from './audio.mp3';

function AudioPlayer() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3>🎵 Lecteur Multimédia</h3>
      <audio controls src={son} style={{ width: '300px' }}>
        Votre navigateur ne supporte pas la lecture audio.
      </audio>
    </div>
  );
}

export default AudioPlayer;