import { PropsWithChildren } from 'react';

export function H1({children}: PropsWithChildren<{ }>) {
    return <h1 className="text-3xl font-bold mb-5">{children}</h1>;
}

export function H2({children}: PropsWithChildren<{ }>) {
    return <h2 className="text-xl font-bold mb-5">{children}</h2>;
}