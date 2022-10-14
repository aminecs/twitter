import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <form className="search">
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase placeholder="Search Twitter" />
            </form>
            <h2>Widgets</h2>
        </div>
    )
}

export default Widgets
