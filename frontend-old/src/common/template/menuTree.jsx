//5
import React from 'react';
export default props => (
    <li className="treeview">
        <a href>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            <i className="fa fa-angle-left pull-right"></i>
        </a>
        <ul className="treeview-menu">
            {/* aqui etrarao os filhos que podem ser o proprio menuItem */}
            {props.children}
        </ul>
    </li>
)