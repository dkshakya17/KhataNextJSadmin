import { List, ListItem } from "@paljs/ui/List";
import { Card, CardBody, CardHeader, CardFooter } from "@paljs/ui/Card";
import User from "@paljs/ui/User";
import "reactjs-popup/dist/index.css";
import { Actions, ActionType } from "@paljs/ui/Actions";
import { Search } from "@paljs/ui/Search";
import styled from "styled-components";
import Row from "@paljs/ui/Row";
import Col from "@paljs/ui/Col";
import { Button } from "@paljs/ui/Button";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import Layout from "Layouts";
import { InputGroup } from "@paljs/ui/Input";
import Link from "next/link";

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
const SearchCss = styled.div`
  float: right;
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
  cursor: pointer;
`;

const Home = ({ partners }) => {
  const [, setValue] = useState("");
  const submitHandle = (sentValue: string) => setValue(sentValue);
  const [modifiedData, setModifiedData] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const items: ActionType[] = [
    {
      icon: "refresh-outline",
      disabled: false,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("modifiedData = ", modifiedData);
  };

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
                <Popup
                  trigger={
                    <Button appearance="outline" status="Primary" size="Small">
                      + Add
                    </Button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal popup_modal">
                      <div className="modal_head">
                        <div className="popup_heading"> Add Partner </div>
                        <Button
                          appearance="outline"
                          status="Primary"
                          onClick={close}
                          size="Small"
                          className="close"
                        >
                          &times;
                        </Button>
                      </div>
                      <div className="content">
                        <form action="submit" className="add_form">
                          <InputGroup fullWidth>
                            <input
                              type="text"
                              placeholder="Partner Name"
                              name="name"
                              value={modifiedData.name}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          <InputGroup fullWidth>
                            <input
                              type="number"
                              placeholder="Phone Number"
                              name="phoneNumber"
                              value={modifiedData.phoneNumber}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </form>
                      </div>
                      <div className="actions button_sbmit">
                        <Button
                          appearance="outline"
                          status="Primary"
                          onClick={(event) => {
                            handleSubmit(event);
                            close();
                          }}
                          size="Small"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </Popup>
                <p>
                  <b>Partners</b>
                </p>
                <SearchCss>
                  <Search
                    submit={(v) => submitHandle(v)}
                    type={"column-curtain"}
                    placeholder="Search..."
                    hint="Hit Enter to search"
                    className="search_icon"
                  />
                </SearchCss>
              </header>
            </PartnerHead>
            <List>
              {partners.map((user, index) => (
                <Link href="/partners">
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
            <header>
              Recent Trasactions
              <SearchCss>
                <Actions
                  Link={Link}
                  size="Small"
                  actions={items}
                  className="refresh_btn"
                />
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
                {partners.map((transc, index) => (
                  <tr key={index}>
                    <td>{transc.name}</td>
                    <td>{transc.mobileNo}</td>
                    <td>{transc.totalSale}</td>
                    <td>{transc.totalCashReceived}</td>
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

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const partnersRes = await fetch(
    "http://3.7.70.121:8080/distributor/list/customer?distributorId=1"
  );
  const partners = await partnersRes.json();

  return {
    props: {
      partners,
    },
  };
}

export default Home;
