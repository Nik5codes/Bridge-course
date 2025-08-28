import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#8ac9ffff' }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>My Favourite People</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <div style={cardStyle}>
          <img src="https://randomuser.me/api/portraits/men/11.jpg" style={imgStyle} />
          <h2>Aarav</h2>
          <p><strong>Relation:</strong> Best Friend</p>
          <p><strong>Hobbies:</strong></p>
          <p>Gaming</p>
          <p>Coding</p>
        </div>

        <div style={cardStyle}>
          <img src="https://randomuser.me/api/portraits/women/21.jpg" style={imgStyle} />
          <h2>Priya</h2>
          <p><strong>Relation:</strong> friend</p>
          <p><strong>Hobbies:</strong></p>
          <p>Reading</p>
          <p>Music</p>
        </div>

        <div style={cardStyle}>
          <img src="https://randomuser.me/api/portraits/women/30.jpg" style={imgStyle} />
          <h2>Anjali</h2>
          <p><strong>Relation:</strong> friend</p>
          <p><strong>Hobbies:</strong></p>
          <p>Dancing</p>
          <p>Cooking</p>
        </div>

        <div style={cardStyle}>
          <img src="https://randomuser.me/api/portraits/men/40.jpg" style={imgStyle} />
          <h2>Ravi</h2>
          <p><strong>Relation:</strong> friend</p>
          <p><strong>Hobbies:</strong></p>
          <p>Photography</p>
          <p>Cycling</p>
        </div>

        <div style={cardStyle}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" style={imgStyle} />
          <h2>Meena</h2>
          <p><strong>Relation:</strong> friend</p>
          <p><strong>Hobbies:</strong></p>
          <p>Yoga</p>
          <p>Gardening</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  border: '5px solid #000',
  borderRadius: '2px',
  padding: '1rem',
  width: '232px',
  backgroundColor: '#ffe589ff',
  color: '#000',
  textAlign: 'center'
};

const imgStyle = {

  width: '90%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '6px',
  marginBottom: '1rem'
};

export default App;
