import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  blog_news: {
    padding: '80px 0px',
  },
  sub_title: {
    lineHeight: '1',
    fontSize: '12px',
    fontWeight: 500,
    color: '#ff6000',
    margin: '0',
    marginBottom: '15px',
  },
  title: {
    fontSize: '35px',
    letterSpacing: '.3px',
    marginBottom: '0',
    marginTop: '0',
  },
  blog_news_post: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-15px 0',
    marginBottom: '-60px',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  blog_item_post: {
    position: 'relative',
    width: '100%',
    padding: '0px 15px',
    marginBottom: '60px',
    textAlign: 'center',
  },
  img_border: {
    borderRadius: '5px',
  },
  blog_post_content: {
    padding: '30px',
    boxShadow: '0 10px 60px 0 rgb(0 0 0 / 5%)',
    backgroundColor: '#fff',
  },
  blog_title: {
    fontSize: '20px',
    marginBottom: '7px',
    marginTop: '0',
    cursor: 'pointer',
  },
  meta_inner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '15px',
    margin: '0',
    padding: '0',
  },
  meta_position: {
    marginRight: '20px',
    fontSize: '12px',
    color: '#a3a3a3',
    fontWeight: 500,
    letterSpacing: '1px',
    listStyle: 'none',
    cursor: 'pointer',
  },
  excerpt: {
    marginBottom: '20px',
    padding: '0 20px',
    marginTop: '0',
    color: '#7d7d7d',
  },
  read_more: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'underline',
    lineHeight: '1',
    color: '#252525',
  },
}))

function Blog() {
  const classes = useStyles()

  return (
    <div className={classes.blog_news}>
      <Container>
        <div>
          <div style={{ padding: '10px', width: '100%' }}>
            <div style={{ marginBottom: '0', textAlign: 'center' }}>
              <Container style={{ margin: '0 0 50px' }}>
                <p className={classes.sub_title}>BLOG & NEWS</p>
                <h2 className={classes.title}>LATEST NEWS UPDATE</h2>
              </Container>
            </div>
            <Container>
              <div className={classes.blog_news_post}>
                <Grid item xs={12} md={4} className={classes.blog_item_post}>
                  <div className={classes.blog_thumb}>
                    <Image
                      src="/assets/image/venam-blog-1.jpg"
                      alt="img"
                      width="450"
                      height="300"
                      className={classes.img_border}
                    />
                  </div>
                  <div className={classes.blog_post_content}>
                    <h4 className={classes.blog_title}>Technology series-11 Controller</h4>
                    <div>
                      <ul className={classes.meta_inner}>
                        <li className={classes.meta_position}>
                          <span>ADMIN</span>
                        </li>
                        <li className={classes.meta_position}>
                          <span>04 May</span>
                        </li>
                      </ul>
                    </div>
                    <p className={classes.excerpt}>
                      Namkand sodales vel online best prices Amazon Check out ethnic wear, formal
                      wear western wear Blood Pressure Rate Monito.
                    </p>
                    <a className={classes.read_more}>Read more</a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.blog_item_post}>
                  <div className={classes.blog_thumb}>
                    <Image
                      src="/assets/image/venam-blog-2.jpg"
                      alt="img"
                      width="450"
                      height="300"
                      className={classes.img_border}
                    />
                  </div>
                  <div className={classes.blog_post_content}>
                    <h4 className={classes.blog_title}>Technology series-10 Playstation</h4>
                    <div>
                      <ul className={classes.meta_inner}>
                        <li className={classes.meta_position}>
                          <span>ADMIN</span>
                        </li>
                        <li className={classes.meta_position}>
                          <span>04 May</span>
                        </li>
                      </ul>
                    </div>
                    <p className={classes.excerpt}>
                      Namkand sodales vel online best prices Amazon Check out ethnic wear, formal
                      wear western wear Blood Pressure Rate Monito.
                    </p>
                    <a className={classes.read_more}>Read more</a>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.blog_item_post}>
                  <div className={classes.blog_thumb}>
                    <Image
                      src="/assets/image/venam-blog-3.jpg"
                      alt="img"
                      width="450"
                      height="300"
                      className={classes.img_border}
                    />
                  </div>
                  <div className={classes.blog_post_content}>
                    <h4 className={classes.blog_title}>Technology series-9 Game</h4>
                    <div>
                      <ul className={classes.meta_inner}>
                        <li className={classes.meta_position}>
                          <span>ADMIN</span>
                        </li>
                        <li className={classes.meta_position}>
                          <span>04 May</span>
                        </li>
                      </ul>
                    </div>
                    <p className={classes.excerpt}>
                      Namkand sodales vel online best prices Amazon Check out ethnic wear, formal
                      wear western wear Blood Pressure Rate Monito.
                    </p>
                    <a className={classes.read_more}>Read more</a>
                  </div>
                </Grid>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog
