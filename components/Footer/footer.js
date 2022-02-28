import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
  populated: {
    padding: '16px',
    position: 'relative',
    width: '100%',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  widget_image: {
    textAlign: 'left',
    marginBottom: '0',
  },
  image_container: {
    margin: '0px 0px 30px',
    width: '149px',
  },
  widget_heading: {
    marginBottom: '0',
  },
  heading_container: {
    margin: '0px 40px 0px 0px',
  },
  size_default: {
    lineHeight: '1.8',
    marginBottom: '0',
    color: '#7d7d7d',
  },
  icon_container: {
    margin: '35px 0px 0px',
  },
  service_container: {
    margin: '0px 0px 15px',
  },
  service_size: {
    fontSize: '18px',
    lineHeight: '1.75',
    margin: '0',
  },
  list_items: {
    padding: '0',
    margin: '0',
    listStyleType: 'none',
  },
  list_items_service: {
    paddingBottom: 'calc(13px/2)',
    marginTop: 'calc(13px/2)',
  },
  list_items_color: {
    color: '#7d7d7d',
  },
})

function Footer() {
  const classes = useStyles()

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} md={6} lg={3}>
          <div className={classes.populated}>
            <div className={classes.widget_image}>
              <div className={classes.image_container}>
                <Image src="/assets/image/react-storefront-logo.svg" width="146" height="50 " />
              </div>
            </div>
            <div className={classes.widget_heading}>
              <div className={classes.heading_container}>
                <p className={classes.size_default}>
                  Namkand sodales vel online best prices Amazon Check out ethnic wear, formal wear
                  western wear Blood Pressure Rate Monito ...
                </p>
              </div>
            </div>
            <div className={classes.widget_social_icons}>
              <div className={classes.icon_container}>
                <div>
                  <span>
                    <FontAwesomeIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={classes.populated}>
            <div>
              <div className={classes.service_container}>
                <h5 className={classes.service_size}>Customer Service</h5>
              </div>
            </div>
            <div>
              <ul className={classes.list_items}>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Help Center</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Returns</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Product Recalls</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Accessibility</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Contact Us</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={classes.populated}>
            <div>
              <div className={classes.service_container}>
                <h5 className={classes.service_size}>Quick Links</h5>
              </div>
            </div>
            <div>
              <ul className={classes.list_items}>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Return Policy </span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Terms Of Use</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Security</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>About us</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Store Pickup</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <div className={classes.populated}>
            <div>
              <div className={classes.service_container}>
                <h5 className={classes.service_size}>Contact Us</h5>
              </div>
            </div>
            <div>
              <ul className={classes.list_items}>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>W898 RTower Stat, Suite 56</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>458-965-3224</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>Support@info.Com</span>
                </li>
                <li className={classes.list_items_service}>
                  <span className={classes.list_items_color}>458-965-3224</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </div>
    </Container>
  )
}

export default Footer
