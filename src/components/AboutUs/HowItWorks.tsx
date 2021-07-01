import React from 'react'
import { useQuery } from 'react-query'
import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  container: {
    width: '100%',
    '@media (max-width: 576px)': {
      padding: 0,
      margin: 0,
    },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    marginBottom: '30px',
    marginTop: '30px',
    width: 'inherit',
  },
  link: { textDecoration: 'none' },
  title: {
    padding: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 400,
    '@media (max-width: 576px)': {
      marginBottom: 20,
    },
  },
  subTitle: {
    fontSize: 40,
    fontWeight: 400,
  },
}))

const HowItWorks = () => {
  /*   const { data: CreatorQuery } = useQuery('CreatorQuery', getCreators)
   */
  const classes = useStyle()
  return (
    <Grid item container direction="column">
      <Typography variant="h3" color="primary" className={classes.title}>
        How it Works
      </Typography>
      <Divider orientation="horizontal" className={classes.divider} />
      <Grid container spacing={10} direction="row">
        <Grid item xs={12} md={6}>
          <Typography color="primary" className={classes.subTitle}>
            For Collectors
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span /* className={classes.textBlock} */>
              Creators are invited to join Foundation by members of the
              community. Once you’ve received an invite, you’ll need to set up a
              MetaMask wallet with ETH before you can create an artist profile
              and mint an NFT—which means uploading your JPG, PNG, or video file
              to IPFS, a decentralized peer-to-peer storage network. It will
              then be an NFT you can price in ETH and put up for auction on
              Foundation. Creators receive 85% of the final sale price. If the
              piece is resold on Foundation (or OpenSea and Rarible), a 10%
              royalty goes back to the wallet that originally minted the NFT—in
              perpetuity.
            </span>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} className={classes.textBlock}>
          <Typography color="primary" className={classes.subTitle}>
            For Collectors
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span className={classes.textBlock}>
              On Foundation, anyone can create a profile to start collecting
              NFTs. All you’ll need is a MetaMask wallet and ETH, the
              cryptocurrency used to pay for all transactions on Ethereum.
              Artists list NFTs for auction at a reserve price, and once the
              first bid is placed, a 24-hour auction countdown begins. If a bid
              is placed within the last 15 minutes, the auction extends for
              another 15 minutes. When you win an auction and claim the NFT, the
              artwork gets transferred to your wallet and appears on your
              Foundation collector profile. You can also then display it in your
              virtual gallery, share it on social media, sell it later on the
              secondary market, or pioneer a new approach to appreciating
              digital art and championing the artists in your collection.
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={10} direction="row">
        <Grid item xs={12} md={6}>
          <Typography color="primary" className={classes.subTitle}>
            For the Community{' '}
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span /* className={classes.textBlock} */>
              There are many ways to get involved with Foundation beyond joining
              as a creator, collector, or developer. We welcome anyone
              interested in collectively building the future of digital culture
              to join us on Discord, Instagram, or Twitter. There are a number
              of community-led initiatives and events that you can plug into,
              participate in, and even imagine new possibilities for. We
              actively encourage community members to create new groups based
              around their interests.
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} /* className={classes.textBlock} */>
          <Typography color="primary" className={classes.subTitle}>
            For Developers
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span className={classes.textBlock}>
              We love collaborating, and invite developers to experiment with
              our free and open API.
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWorks
