import React from 'react'

function TwitterHeader({name, handle, date}) {
    return (
        <div className="twitter__header">
            <p className="twitter__header__name">{name}</p> @{handle} · {date}
        </div>
    )
}

export default TwitterHeader
