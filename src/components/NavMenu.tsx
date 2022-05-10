import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import ThemeSelect from './ThemeSelect';

function NavItem({ children, to }: { children: React.ReactNode, to: string }) {
    return <li><NavLink to={to}>{children}</NavLink></li>;
}

export default function NavMenu({className}: {className?: string}) {
    return <ul className={classNames("menu bg-gray-800 text-gray-100 w-56 p-2 fixed h-full top-0 bottom-0 left-0 p-5", className)}>
        <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-4">AX Tool</h1>
            <NavItem to="/industries">Branże</NavItem>
            <NavItem to="/invoice-topics">Tematy faktur</NavItem>
            <NavItem to="/categories">Kategorie AI</NavItem>
        </div>
        <ThemeSelect />
    </ul>;
}