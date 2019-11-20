import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Roll from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debt }) => (
    <Grid>
        <fieldset>
            <legend>Resumo</legend>
        </fieldset>
        <Roll>
            <ValueBox cols='12 4' color='green' value={`R$ ${credit}`}
                icon='bank' text='Total de créditos'></ValueBox>
            <ValueBox cols='12 4' color='red' value={`R$ ${debt}`}
                icon='credit-card' text='Total de débitos'></ValueBox>
            <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`}
                icon='money' text='Valor consolidado'></ValueBox>
        </Roll>
    </Grid>
)
