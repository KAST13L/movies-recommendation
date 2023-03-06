import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import {CONFIRM_TIMEOUT, LOCALHOST_URL_LENGTH} from "../../../variables";
import {FormattedMessage} from "react-intl";

interface TextFieldForUrlPropsType {
    url: string
}

export const TextFieldForUrl: React.FC<TextFieldForUrlPropsType> = ({url}) => {

    const [isOpenAlert, setIsOpenAlert] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isOpenAlert) {
            timer = setTimeout(() => {
                setIsOpenAlert(false)
            }, CONFIRM_TIMEOUT)
        }
        return () => clearTimeout(timer)
    }, [isOpenAlert])

    return (
        <>
            <Paper
                component="form"
                sx={{
                    m: '5px 0',
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <InputBase sx={{ml: 1, flex: 1}} value={url}/>
                <IconButton color="primary" sx={{p: '10px'}}>
                    <CopyToClipboard text={url}
                                     onCopy={() => setIsOpenAlert(true)}>
                        <ContentCopyIcon/>
                    </CopyToClipboard>
                </IconButton>
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                <IconButton href={url.slice(LOCALHOST_URL_LENGTH)} sx={{p: '10px'}}>
                    <VisibilityIcon/>
                </IconButton>
            </Paper>
            <Box sx={{width: '100%'}}>
                <Collapse in={isOpenAlert}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setIsOpenAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit"/>
                            </IconButton>
                        }
                    >
                        <FormattedMessage id={'copied'}/>
                    </Alert>
                </Collapse>
            </Box>
        </>
    );
}