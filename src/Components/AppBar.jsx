import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";

const AppBarHeader = () => {
    return (
            <AppBar position="static" style={styles.appbar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        Enter User Details
                    </Typography>
                </Toolbar>
            </AppBar>
    );
};

const styles = {
    appbar: {
        marginBottom: 10,
    }
};

export default AppBarHeader;