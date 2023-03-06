import React from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {MovieType} from "../../types/types";
import {FormattedMessage} from "react-intl";

interface RightTopButtonPropsType {
    callback: (movie:MovieType) => void
    movie: MovieType
}

export const RightTopButtonMenu: React.FC<RightTopButtonPropsType> = ({callback, movie}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                sx={{position:'absolute', right:5, top: 5, background:'rgba(255,255,255,.3)', color:'black'}}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={
                    ()=> {
                        callback(movie)
                        handleClose()
                    }
                }><FormattedMessage id="select"/></MenuItem>
            </Menu>
        </>
    );
};

