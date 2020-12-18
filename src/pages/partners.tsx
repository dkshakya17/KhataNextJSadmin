
import { List, ListItem } from '@paljs/ui/List';
import { Card, CardBody, CardHeader, CardFooter  } from '@paljs/ui/Card';
import User from '@paljs/ui/User';
import { ActionType } from '@paljs/ui/Actions';
import { Search } from '@paljs/ui/Search';
import styled from 'styled-components';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';
import React, { useState }  from 'react';
import Layout from 'Layouts';
const TableStyle = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-flex: 1 1 auto;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
overflow: auto;
width:100%;
.trasactions_table {
  width:100%;
}
.trasactions_table td,.trasactions_table th{
 padding:15px;
 border-bottom: 1px solid #ccc;
}
`;
const PartnerHead = styled.div`
header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding:10px 20px;
}
`;

const PartnerCss = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;
const PartHead = styled.div` 
display: flex;
justify-content: space-between;
width: 100%;
p{
    font-size: 20px;
    font-weight: 600;
    margin:0;
 }
`;
const Partners = () => {
  const [value, setValue] = useState('');
  const submitHandle = (sentValue: string) => setValue(sentValue);
  const userList = [
  { name: 'Carla Espinosa', title: 'Nurse', amount: '2000' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine', amount: '4000' },
    { name: 'Janitor', title: 'Janitor', amount: '5000' },
    { name: 'Perry Cox', title: 'Doctor of Medicine', amount: '20000' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer', amount: '21000' },
  ];
  const items: ActionType[] = [
    {
      icon: 'home',
      disabled: true,
      badge: {
        status: 'Primary',
        title: '22',
        position: 'topStart',
      },
    }
  ];
  const inventoryList = [
    {
    name: 'Apple',
    units:[ 'Kg','Crate','Pieces' ] 
    },
    {
        name: 'Banana',
        units:[ 'Kg','Crate','Pieces' ] 
    },
    {
        name: 'Orange',
        units:[ 'Kg','Crate','Pieces' ] 
     },
     {
        name: 'Pinaple',
        units:[ 'Kg','Crate','Pieces' ] 
     }
  ];

  const transcList = [
    { date: '9th Dec', sale: '40000', cash: '35000' },
    { date: '9th Dec', sale: '40000', cash: '35000' },
    { date: '9th Dec', sale: '40000', cash: '35000' },
    { date: '9th Dec', sale: '40000', cash: '35000' },
    { date: '9th Dec', sale: '40000', cash: '35000' },
    { date: '9th Dec', sale: '40000', cash: '35000' },
    
  ];
  return (
    <Layout title="Partners">
      <Row>
      <Col breakPoint={{ xs: 12, md: 6 }}>
        <Card accent="Primary" style={{minHeight:"340px"}}>
            <CardHeader className="partname_header" style={{ borderBottom: 'none',paddingBottom:0}}>
              <PartHead>
              <p>Name : Ashish Jindal</p>
              <p>Mobile : +91-8287563875</p>
              </PartHead>
              
            </CardHeader>
            <CardBody>
                 <List>
                 <ListItem>
                 <PartHead><span><b>Net Outstanind Credit </b></span> <span> RS 15000</span></PartHead>
                </ListItem>
                <ListItem>
                <PartHead><span><b>Total Sale </b> </span> <span>Rs 2000000 </span></PartHead>
                </ListItem>
                <ListItem>
                <PartHead><span><b>Today Sale </b> </span> <span>Rs 1500</span></PartHead>
                </ListItem>
                 </List>
            </CardBody>
        </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
        <Card size="Small" accent="Primary">
            <CardHeader className="partname_header" style={{fontSize:"20px",textAlign:"center"}}>
                 inventory List
            </CardHeader>
           <TableStyle>
            <table className="trasactions_table">
              {inventoryList.map((invent, index) => (
              <tr key={index}>
                <td>{invent.name}</td>
                <td>{invent.units}</td>
                <td>
                <Button appearance="outline" status="Primary">
                    Edit
                  </Button>
                </td>
              </tr>
                ))}
              </table>
              </TableStyle>
              <CardFooter style={{ textAlign:"center",}}>
                 <Button Small appearance="outline" status="Primary">
                    + Add Items
                  </Button>
              </CardFooter>
          </Card>
          
        </Col>
       
      </Row>
      <Row>
      <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small" accent="Primary">
            <PartnerHead>
            <header>
              <p style={{fontSize:"18px"}}><b>Customers</b> </p>
              <Button Small appearance="outline" status="Primary">
                    + Add Customer
                  </Button>
              <SearchCss>
                <Search submit={(v) => submitHandle(v)} type={'column-curtain'} placeholder="Search..." hint="Hit Enter to search" className="search_icon" />
              </SearchCss> 
            </header>
            </PartnerHead>
            <List>
                  <ListItem>
                  <PartnerCss>
                  <p  style={{margin:0}}><b>Name</b></p>
                  <p className="usramount"  style={{margin:0}}><b>Credit</b></p>
                  </PartnerCss> 
                </ListItem>
              {userList.map((user, index) => (
                <ListItem key={index}>
                  <PartnerCss>
                  <User title={user.title} name={user.name} />
                  <div className="usramount">(Rs {user.amount})</div>
                  </PartnerCss> 
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small" accent="Primary">
            <header style={{textAlign:"center",fontSize:'18px'}}>Day wise Data</header>
           <TableStyle>
            <table className="trasactions_table" style={{textAlign:"center"}}>
              <tr>
                <th>Date</th>
                <th>Sale</th>
                <th>Cash Received</th>
              </tr>
              {transcList.map((transc, index) => (
              <tr key={index}>
                <td>{transc.date}</td>
                <td>{transc.sale}</td>
                <td>{transc.cash}</td>
              </tr>
                ))}
              </table>
              </TableStyle>
          </Card>
        </Col>
       
      </Row>
    </Layout>
 
  );
};
export default Partners;
