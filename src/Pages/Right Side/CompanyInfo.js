import React, { useState, useEffect } from 'react';

function CompanyInfo({ companyName }) {
  const [companyScore, setCompanyScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (companyName) {
          const response = await fetch(`https://api.opencorporates.com/v0.4/companies/search?q=${companyName}`);
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const score = data.results[0].company.score;
            setCompanyScore(score);
          } else {
            setCompanyScore(null);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCompanyScore(null);
      }
    };

    fetchData(); // Call the function when the component mounts

    // Clean up function (optional)
    return () => {
      // You can perform cleanup operations here if needed
    };
  }, [companyName]); // Run the effect when companyName changes

  // Render null if companyName is null
  if (companyName === null) {
    return null;
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Company Information</h2>
      <p style={{ textAlign: 'center', fontSize: '16px', color: '#555' }}>Fetching data for {companyName}...</p>

      {companyScore !== null && (
        <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <p style={{ fontSize: '18px', margin: '0' }}>Company Score:</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{companyScore}</p>
        </div>
      )}
    </div>
  );
}

export default CompanyInfo;