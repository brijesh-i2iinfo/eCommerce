import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  services: {
    width: '100%',
    background: '#f2f2f2',
    padding: '60px 0px',
  },
  service_refund: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  service_container: {
    padding: '15px',
  },
  services_items: {
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: ' ',
      position: 'absolute',
      right: '-15x',
      height: '115px',
      width: '1px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRight: '1px solid',
    },
  },
  litespeed_loaded: {
    transition: 'opacity .5s linear 0.2s',
    opacity: '1',
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
  img_icon: {
    marginBottom: '20px',
    minHeight: '47px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    transition: '.5s linear',
    transform: 'rotateY(0)',
    fontSize: '36px',
  },
}))

function ServiceProvide() {
  const classes = useStyles()
  return (
    <div className={classes.services}>
      <Container>
        <div className={classes.service_refund}>
          <Grid item xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div className={classes.img_icon}>
                  <Image
                    src="/assets/image/core_features01.png"
                    alt="img"
                    width="74"
                    height="40"
                    className={classes.litespeed_loaded}
                  />
                </div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Free Shipping On Over $ 50</h6>
                  <span className={classes.features_desc}>Agricultural mean crops livestock</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div className={classes.img_icon}>
                  <Image
                    src="/assets/image/core_features02.png"
                    alt="img"
                    width="54"
                    height="50"
                    className={classes.litespeed_loaded}
                  />
                </div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Membership Discount</h6>
                  <span className={classes.features_desc}>Only MemberAgricultural livestock</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div className={classes.img_icon}>
                  <Image
                    src="/assets/image/core_features03.png"
                    alt="img"
                    width="44"
                    height="48"
                    className={classes.litespeed_loaded}
                  />
                </div>
                <div className={classes.features_content}>
                  <h6 className={classes.features_title}>Money Return </h6>
                  <span className={classes.features_desc}>30 days money back guarantee</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <div className={classes.service_container}>
              <div className={classes.services_items}>
                <div className={classes.img_icon}>
                  <Image
                    src="/assets/image/core_features04.png"
                    alt="img"
                    width="54"
                    height="58"
                    className={classes.litespeed_loaded}
                  />
                </div>
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

/**
  classname feature desc days supprot guarntee brijesh sacakuyta brijesh brijesh sal
*/