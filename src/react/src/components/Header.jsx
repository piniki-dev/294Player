import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { headerTotalHeight } from "./Setting";

const Header = () => {
    return(
        <AppBar
            sx={{
                height: headerTotalHeight,
            }}    
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: 'flex'}}
                        color="text"
                    >
                        294Player
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;