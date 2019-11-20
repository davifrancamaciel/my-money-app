//7
import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
//feito a partir da criacao do reducers.jsx
import { connect } from 'react-redux';
//feito a partir da criacao do dashboardActions.jsx
import { bindActionCreators } from 'redux';
import { getSummary } from './dashboardActons';



class Dashboard extends Component {

    //depois do dashboardActions
    componentWillMount() {
        this.props.getSummary()
    }
    //fim depois do dashboardActions

    render() {
        //faz a operacao de extracao do objeto de props
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versao 1.0"></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Dréditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


//depois do dashboardActions
const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispathToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(Dashboard)

//depois do reducer
// const mapStateToProps = state => ({summary: state.dashboard.summary})
// export default connect(mapStateToProps)(Dashboard)

//antes do reducer
//export default Dashboard