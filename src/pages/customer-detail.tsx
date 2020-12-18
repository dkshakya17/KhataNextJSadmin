
import { List, ListItem } from '@paljs/ui/List';
import { Card, CardBody, CardHeader, CardFooter  } from '@paljs/ui/Card';
import User from '@paljs/ui/User';
import { Actions, ActionType } from '@paljs/ui/Actions';
import { Search } from '@paljs/ui/Search';
import styled from 'styled-components';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';
import React, { useState }  from 'react';
import Layout from 'Layouts';
import Link from 'next/link';

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
 border-right: 1px solid #ccc;
}
.trasactions_table td:last-child,.trasactions_table th:last-child{
  border-right: none;
 }
`;
const SearchCss = styled.div`
  float: right;
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
const CustomerDetails = () => {

  const transcList = [
    { date: '9th Dec', item: 'Apple', qty: '5kg', price: '100', amount:'500'},
    { date: '9th Dec', item: 'Apple', qty: '5kg', price: '100', amount:'500'},
    { date: '9th Dec', item: 'Apple', qty: '5kg', price: '100', amount:'500'},
    { date: '9th Dec', item: 'Apple', qty: '5kg', price: '100', amount:'500'},
    { date: '9th Dec', item: 'Apple', qty: '5kg', price: '100', amount:'500'},
    { date: '9th Dec', item: 'Cash Received', qty: '5kg', price: '100', amount:'500'},
   
  ];
  return (
    <Layout title="Partners">
      <Row>
      <Col breakPoint={{ xs: 12, md: 6 }}>
        <Card accent="Primary" style={{minHeight:"200px"}}>
            <CardHeader className="partname_header" style={{ borderBottom: 'none',paddingBottom:0}}>
                 <List>
                 <ListItem>
                 <PartHead> <p>Name : Ashish Jindal</p></PartHead>
                </ListItem>
                <ListItem>
                <PartHead><p>Mobile : +91-8287563875</p></PartHead>
                </ListItem>
                 </List>
            </CardHeader>
           
        </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
        <Card accent="Primary" style={{minHeight:"200px"}}>
            <CardBody>
                 <List>
                 <ListItem>
                 <PartHead><span><b>Net Outstanind Credit</b> </span> <span> RS 15000</span></PartHead>
                </ListItem>
                <ListItem>
                <PartHead><span><b>Total Sale</b>  </span> <span>Rs 2000000 </span></PartHead>
                </ListItem>
                <ListItem>
                <PartHead><span><b>Today Sale</b>  </span> <span>Rs 1500</span></PartHead>
                </ListItem>
                 </List>
            </CardBody>
        </Card>
          
        </Col>
       
      </Row>
      <Row>
      <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small" accent="Primary">
           <TableStyle>
            <table className="trasactions_table" style={{textAlign:"center"}}>
              <tr>
                <th>Date</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Edit</th>
              </tr>
              {transcList.map((transc, index) => (
              <tr key={index}>
                <td>{transc.date}</td>
                <td>{transc.item}</td>
                <td>{transc.qty}</td>
                <td>{transc.price}</td>
                <td>{transc.amount}</td>
                <td>
                  <Button appearance="outline" status="Primary">
                    Edit
                  </Button>
                  &nbsp;
                  <Button appearance="outline" status="Primary">
                    Edit History
                  </Button>
                </td>
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
export default CustomerDetails;
