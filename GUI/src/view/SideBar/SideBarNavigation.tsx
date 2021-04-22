import React from "react";

export function SideBarNavigation () {
    return (
        <ul className="sidebar-list">
            <li className="sidebar-list__item active">
                <a className="sidebar-list__item-link"
                >
                    <span className="sidebar-list__item-link--icon"><i className="fas fa-home fa-lg"></i></span>
                    <span className="sidebar-list__item-link--text">Predict</span>
                </a>
            </li>
        </ul>
    );
}
