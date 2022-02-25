import React, { memo, useState } from 'react'
import Link from 'react-storefront/link/Link'
import { Vbox } from 'react-storefront/Box'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from 'react-storefront/Rating'
import ForwardThumbnail from 'react-storefront/ForwardThumbnail'
import AmpImage from 'react-storefront-amp/AmpImage'
import { Track } from 'react-storefront-analytics'
import clsx from 'clsx'
import ProductOptionSelector from 'react-storefront-amp/option/AmpProductOptionSelector'
import DataBindingProvider from 'react-storefront-amp/bind/DataBindingProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ServiceProvide from '../ServiceProvide/serviceProvide'

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },

  thumbnail: {
    marginBottom: theme.spacing(1),
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover $image_overlay': {
      opacity: 1,
    },
  },
  name: {
    fontWeight: '600',
  },
  price: {
    marginTop: '5px',
    color: '#ff6000',
  },
  reviews: {
    marginTop: '5px',
  },
  reviewCount: {
    marginLeft: '2px',
  },
  info: {
    margin: '0',
  },
  image_overlay: {
    position: 'absolute',
    bottom: '5.3rem',
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
  heartIcon: {
    position: 'absolute',
    top: '20px',
    right: '8px',
    zIndex: '99',
  },
}))

function ProductItem({ product, index, classes, className, colorSelector }) {
  classes = useStyles({ classes })
  const [store, updateStore] = useState(product)

  return (
    <>
      <DataBindingProvider
        id={`p${product.id}`}
        store={store}
        updateStore={updateStore}
        root={null}
      >
        <div id={`item-${index}`} className={clsx(className, classes.root)}>
          <Grid>
            <Vbox alignItems="stretch">
              <ForwardThumbnail>
                <Track event={{ onClick: 'productClicked' }} product={product}>
                  <Link
                    as={product.url}
                    href="/p/[productId]"
                    className={classes.link}
                    prefetch="visible"
                    pageData={{ product, color: store.color }}
                  >
                    <a>
                      <span className={classes.heartIcon}>
                        <FontAwesomeIcon
                          style={{ color: 'A83F39', fontSize: '26px' }}
                          icon={faHeart}
                        />
                      </span>
                      <AmpImage
                        className={classes.thumbnail}
                        bind={{
                          src: ['color.media.thumbnail.src', 'thumbnail.src'],
                          alt: ['color.media.thumbnail.alt', 'thumbnail.alt'],
                        }}
                        optimize={{ width: 300 }}
                        lazy={index >= 4 && index < 20 ? 'ssr' : false}
                        aspectRatio={1}
                      />
                      <div className={classes.image_overlay}>ADD TO CART</div>
                    </a>
                  </Link>
                </Track>
              </ForwardThumbnail>
              <div className={classes.info}>
                <Typography variant="h6" className={classes.name}>
                  {product.name}
                </Typography>
                {/* {colorSelector && (
                <ProductOptionSelector
                bind={{ value: 'color', options: 'colors' }}
                optionProps={{
                    size: 'small',
                    showLabel: false,
                  }}
                  />
                )} */}
                {/* <Rating product={product} className={classes.rating} /> */}
                <Typography className={classes.price}>{product.price}</Typography>
              </div>
            </Vbox>
          </Grid>
        </div>
      </DataBindingProvider>
    </>
  )
}

ProductItem.defaultProps = {
  colorSelector: true,
}

export default memo(ProductItem)
