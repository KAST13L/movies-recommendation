import React, {useContext, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Field, Form} from 'react-final-form'
import {MovieType} from "../../../types/types";
import Typography from "@mui/material/Typography";
import {ConfirmModal} from "../../ConfirmModal";
import {AppContext} from "../../../providers/context";
import {FormattedMessage} from "react-intl";

interface OnSubmitSelectedMoviesFormPropsType {
    listName: string
}

interface SelectedMoviesFormPropsType {
    selectedMovies: MovieType[]
}

export const SelectedMoviesForm: React.FC<SelectedMoviesFormPropsType> = ({selectedMovies}) => {

    const [link, setLink] = useState('')
    const [listName, setListName] = useState('')
    const {state} = useContext(AppContext);

    const onSubmit = ({listName}: OnSubmitSelectedMoviesFormPropsType) => {
        const ids = selectedMovies.map(el => el.id)
        const link = `${window.location.host}/recommend?title=${listName}&locale=${state.locale}&ids=${ids.join()}`;
        setLink(link)
        setListName(listName)
    }

    const onCloseModal = () => {
        setLink('')
    }

    return (<Box sx={{m: '5px 0'}}>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors: { listName?: string | any } = {}
                    if (!values.listName) {
                        errors.listName = <FormattedMessage id={'required'}/>
                    }
                    return errors
                }}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="listName">
                            {({input, meta}) => (
                                <Box sx={{display: 'flex', position: 'relative'}}>
                                    <TextField
                                        {...input}
                                        variant={'outlined'}
                                        fullWidth
                                        inputProps={{'aria-label': 'put list name'}}
                                    />
                                    {meta.error && meta.touched && <Typography sx={{
                                        color: 'red',
                                        position: 'absolute',
                                        right: '200px',
                                    }}>{meta.error}</Typography>}
                                    <Button variant={'contained'}
                                            type={'submit'}>OK</Button>
                                </Box>
                            )}
                        </Field>
                        <ConfirmModal open={!!link} url={link} title={listName}
                                      onClose={onCloseModal}/>
                    </form>
                )}
            />
        </Box>
    );
};

