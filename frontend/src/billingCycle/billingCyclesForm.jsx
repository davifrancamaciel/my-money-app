
import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'


class BillingCyclesForm extends Component {


    calculateSummary() {
        const sum = (totalizador, valorAtual) => totalizador + valorAtual
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum), //'+'c.value converte para inteiro caso de algo errado ser obtido o valor 0 como resultado
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
        }
    }


    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} label='Nome'
                        cols='12 4' placeholder='Informe o nome' type='text' readOnly={readOnly} />
                    <Field name='month' component={labelAndInput} label='Mês'
                        cols='12 4' placeholder='Informe o mês' type='number' readOnly={readOnly} />
                    <Field name='year' component={labelAndInput} label='Ano'
                        cols='12 4' placeholder='Informe o ano' type='number' readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass} pull-right`}>
                        {this.props.submitLabel}</button>
                    <button type='button' className='btn btn-defalt pull-right' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
BillingCyclesForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCyclesForm)
const selector = formValueSelector('billingCycleForm')


const mapStateToprops = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToprops, mapDispatchToProps)(BillingCyclesForm)