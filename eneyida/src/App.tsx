import React from 'react';
import {Box, Container, CssBaseline} from "@mui/material";
import {Navigation} from "./components";
import {Route, Routes} from "react-router-dom";
import {Home, Recommend, Settings} from "./pages";

export const App = () => {

    return (
        <>
            <CssBaseline/>
            <Navigation/>
            <Box sx={{
                backgroundColor: (theme) => theme.palette.grey[200]
            }}>
                <Container maxWidth={'xl'}>
                    <Routes>
                        <Route path='*' element={<Home/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='recommend' element={<Recommend/>}/>
                    </Routes>
                </Container>
            </Box>
        </>
    );
};

