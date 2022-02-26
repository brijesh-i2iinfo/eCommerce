import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles({
  deals_banner: {
    padding: '85px 0px',
    position: 'relative',
  },
})
function DealsDay() {
  const classes = useStyles()

  return <div className={classes.deals_banner}></div>
}

export default DealsDay
