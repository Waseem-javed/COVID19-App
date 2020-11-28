import React from 'react';
import Countup from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdated } })  => {
    if (!confirmed) {
        return <div class="d-flex justify-content-center"><div class="spinner-border text-primary"></div></div>;
    }
    return (
        <div className="container mt-3">
            {/* we can do this dynamiclly by creating another component for gird system  */}
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <Countup start={0} end={confirmed.value} duration={ 2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date().toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of active case from COVID-19</Typography>
                    </CardContent>
                </Grid>
                
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            <Countup start={0} end={recovered.value} duration={ 2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date().toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <Countup start={0} end={deaths.value} duration={ 2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date().toDateString()}</Typography>
                        <Typography variant="body2" gutterBottom>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
