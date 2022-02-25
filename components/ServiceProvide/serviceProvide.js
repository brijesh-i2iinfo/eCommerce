import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  services: {
    width: '100%',
    background: '#f2f2f2',
    padding: '60px 0px',
  },
  service_container: {
    padding: '15px',
  },
  services_items: {
    textAlign: 'center',
    position: 'relative',
  },
  features_title: {
    marginBottom: '8px',
    fontSize: '16px',
    lineHeight: '1.75',
    color: '#252525',
  },
  features_desc: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#8585ad',
  },
})

function ServiceProvide() {
  const classes = useStyles()
  return (
    <div className={classes.services}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Grid xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div>{/* <img src="/components/assets/core_features01.png" alt="img" /> */}</div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Free Shipping On Over $ 50</h6>
                  <span className={classes.features_desc}>Agricultural mean crops livestock</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div>{/* <img src="/components/assets/core_features01.png" alt="img" /> */}</div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Membership Discount</h6>
                  <span className={classes.features_desc}>Only MemberAgricultural livestock</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div>{/* <img src="/components/assets/core_features01.png" alt="img" /> */}</div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Money Return </h6>
                  <span className={classes.features_desc}>30 days money back guarantee</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div>{/* <img src="/components/assets/core_features01.png" alt="img" /> */}</div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Online Support</h6>
                  <span className={classes.features_desc}>24/7 days support guarantee</span>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default ServiceProvide
