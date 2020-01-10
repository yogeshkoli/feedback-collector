import React, { Component } from "react";
import { connect } from 'react-redux';
import { featchSurveys } from '../../actions';

import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = theme =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

class SurveyList extends Component {

    componentDidMount() {
        this.props.featchSurveys();
    }

    renderSurveys() {

        const { classes } = this.props;

        return this.props.surveys.reverse().map(survey => {
            return (
                <Grid item xs={4} key={survey._id}>

                    <Card className={classes.card} >
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Survey
                        </Typography>
                            <Typography variant="h5" component="h2">
                                {survey.title}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {survey.body}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">See Details</Button>
                            <span className="mr-2">Yes: {survey.yes}</span>
                            <span>No: {survey.no}</span>
                        </CardActions>
                    </Card>
                </Grid>
            );
        });


    }

    render() {

        const { classes } = this.props;

        return (
            <div>

                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            {this.renderSurveys()}
                        </Grid>
                    </Grid>
                </div>


            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { featchSurveys })(withStyles(useStyles)(SurveyList));