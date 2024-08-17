import Link from 'next/link';
import React from 'react';

function PlainButton({
    text = '',
    textColor = 'text-slate-700',
    bgColor = '',
    hoverStyle = 'hover:text-slate-300 hover:bg-slate-700 hover:border-none',
    fontWeight = 'font-medium',
    border = 'border border-slate-300',
    otherStyle = 'rounded-full px-4 py-1 mb-2',
    to = '',
}) {
    return (
        <Link
            className={`${textColor} ${fontWeight} ${border} ${bgColor} ${hoverStyle} ${otherStyle}`}
            href={to}
        >
            {text}
        </Link>
    );
}

export default PlainButton;
