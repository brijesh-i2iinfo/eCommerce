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

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
  },
  thumbnail: {
    marginBottom: theme.spacing(1),
  },
  hover: {
    background: '#f1f1f1',
    '&:hover': {
      background: '#f00',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  price: {
    marginTop: '5px',
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
}))

function ProductItem({ product, index, classes, className, colorSelector }) {
  classes = useStyles({ classes })
  const [store, updateStore] = useState(product)

  return (
    <DataBindingProvider id={`p${product.id}`} store={store} updateStore={updateStore} root={null}>
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
                  <div className={classes.hover}  >
                    <a>
                      <AmpImage
                        className={classes.thumbnail}
                        bind={{
                          src: ['color.media.thumbnail.src', 'thumbnail.src'],
                          alt: ['color.media.thumbnail.alt', 'thumbnail.alt'],
                        }}
                        optimize={{ width: 200 }}
                        lazy={index >= 4 && index < 20 ? 'ssr' : false}
                        aspectRatio={1}
                      />
                    </a>
                  </div>
                </Link>
              </Track>
            </ForwardThumbnail>
            <div className={classes.info}>
              <Typography variant="subtitle1" className={classes.name}>
                {product.name}
              </Typography>
              {colorSelector && (
                <ProductOptionSelector
                  bind={{ value: 'color', options: 'colors' }}
                  optionProps={{
                    size: 'small',
                    showLabel: false,
                  }}
                />
              )}
              <Rating product={product} className={classes.rating} />
              <Typography className={classes.price}>{product.price}</Typography>
            </div>
          </Vbox>
        </Grid>
      </div>
    </DataBindingProvider>
  )
}

ProductItem.defaultProps = {
  colorSelector: true,
}

export default memo(ProductItem)
