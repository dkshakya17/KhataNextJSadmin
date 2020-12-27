import { List, ListItem } from "@paljs/ui/List";
import { Card, CardBody, CardHeader, CardFooter } from "@paljs/ui/Card";
import User from "@paljs/ui/User";
import { Search } from "@paljs/ui/Search";
import styled from "styled-components";
import Row from "@paljs/ui/Row";
import Col from "@paljs/ui/Col";
import { Button } from "@paljs/ui/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Layout from "Layouts";
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
  width: 100%;
  .trasactions_table {
    width: 100%;
  }
  .trasactions_table td,
  .trasactions_table th {
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
`;
const PartnerHead = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 10px 20px;
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
  p {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
`;
const Partners = ({ inventoryList, customers, distributor }) => {
  const [, setValue] = useState("");
  const submitHandle = (sentValue: string) => setValue(sentValue);

  const transcList = [
    { date: "9th Dec", sale: "40000", cash: "35000" },
    { date: "9th Dec", sale: "40000", cash: "35000" },
    { date: "9th Dec", sale: "40000", cash: "35000" },
    { date: "9th Dec", sale: "40000", cash: "35000" },
    { date: "9th Dec", sale: "40000", cash: "35000" },
    { date: "9th Dec", sale: "40000", cash: "35000" },
  ];
  return (
    <Layout title="Partners">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card accent="Primary" style={{ minHeight: "340px" }}>
            <CardHeader
              className="partname_header"
              style={{ borderBottom: "none", paddingBottom: 0 }}
            >
              <PartHead>
                <p>Name : {distributor.name}</p>
                <p>Mobile : {distributor.mobileNo}</p>
              </PartHead>
            </CardHeader>
            <CardBody>
              <List>
                <ListItem>
                  <PartHead>
                    <span>
                      <b>Net Outstanind Credit </b>
                    </span>{" "}
                    <span> RS {distributor.outstandingCredit}</span>
                  </PartHead>
                </ListItem>
                <ListItem>
                  <PartHead>
                    <span>
                      <b>Total Sale </b>{" "}
                    </span>{" "}
                    <span>Rs {distributor.totalSale} </span>
                  </PartHead>
                </ListItem>
                <ListItem>
                  <PartHead>
                    <span>
                      <b>Total Cash Received</b>{" "}
                    </span>{" "}
                    <span>Rs {distributor.totalCashReceived}</span>
                  </PartHead>
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small" accent="Primary">
            <CardHeader
              className="partname_header"
              style={{ fontSize: "20px", textAlign: "center" }}
            >
              inventory List
            </CardHeader>
            <TableStyle>
              <table className="trasactions_table">
                {inventoryList.map((invent, index) => (
                  <tr key={index}>
                    <td>{invent.name}</td>
                    <td>{invent.units}</td>
                    <td>
                      <Button
                        appearance="outline"
                        size="Small"
                        status="Primary"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </table>
            </TableStyle>
            <CardFooter style={{ textAlign: "center" }}>
              <Button appearance="outline" size="Small" status="Primary">
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
                <p style={{ fontSize: "18px" }}>
                  <b>Customers</b>{" "}
                </p>
                <Button appearance="outline" size="Small" status="Primary">
                  + Add Customer
                </Button>
                <div style={{ float: "right" }}>
                  <Search
                    submit={(v) => submitHandle(v)}
                    type={"column-curtain"}
                    placeholder="Search..."
                    hint="Hit Enter to search"
                  />
                </div>
              </header>
            </PartnerHead>
            <List>
              <ListItem>
                <PartnerCss>
                  <p style={{ margin: 0 }}>
                    <b>Name</b>
                  </p>
                  <p className="usramount" style={{ margin: 0 }}>
                    <b>Credit</b>
                  </p>
                </PartnerCss>
              </ListItem>
              {customers.map((user, index) => (
                <Link href="/customer-detail">
                  <ListItem key={index} className="partnertile">
                    <PartnerCss>
                      <User name={user.name} />
                      <div className="usramount">(Rs {user.creditDue})</div>
                    </PartnerCss>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Small" accent="Primary">
            <header style={{ textAlign: "center", fontSize: "18px" }}>
              Day wise Data
            </header>
            <TableStyle>
              <table
                className="trasactions_table"
                style={{ textAlign: "center" }}
              >
                <tr>
                  <th>Date</th>
                  <th>Sale</th>
                  <th>Cash Received</th>
                </tr>
                {transcList.map((transc, index) => (
                  <Link href="/daywise-data">
                    <tr key={index} className="partnertile">
                      <td>{transc.date}</td>
                      <td>{transc.sale}</td>
                      <td>{transc.cash}</td>
                    </tr>
                  </Link>
                ))}
              </table>
            </TableStyle>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "http://3.7.70.121:8080/inventory/items?distributorId=1"
  );
  const inventoryList = await res.json();

  const customersRes = await fetch(
    "http://3.7.70.121:8080/distributor/list/customer?distributorId=1"
  );
  const customers = await customersRes.json();

  const distributorRes = await fetch(
    "http://3.7.70.121:8080/distributor/id?distributorId=1"
  );
  const distributor = await distributorRes.json();

  return {
    props: {
      inventoryList,
      customers,
      distributor,
    },
  };
}

export default Partners;
