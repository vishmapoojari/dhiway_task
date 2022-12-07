import logo from './logo.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Container}from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const pageData={ReportData:[]};

function App() {
  const [pageState, updatePageState]=useState(pageData);
  useEffect(() => {
   axios.get("https://reqres.in/api/users/")
    .then(res => {
      updatePageState(() => ({ ...pageState, ReportData: res.data.data }))
      console.log("result data",res)
    })


  }, []);

const {ReportData}=pageState;
const columns = [ {
    dataField: 'id',
    text: 'ID'
  },
  {
      dataField: 'first_name',
      text: 'Name'
    },
    {
        dataField: 'email',
        text: 'Email ID'
      },
      {
          dataField: 'last_name',
          text: 'Lastname'
        },
        {
            dataField: 'avatar',
            text: 'Avatar',
          formatter: (cell, row) => <a  target="_blank" href={cell}> {cell} </a>
          }];
  return (
    <div className="App">
      <Container>
       <BootstrapTable keyField='id' data={ ReportData } columns={ columns } striped={false}  />
      </Container>
       
    </div>
  );
}

export default App;
