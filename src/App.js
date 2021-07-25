import React from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    width: '250px'
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
    width: '150px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',
    width: '120px'
  },
];

function App() {
  
  const conditionalRowStyles = [
    {
      when: row => row.email.includes('.org'),
      style: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    // You can also pass a callback to style for additional customization
    {
      when: row => row.email.includes('.com'),
      style: row => ({
        backgroundColor: row.phone.startsWith('9') || row.phone.startsWith('1') ? 'pink' : 'inerit',
      }),
    },
  ];

  return (
    <div className="App">
      <h3>Conditionally change the row style in React DataTable - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}

export default App;
