
import { Card, CardBody, CardHeader, CardFooter  } from '@paljs/ui/Card';
import styled from 'styled-components';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';
import React from 'react';
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
 border-right: 1px solid #ccc;
}
.trasactions_table td:last-child,.trasactions_table th:last-child{
  border-right: none;
 }
`;

const DayWiseData = () => {

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
      <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card status="Primary">
          <CardHeader style={{textAlign:"center",fontSize:"20px"}}>Vedant Details</CardHeader>
          <CardFooter>
              kljkhk
          </CardFooter>
          <CardBody>
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
              </CardBody>
          </Card>
        </Col>
       
      </Row>
    </Layout>
 
  );
};
export default DayWiseData;
