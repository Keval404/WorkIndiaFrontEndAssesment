import React, { useState, useEffect } from 'react';
import './MyCss.css'; // Import the CSS file for styling

const MyComponent = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
      .then(response => response.json())
      .then(data => {
        setCandidates(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const appliedCandidates = candidates.filter(candidate => candidate.status === 'Applied');
  const rejectedCandidates = candidates.filter(candidate => candidate.status === 'Rejected');
  const acceptedCandidates = candidates.filter(candidate => candidate.status === 'Accepted');

  return (
    <div className="container">
      <div className="section">
        <h2 className='title'>Applied</h2>
        {appliedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.last_updated_at}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.location}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.gender}
            </p>
          </div>
        ))}
      </div>
        
      <div className="section">
        <h2 className='title'>Accepted</h2>
        {acceptedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.last_updated_at}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.location}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.gender}
            </p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className='title'>Rejected</h2>
        {rejectedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.last_updated_at}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.location}
            </p>
            <p className='innerText'>
              <img src="https://via.placeholder.com/18x18" alt="Location Icon" />
              {candidate.gender}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default MyComponent;
