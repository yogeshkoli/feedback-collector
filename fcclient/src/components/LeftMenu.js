import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
});

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { top: false, left: false, bottom: false, right: false };
        this.sideList = this.sideList.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    sideList(side) {

        const { classes } = this.props;

        return (<div
            className={classes.list}
            role="presentation"
            onClick={(e) => this.toggleDrawer(side, false, e)}
            onKeyDown={(e) => this.toggleDrawer(side, false, e)}
        >
            <List>
                <ListItem button key="home" to="/" component={Link}>
                    <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button key="surveys" to="/surveys" component={Link}>
                    <ListItemIcon><AssessmentOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Surveys" />
                </ListItem>
                <Stripe />
            </List>
            <Divider />
            <List>
                <ListItem button key="settings" to="/" component={Link}>
                    <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </div>);
    }

    toggleDrawer(side, open, event) {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ ...this.state, [side]: open });
    }

    // const toggleDrawer = (side, open) => event => {
    //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({
    //         ...state, [side]: open
    //     });
    // };

    render() {
        const { classes } = this.props;
        return (<div>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={(e) => this.toggleDrawer('left', true, e)}
            >
                <MenuIcon />
            </IconButton>

            <SwipeableDrawer
                open={this.state.left}
                onClose={(e) => this.toggleDrawer('left', false, e)}
                onOpen={(e) => this.toggleDrawer('left', true, e)}
            >
                {this.sideList('left')}
            </SwipeableDrawer>
        </div>);
    }
}

export default withStyles(useStyles)(LeftMenu);