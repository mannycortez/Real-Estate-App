import React from 'react'
import Typed from 'react-typed'

export default function Banner({ children, title, subtitle }) 
{
    return (
        <div className="banner">
            <h1>{ title }</h1>
            <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={["Digital Nomads", "Traveling Entrepreneurs", "Freelance Designers"]}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="selfTypingText"
                cursorChar="|"
            />
            <div />
            <p>{ subtitle }</p>
            {children}
        </div>
    );
}

