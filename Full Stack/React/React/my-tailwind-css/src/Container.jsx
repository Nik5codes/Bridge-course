import React from 'react'

const Container = ({name,price,features,xtra,flash}) => {
  return (
    <div >
      
      <div>
        <div >
        <div style={cardStyle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/960px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg" style={imgStyle} />
          <h2>{name}</h2>
          <p><strong>Price:</strong>Rs. {price}/-</p>
          <p><strong>UHD {features}</strong></p>
          <p>{xtra}zoom</p>
          <p>Mega {flash}Flash</p>
        </div>


      </div>
      </div>
    </div>
  )
}
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


export default Container
