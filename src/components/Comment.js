import React from 'react'

export default function Comment({ author, text, dateTime}) {
    return (
        <div>
            <h6>{author}</h6>
            {text}
        </div>
    )
}
