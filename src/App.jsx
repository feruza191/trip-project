import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Layout } from 'antd';
import SideBar from './SideBar/SideBar';
import { 
  SiderWrapper, 
  TripWrapper, 
  LineDevider, 
  LayoutContent,
  HeaderWrapper,
} from './style';
import HeaderComp from './Header/Header';
import TipHistory from './TripHistory';
import { ContentHeading } from './helpers';
import TripContent from './TripContent';
import { fetchSearchCountries, fetchCountries, fetchTrips } from './state/actions';

const { Content } = Layout;

class App extends Component {
  componentDidMount(){
    this.props.fetchSearchCountries();
    this.props.fetchCountries();
    this.props.fetchTrips();
  }

  render(){
    return (
      <Row>
        <SiderWrapper xs={0} md={0} lg={4} >
            <SideBar />
        </SiderWrapper>
        <Col xs={26} md={16} lg={15} >
          <LayoutContent>
              <HeaderWrapper>
                <HeaderComp />
              </HeaderWrapper>
              <LineDevider />
              <Content>
                <TripContent />
              </Content>
            </LayoutContent>
        </Col>
        <Col xs={26} md={8} lg={5}>
          <TripWrapper>
            <ContentHeading>Trips</ContentHeading>
            <TipHistory />
          </TripWrapper>
        </Col>
      </Row>
    );
  }
}

export default connect(
  null,
    {
        fetchSearchCountries,
        fetchCountries,
        fetchTrips
    }
)(App);
