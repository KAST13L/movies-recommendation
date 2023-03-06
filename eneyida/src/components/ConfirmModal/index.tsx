import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextFieldForUrl} from "./TextFieldForUrl";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import {FormattedMessage} from "react-intl";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    minWidth: '400px',
    display: 'flex-row',
    justifyContent: 'center',
    alignItems: 'center',
};

interface ConfirmModalPropsType {
    open: boolean,
    url: string,
    title: string,
    onClose: (isOpen: boolean) => void
}

export const ConfirmModal: React.FC<ConfirmModalPropsType> = ({
                                                                  url,
                                                                  onClose,
                                                                  open,
                                                                  title
                                                              }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Box>
                    <Typography variant="h6">
                        <FormattedMessage id='title_movies_list'/>
                    </Typography>
                    <Typography variant="h4" sx={{textAlign: 'center', m: '30px 30px'}}>
                        {title}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        <FormattedMessage id='share_link'/>
                    </Typography>
                    <Box sx={{
                        m: '15px 30px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        textAlign: 'center',
                    }}>
                        <FacebookShareButton url={url} children={<FacebookIcon round
                                                                               size={'45px'}/>}/>
                        <TelegramShareButton url={url} children={<TelegramIcon round
                                                                               size={'45px'}/>}/>
                        <WhatsappShareButton url={url} children={<WhatsappIcon round
                                                                               size={'45px'}/>}/>
                        <ViberShareButton url={url}
                                          children={<ViberIcon round size={'45px'}/>}/>
                        <EmailShareButton url={url}
                                          children={<EmailIcon round size={'45px'}/>}/>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        <FormattedMessage id='copy_link'/>
                    </Typography>
                    <Box sx={{textAlign: 'center'}}>
                        <TextFieldForUrl url={url}/>
                    </Box>
                </Box>

            </Box>
        </Modal>
    );
}