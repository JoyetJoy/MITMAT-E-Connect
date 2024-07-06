import React, { useState } from 'react';

function CertificateVerification() {
  const [tables, setTables] = useState([{
    position: '',
    file: null,
    verified: false
  }]);

  const handleAddTable = () => {
    setTables([...tables, { position: '', file: null, verified: false }]);
  };

  const handleInputChange = (index, event) => {
    const newTables = [...tables];
    newTables[index][event.target.name] = event.target.name === 'file' ? event.target.files[0] : event.target.value;
    setTables(newTables);
  };

  const handleVerificationChange = (index) => {
    const newTables = [...tables];
    newTables[index].verified = !newTables[index].verified;
    setTables(newTables);
  };

  const handleSubmit = (index) => {
    // Add submission logic here
    console.log(`Table ${index + 1} submitted:`, tables[index]);
  };

  return (
    <div>
      <button
        onClick={handleAddTable}
        style={{ float: 'right', marginBottom: '20px' }}
      >
        Add Certificate
      </button>
      {tables.map((table, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                <th>Position</th>
                <th>Input File</th>
                <th>Verified</th>
                <th>Submit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="position"
                    value={table.position}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={table.verified}
                    onChange={() => handleVerificationChange(index)}
                  />
                </td>
                <td>
                  <button onClick={() => handleSubmit(index)}>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default CertificateVerification;
