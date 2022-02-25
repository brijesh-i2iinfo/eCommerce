import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles({
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
})

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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog
