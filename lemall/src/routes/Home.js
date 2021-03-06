import React from "react"
import {connect} from "react-redux"
import Banner from "./home/Banner";
import Nav from "./home/Nav";
import Banner1 from "./home/Banner1";
import Hot from "./home/Hot";
import Big1 from "./home/Big";


import action from '../store/action/index';
import Accessories from './home/Accessories';
import {Switch,Route} from 'react-router-dom';
import '../static/css/home.less';

class Home extends React.Component {
    constructor() {
        super();
        this.state={
            isBanner:false,
        }
    }
    async componentDidMount(){
        if (this.props.dataBanner.length===0) {
        await this.props.queryBanner();

        }
        if (this.props.dataBanner1.length===0) {
        await this.props.queryBanner2();

        }
        if (this.props.dataHot.length===0) {
        await this.props.queryHot();

        }
        if (this.props.dataBig.length===0) {
        await this.props.queryBig();

        }
        if (this.props.dataFitting.length===0) {
        await this.props.queryFitting();

        }

        this.setState({
             isLoad:true
         })
    }
    render() {
         if (!this.state.isLoad) return '';
        return <div className={'homeContainer'}>
            <Banner/>
            <Nav/>
            <Banner1/>
            <Hot/>
            <Big1/>
            <Accessories/>
        </div>
    }
}

export default connect(state=>({...state.home}),action.home)(Home);