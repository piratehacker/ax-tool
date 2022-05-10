import React, { PropsWithChildren } from 'react';
import NavMenu from './components/NavMenu';

export default function Layout({children} : PropsWithChildren<{ }>) {
    return <div>
        <NavMenu className="w-56" />
        <div className="ml-56 p-10">
            {children}
        </div>
    </div>
}