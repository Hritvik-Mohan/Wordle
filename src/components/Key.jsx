import React from 'react'

export default function Key({ keyVal, bigKey }) {
    const selectLetter = () => {
        // const currBoard = [...]
    }
    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
    )
}
