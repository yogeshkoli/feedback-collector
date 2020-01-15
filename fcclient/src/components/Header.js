import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import LeftMenu from './LeftMenu';

const useStyles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class Header extends Component {

    // renderContent() {
    //     switch (this.props.auth) {
    //         case null:
    //             return 'Indetifying you...'
    //     case false:
    //     default:
    //         return [
    //             <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
    //             <li key="3">
    //                 <Link to="/">
    //                     {this.props.auth.name.givenName}
    //                 </Link></li>,
    // }
    // }

    constructor(props) {
        super(props);
        this.state = { anchorEl: null, mobileMoreAnchorEl: null };
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
        this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);

        this.mobileMenuId = 'primary-search-account-menu-mobile';
        this.menuId = 'primary-search-account-menu';
    }

    handleMenuClose() {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuClose() {
        this.setState({ mobileMoreAnchorEl: null });
    }

    handleProfileMenuOpen(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMobileMenuOpen(event) {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    defineMenu() {
        const { classes } = this.props;
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return (
                    <div className={classes.sectionDesktop}>
                        <Link to="/signup" >
                            <Button key="signup" color="inherit">Sign up</Button>
                        </Link>
                        <Link to="/signin">
                            <Button key="signin" color="inherit">Sign in</Button>
                        </Link>
                    </div>
                );

            default:
                return (<div className={classes.sectionDesktop}>
                    <Button variant="outlined" color="inherit" >
                        Credits: {this.props.auth.credits}
                    </Button>
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton> */}
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={this.menuId}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="Logut from the app"
                        aria-controls={this.menuId}
                        aria-haspopup="true"
                        href="/api/logout"
                        color="inherit"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </div>);
            // return [
            //     <li key="6" style={{ margin: '0 10px' }}>
            //         <Link to="/">Home</Link>
            //     </li>,
            //     <li key="1" style={{ margin: '0 10px' }}>
            //         <Link to="/surveys">Surveys</Link>
            //     </li>,
            //     <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
            //     <li key="3">
            //         <Link to="/">
            //             {this.props.auth.name.givenName}
            //         </Link></li>,
            //     <li key="4"><Stripe /></li>,
            //     <li key="5"><a href="/api/logout">Logout</a></li>];
        }
    }

    renderMenu() {

        const isMenuOpen = Boolean(this.state.anchorEl);

        return (<Menu
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={this.menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
        >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>);
    }

    renderMobileMenu() {
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return (<Menu
                    anchorEl={this.state.mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={this.mobileMenuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={this.handleMobileMenuClose}
                >
                    <MenuItem to="signin" component={Link}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <LockIcon />
                        </IconButton>
                        <p>Sign In</p>
                    </MenuItem>
                    <MenuItem to="/signup" component={Link}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"

                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <p>Sign Up</p>
                    </MenuItem>
                </Menu>);
            default:
                return (<Menu
                    anchorEl={this.state.mobileMoreAnchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={this.mobileMenuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={this.handleMobileMenuClose}
                >
                    <MenuItem>
                        <IconButton aria-label="shows current available credit" color="inherit">
                            <MonetizationOnIcon />
                        </IconButton>
                        <p>Credits: {this.props.auth.credits}</p>
                    </MenuItem>

                    {/* <MenuItem>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <p>Messages</p>
                    </MenuItem>
                    <MenuItem>
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                            <Badge badgeContent={11} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <p>Notifications</p>
                    </MenuItem> */}
                    <MenuItem onClick={this.handleProfileMenuOpen}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                    </MenuItem>
                    <MenuItem >
                        <IconButton
                            aria-label="Logout from the app"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <ExitToAppIcon />
                        </IconButton>
                        <p>Sing Out</p>
                    </MenuItem>
                </Menu>);
        }
    }

    renderContent() {

        const { classes } = this.props;

        return (
            <div>
                <div className={classes.grow}>
                    <AppBar position="static">
                        <Toolbar>
                            <LeftMenu></LeftMenu>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Feedback Collector
                            </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                            <div className={classes.grow} />


                            {this.defineMenu()}


                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={this.mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={this.handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                    {this.renderMobileMenu()}
                    {this.renderMenu()}
                </div>
            </div>
        );

    }

    render() {

        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateProps({ auth }) {
    return { auth };
}

export default connect(mapStateProps)(withStyles(useStyles)(Header));
