import { RepoMessage } from '../../components/RepoMessage';
import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../theme';

const useStyles = makeStyles({
    desc: {
        maxWidth: 750,
    },
    codeOutput: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingLeft: 25,
        maxWidth: 500,
        marginTop: 25,
        marginBottom: 25,
    },
    code: {
        fontFamily: 'Courier New',
    }
  });

export const Prime = () => {
    const classes = useStyles();
    return (
        <>
            <PageTitle text="Prime Number Generator" />
            <RepoMessage link="https://github.com/therealkylepacheco/prime-number-generator" />
            <Typography className={classes.desc} variant='h6'>
                This is a basic prime number generator written in Java. It was developed in IntelliJ through Test Driven Development with JUnit.
                My main goal of this project was to get some experience with TDD and see how it affected my coding process.
                The project has full test coverage.
            </Typography>
            <Typography className={classes.desc} variant="h6">
                Here is some example output from the program. All the prime numbers between 1 and 25 are printed to the terminal.
            </Typography>
            <Box className={classes.codeOutput}>
                <Typography className={classes.code}>$ java Main 1 25</Typography>
                <Typography className={classes.code}>2</Typography>
                <Typography className={classes.code}>3</Typography>
                <Typography className={classes.code}>5</Typography>
                <Typography className={classes.code}>7</Typography>
                <Typography className={classes.code}>11</Typography>
                <Typography className={classes.code}>13</Typography>
                <Typography className={classes.code}>17</Typography>
                <Typography className={classes.code}>19</Typography>
                <Typography className={classes.code}>23</Typography>
            </Box>
            <Typography variant="h6">
                Follow the ReadMe on the repo to try out the project!
            </Typography>
        </>
    )
}