import React from 'react';

const Logo = () => {
  return (
    <div style={styles.container}>
      <span style={styles.letterM}>M</span>
      <span style={styles.letterG}>G</span>
      <span style={styles.letterE}>E</span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2ecc71', // Green color
  },
  letterM: {
    color: '#2ecc71', // Green color
  },
  letterG: {
    color: '#3498db', // Blue color
  },
  letterE: {
    color: '#3498db', // Blue color
  }
};

export default Logo;
