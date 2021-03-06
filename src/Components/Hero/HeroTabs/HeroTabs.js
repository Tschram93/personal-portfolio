import React from 'react';

const HeroTabs = ( props ) => {
    return (
        <a
        className='bg-body block border-4 border-nav h-7 nav-dot rounded-full w-7'
        href='#'
    >
        <span className='bg-black ml-10 opacity-0 px-2 py-1 rounded-md '>
            {props.section}
        </span>
    </a>
    )
}

export default HeroTabs;