import logo from './logo.png';

function Brand() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img 
        src={logo} 
        alt="Logo officiel" 
        width="120" 
        style={{ 
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <p style={{ marginTop: '10px', color: '#7f8c8d' }}>Application Éducative</p>
    </div>
  );
}

export default Brand;