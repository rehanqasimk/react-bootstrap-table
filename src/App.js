import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import data from './data.json';
import './style.css';
import './table.scss';

function Table() {
  const columns = [
    {
      dataField: 'id',
      text: 'id',
    },
    {
      dataField: 'first_name',
      text: 'First Name',
    },
    {
      dataField: 'last_name',
      text: 'Last Name',
    },
    {
      dataField: 'email',
      text: 'email',
      style: {
        width: '25%',
      },
      freeze: true,
    },
    {
      dataField: 'gender',
      text: 'Gender',
    },
    {
      dataField: 'ip_address',
      text: 'IP Address',
      style: {
        width: '25%',
      },
    },
    {
      dataField: 'city',
      text: 'City',
    },
    {
      dataField: 'country',
      text: 'Country',
    },
    {
      dataField: 'department',
      text: 'Department',
    },
    {
      dataField: 'language',
      text: 'Language',
    },
    {
      dataField: 'company_name',
      text: 'Company Name',
      style: {
        width: '40%',
      },
    },
    {
      dataField: 'diagnosis',
      text: 'Diagnosis',
    },
  ];

  return (
    <BootstrapTable
      remote
      bootstrap4
      striped={false}
      bordered={false}
      className="table-framed my-table"
      keyField="id"
      data={data}
      columns={columns}
    />
  );
}

export default function App() {
  console.log(data[0]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Table />
    </div>
  );
}
