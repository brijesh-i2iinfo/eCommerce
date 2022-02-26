import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
  limited_offer: {
    background: '#22252a',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '73px 0px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1',
  },
  limited_offer_left: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  subTitle: {
    display: 'block',
    lineHeight: '1',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: '#ff6000',
    marginBottom: '15px',
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
    marginBottom: '0',
    fontSize: '35px',
    wordSpacing: '0',
    wordWrap: 'break-word',
  },
  limited_off_disc: {
    marginLeft: '45px',
  },
  limited_off_action: {
    marginLeft: '70px',
  },
  btn: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#ff6000',
    background: '#fff',
    borderRadius: '0',
    letterSpacing: '2px',
    padding: '14px 26px',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  amount_info: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  },
  upto: {
    transform: 'rotate(-90deg)',
    fontSize: '12px',
    fontWeight: 500,
    color: '#ff6000',
    letterSpacing: '2px',
    marginLeft: '-13px',
  },
  amount: {
    background: '#ff6000',
    color: '#fff',
    font: '20px',
    fontWeight: 700,
    lineHeight: '1',
    padding: '12px 17px 8px',
  },
  off: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    marginLeft: '10px',
  },
  limited_overlay_title: {
    position: 'absolute',
    marginBottom: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    color: '#282b30',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '110px',
    lineHeight: '0.8',
    bottom: '0',
    zIndex: '-1',
  },
})

function Banner() {
  const classes = useStyles()
  return (
    <div className={classes.limited_offer}>
      <Container maxWidth>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Grid item xl={5} lg={6} md={7}>
            <div className={classes.limited_offer_left}>
              <div className={classes.limited_offer_title}>
                <span className={classes.subTitle}>exclusive offer</span>
                <h2 className={classes.title}>Smart Watch Bracelet</h2>
              </div>
              <div className={classes.limited_off_disc}>
                <Image
                  src="/assets/image/limited_offer_discount.png"
                  alt="img"
                  width="74"
                  height="74"
                />
              </div>
            </div>
          </Grid>
          <Grid xl={3} lg={4} md={5}>
            <div className={classes.limited_off_action}>
              <a className={classes.btn} herf="#">
                limited time offer
              </a>
              <div className={classes.amount_info}>
                <span className={classes.upto}>UPTO</span>
                <span className={classes.amount}>$ 50.00</span>
                <span className={classes.off}>OFF</span>
              </div>
            </div>
          </Grid>
        </div>
      </Container>
      <h2 className={classes.limited_overlay_title}>
        Venam Top Sale 35 <span>%</span>
      </h2>
    </div>
  )
}

export default Banner
