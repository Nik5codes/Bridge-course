import React from 'react'

const Card = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#000000ff' }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Product card</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <div style={cardStyle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/960px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg" style={imgStyle} />
          <h2>Camera</h2>
          <p><strong>Price:</strong>Rs. 4599/-</p>
          <p><strong>UHD 5cm 1:35</strong></p>
          <p>22x zoom</p>
          <p>Mega Flash</p>
        </div>

      </div>
    </div>
  );
};

const cardStyle = {
  border: '5px solid #000',
  borderRadius: '2px',
  padding: '1rem',
  width: '300px',
  backgroundColor: '#9affffff',
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

    
export default Card
