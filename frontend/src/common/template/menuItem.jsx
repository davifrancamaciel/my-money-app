//4
// import React from 'react';
// export default props => (
//     <li>
//         <a href={props.path}>
//             <i className={`fa fa-${props.icon}`}></i>
//             {props.label}
//         </a>
//     </li>
// )

import React from 'react'
import { Link } from 'react-router-dom'
export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
)
