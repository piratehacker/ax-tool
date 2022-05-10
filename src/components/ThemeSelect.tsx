import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames';

const themes = ['light', 'dark', 'emerald', 'cmyk',  'night', 'synthwave', 'retro', 'cyberpunk'];

export default function ThemeSelect() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || themes[0]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute("data-theme", theme);
        (document.activeElement as HTMLElement)?.blur();
    }, [theme]);

    return <div className="dropdown dropdown-top">
        <label tabIndex={0} className="btn m-1">Motyw</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-base-content rounded-box w-52">
            {themes.map(x => <li key={x}>
                <a className={classNames({active: theme === x})} onClick={() => setTheme(x)}>{x}</a>
            </li>)}
        </ul>
    </div>
}