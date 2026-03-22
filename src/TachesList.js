function TachesList() {
  const elements = [
    { identifiant: 1, description: "Maîtriser les bases de React" },
    { identifiant: 2, description: "Développer une application complète" },
    { identifiant: 3, description: "Effectuer les tests unitaires" },
    { identifiant: 4, description: "Déployer en production" }
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h3>📋 Liste des objectifs</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {elements.map((item) => (
          <li 
            key={item.identifiant} 
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#ecf0f1',
              borderRadius: '5px',
              borderLeft: `4px solid ${item.identifiant % 2 === 0 ? '#3498db' : '#e74c3c'}`
            }}
          >
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TachesList;