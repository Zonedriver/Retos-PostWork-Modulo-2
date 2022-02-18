import Container from "@material-ui/core/Container";
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles= makeStyles((theme) => ({
   root: {
     width: '50%',
    },
  }))


function GridComp(){
    const classes = useStyles()
    return(
        <Fragment>
            <Container className="container">
                <Grid container spacing={3}>
                    <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 1</Grid>
                    <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 2</Grid>
                    <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 3</Grid>
                    <Grid className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 4</Grid>

                    <Grid className="gridItem" item sm={6} xs={12}>Grid 4
                      Grid item con Container
                      <Grid container>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                          <div anidado>Grid A5</div>
                        </Grid> 
                      </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default GridComp;