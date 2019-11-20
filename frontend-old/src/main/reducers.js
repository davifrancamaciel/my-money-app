//15
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import AuthReducer from '../auth/authReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCyclesReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    // dashboard: () => ({ summary: { credit: 100, debt: 50 } })  // astes do dashboardeReducer
    dashboard: DashboardReducer, // depois
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer