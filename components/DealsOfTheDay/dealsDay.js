import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles'
import { Container, Grid, Slider } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
  deals_banner: {
    padding: '85px 0px',
    position: 'relative',
  },
  element_populated: {
    padding: '15px',
  },
  title_container: {
    display: 'flex',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    borderStyle: 'solid',
    borderWidth: '0 0 1px',
    borderColor: '#dfdfdf',
    marginTop: '0',
    marginBottom: '26px',
    padding: '0 0 15px',
    width: '100%    ',
  },
  subtitle: {
    margin: '0',
  },
  heding_subTitle: {
    color: '#ff6000',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: '0',
  },
  title: {
    margin: '10px 0 0',
  },
  heding_mainTitle: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '28px',
    margin: '0',
  },
  viewAll_product: {
    textAlign: 'right',
    color: '#ff6000',
  },
  most_popular_viewed_item: {
    background: '#f2f2f2',
    boxShadow: '0 5px 10px 0 rgb(47 47 47 / 4%)',
    padding: '0 0 25px',
    textAlign: 'center',
  },
  slick_slide: {
    display: 'flex',
  },
  popular_item_thumb: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '25px',
    cursor: 'pointer',
    '&:hover $image_overlay': {
      opacity: 1,
    },
  },
  image_overlay: {
    position: 'absolute',
    bottom: '0.3rem',
    background: 'rgb(0, 0, 0)',
    color: '#f1f1f1',
    width: '100%',
    transition: '.5s ease',
    opacity: 0,
    padding: '10px',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 600,
  },
  product_title: {
    marginBottom: '7px',
    fontWeight: 500,
    fontSize: '16px',
  },
  product_price: {
    marginBottom: '0',
    lineHeight: '1.5',
    color: '#ff6000',
  },
  viewed_item_bottom: {
    marginTop: '25px',
    padding: '25px 25px 0',
    borderTop: '1px solid #999999',
  },
  sold_item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0',
    margin: '0',
  },
  sold_item_qty: {
    fontSize: '12px',
    fontWeight: 500,
    display: 'block',
    lineHeight: '1',
    color: '#000',
  },
  progressbar: {
    marginTop: '12px  ',
  },
  offerTime_label: {
    lineHeight: '1.4',
    fontWeight: 500,
    color: '#999999',
    marginBottom: '15px',
    marginTop: '27px',
  },
  offerTime_title: {
    fontSize: '16px',
    color: '#f7ba01',
  },
  coming_time: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  time_count: {
    margin: '0 3px',
    padding: '9px 10px',
    fontSize: '9px',
    width: '47px',
    background: '#252525',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'uppercase',
    borderRadius: '4px',
    textAlign: 'center',
    lineHeight: '1',
  },
  counter: {
    fontSize: '14px',
    display: 'block',
    fontWeight: 700,
    marginBottom: '2px',
  },
})

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    height: '7px',
    background: '#f7ba01',
    borderRadius: '4px  ',
  },
  '& .MuiSlider-thumb': {
    display: 'none',
  },
  '& .MuiSlider-rail': {
    height: '7px',
    background: '#999999',
    borderRadius: '4px',
  },
  '& .MuiSlider-valueLabel': {
    display: 'none',
  },
})

function DealsDay() {
  const classes = useStyles()

  return (
    <div className={classes.deals_banner}>
      <Container>
        <div className={classes.element_populated}>
          <div className={classes.title_container}>
            <Grid item xs={12} md={9}>
              <div className={classes.title_top}>
                <div className={classes.heding_title}>
                  <p className={classes.heding_subTitle}>55 NEWEST PRODUCTS</p>
                </div>
                <div className={classes.title}>
                  <h3 className={classes.heding_mainTitle}>Deals Of The Day</h3>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.viewAll_product}>
                <span>View All</span>
              </div>
            </Grid>
          </div>
          <div className={classes.slick_slide}>
            <Grid xs={12} md={3} style={{ padding: '0 15px' }}>
              <div className={classes.most_popular_viewed_item}>
                <div className={classes.viewed_item_top}>
                  <div className={classes.popular_item_thumb}>
                    <Image
                      src="/assets/image/el_img24-300x300.jpg"
                      alt="img"
                      width="300"
                      height="300"
                    />
                    <div className={classes.image_overlay}>ADD TO CART</div>
                  </div>
                  <div className={classes.super_deal_content}>
                    <h6 className={classes.product_title}>Webcam HD 720p</h6>
                    <p className={classes.product_price}>US $19.00</p>
                  </div>
                </div>
                <div className={classes.viewed_item_bottom}>
                  <ul className={classes.sold_item}>
                    <li className={classes.sold_item_qty}>Total Sold : 10</li>
                    <li className={classes.sold_item_qty}>Stocks : 20</li>
                  </ul>
                  <div className={classes.progressbar}>
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={14}
                      disabled={false}
                    />
                  </div>
                  <div className={classes.viewed_offer_time}>
                    <p className={classes.offerTime_label}>
                      <span className={classes.offerTime_title}>Hurry Up</span> Limited Time Offer
                    </p>
                    <div className={classes.coming_time}>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Days
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>HR
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Min
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={3} style={{ padding: '0 15px' }}>
              <div className={classes.most_popular_viewed_item}>
                <div className={classes.viewed_item_top}>
                  <div className={classes.popular_item_thumb}>
                    <Image src="/assets/image/mobile.jpg" alt="img" width="300" height="300" />
                    <div className={classes.image_overlay}>ADD TO CART</div>
                  </div>
                  <div className={classes.super_deal_content}>
                    <h6 className={classes.product_title}>Portable Air Cooler</h6>
                    <p className={classes.product_price}>US $12.00</p>
                  </div>
                </div>
                <div className={classes.viewed_item_bottom}>
                  <ul className={classes.sold_item}>
                    <li className={classes.sold_item_qty}>Total Sold : 2</li>
                    <li className={classes.sold_item_qty}>Stocks : 289</li>
                  </ul>
                  <div className={classes.progressbar}>
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={8}
                      disabled={false}
                    />
                  </div>
                  <div className={classes.viewed_offer_time}>
                    <p className={classes.offerTime_label}>
                      <span className={classes.offerTime_title}>Hurry Up</span> Limited Time Offer
                    </p>
                    <div className={classes.coming_time}>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Days
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>HR
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Min
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={3} style={{ padding: '0 15px' }}>
              <div className={classes.most_popular_viewed_item}>
                <div className={classes.viewed_item_top}>
                  <div className={classes.popular_item_thumb}>
                    <Image
                      src="/assets/image/el_img20-300x300.jpg"
                      alt="img"
                      width="300"
                      height="300"
                    />
                    <div className={classes.image_overlay}>ADD TO CART</div>
                  </div>
                  <div className={classes.super_deal_content}>
                    <h6 className={classes.product_title}>M5 Smart Monitor</h6>
                    <p className={classes.product_price}>US $99 .00</p>
                  </div>
                </div>
                <div className={classes.viewed_item_bottom}>
                  <ul className={classes.sold_item}>
                    <li className={classes.sold_item_qty}>Total Sold : 11</li>
                    <li className={classes.sold_item_qty}>Stocks : 19</li>
                  </ul>
                  <div className={classes.progressbar}>
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={6}
                      disabled={false}
                    />
                  </div>
                  <div className={classes.viewed_offer_time}>
                    <p className={classes.offerTime_label}>
                      <span className={classes.offerTime_title}>Hurry Up</span> Limited Time Offer
                    </p>
                    <div className={classes.coming_time}>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Days
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>HR
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Min
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={3} style={{ padding: '0 15px' }}>
              <div className={classes.most_popular_viewed_item}>
                <div className={classes.viewed_item_top}>
                  <div className={classes.popular_item_thumb}>
                    <Image
                      src="/assets/image/31d0HeVgCSL._AC_-300x300.jpg"
                      alt="img"
                      width="300"
                      height="300"
                    />
                    <div className={classes.image_overlay}>ADD TO CART</div>
                  </div>
                  <div className={classes.super_deal_content}>
                    <h6 className={classes.product_title}>Composite Product</h6>
                    <p className={classes.product_price}>US $64.00</p>
                  </div>
                </div>
                <div className={classes.viewed_item_bottom}>
                  <ul className={classes.sold_item}>
                    <li className={classes.sold_item_qty}>Total Sold : 4</li>
                    <li className={classes.sold_item_qty}>Stocks : 116</li>
                  </ul>
                  <div className={classes.progressbar}>
                    <PrettoSlider
                      valueLabelDisplay="auto"
                      aria-label="pretto slider"
                      defaultValue={3}
                      disabled={false}
                    />
                  </div>
                  <div className={classes.viewed_offer_time}>
                    <p className={classes.offerTime_label}>
                      <span className={classes.offerTime_title}>Hurry Up</span> Limited Time Offer
                    </p>
                    <div className={classes.coming_time}>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Days
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>HR
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>Min
                      </div>
                      <div className={classes.time_count}>
                        <span className={classes.counter}>00</span>sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DealsDay
