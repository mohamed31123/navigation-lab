import { useState } from 'react';

function Auth() {
  const [estConnecte, setEstConnecte] = useState(false);

  const handleAuthChange = () => {
    setEstConnecte(!estConnecte);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '15px', 
      margin: '20px auto',
      maxWidth: '300px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '10px' }}>
        {estConnecte ? (
          <span style={{ color: 'green', fontWeight: 'bold' }}>✅ Statut: Connecté</span>
        ) : (
          <span style={{ color: 'red', fontWeight: 'bold' }}>❌ Statut: Déconnecté</span>
        )}
      </div>
      <button 
        onClick={handleAuthChange}
        style={{
          padding: '8px 16px',
          backgroundColor: estConnecte ? '#e74c3c' : '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {estConnecte ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

export default Auth;