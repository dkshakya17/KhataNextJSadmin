
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
const Home = () => {
  const [, setValue] = useState('');
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
      icon: 'refresh-outline',
      disabled: false,
    }
  ];
  const transcList = [
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' },
    { name: 'Deepak', item: 'Lemons', quantity: '5Kg',Price:'200' }
  ];
  return (
    <Layout title="Home">
      <Row>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card status="Primary">
            <CardHeader>Today Sale</CardHeader>
            <CardBody>10,000 INR</CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card status="Primary">
            <CardHeader>Cash Received</CardHeader>
            <CardBody>20,000 INR</CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 4 }}>
          <Card status="Primary">
            <CardHeader>Total Sale</CardHeader>
            <CardBody>2,00,000 INR</CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small" accent="Primary">
            <PartnerHead>
            <header>
                 <Button Small appearance="outline" status="Primary">
                    + Add 
                  </Button>
              <p><b>Partners</b> </p>
              <SearchCss>
                <Search submit={(v) => submitHandle(v)} type={'column-curtain'} placeholder="Search..." hint="Hit Enter to search" className="search_icon" />
              </SearchCss> 
            </header>
            </PartnerHead>
            <List>
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
            <header>Recent Trasactions  
            <SearchCss>
            <Actions Link={Link} size="Small" actions={items} className="refresh_btn"/>
            </SearchCss>
            </header>
           <TableStyle>
            <table className="trasactions_table">
              <tr>
                <th>Name</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {transcList.map((transc, index) => (
              <tr key={index}>
                <td>{transc.name}</td>
                <td>{transc.item}</td>
                <td>{transc.quantity}</td>
                <td>{transc.Price}</td>
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
export default Home;
