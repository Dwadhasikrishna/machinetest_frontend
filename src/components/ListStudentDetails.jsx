import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListStudentDetails = () => {
  const navigate = useNavigate(); 

  const students = [
    { studentid: 'S001', mark: 85, subject: 'Math', grade: 'A', passed: true },
    { studentid: 'S002', mark: 50, subject: 'Science', grade: 'C', passed: false },
    { studentid: 'S003', mark: 92, subject: 'English', grade: 'A+', passed: true }
  ];

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%' }}>
        <h2 style={{ textAlign: 'center' }}>Student Details</h2>
        <button
          onClick={handleGoBack}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Go Back
        </button>
        <table style={{ width: '100%', border: '2px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid black' }}>
              <th style={{ padding: '8px', borderRight: '2px solid black' }}>Student ID</th>
              <th style={{ padding: '8px', borderRight: '2px solid black' }}>Mark</th>
              <th style={{ padding: '8px', borderRight: '2px solid black' }}>Subject</th>
              <th style={{ padding: '8px', borderRight: '2px solid black' }}>Grade</th>
              <th style={{ padding: '8px' }}>Passed</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} style={{ borderBottom: '2px solid black' }}>
                <td style={{ padding: '8px', borderRight: '2px solid black' }}>{student.studentid}</td>
                <td style={{ padding: '8px', borderRight: '2px solid black' }}>{student.mark}</td>
                <td style={{ padding: '8px', borderRight: '2px solid black' }}>{student.subject}</td>
                <td style={{ padding: '8px', borderRight: '2px solid black' }}>{student.grade}</td>
                <td style={{ padding: '8px' }}>{student.passed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudentDetails;
