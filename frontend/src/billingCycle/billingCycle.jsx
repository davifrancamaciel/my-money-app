//8
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import List from './billingCyclesList'
import Form from './billingCyclesForm'
import { init, create, update, remove } from './billingCycleActions';


class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de pagamento" small='Cadastro'></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' target='tabList' icon='bars' />
                            <TabHeader label='Incluir' target='tabCreate' icon='plus' />
                            <TabHeader label='Alterar' target='tabUpdate' icon='plus' />
                            <TabHeader label='Excluir' target='tabDelete' icon='trash-o' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} submitClass='info' submitLabel='Alterar' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} submitClass='danger' submitLabel='Excluir' readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatToProps = dispatch => bindActionCreators({
    init,
    create,
    update,
    remove
}, dispatch)
export default connect(null, mapDispatToProps)(BillingCycle)  