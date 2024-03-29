import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: '8px',
    paddingRight: '20px',
    height: '40px',
    backgroundColor: Theme.palette.secondary.main,
    border: 'none',
    borderRadius: '30px',
    boxShadow: '0px 10px 20px rgb(0 0 0 / 5%)',
    transition: 'all 300ms cubic-bezier(0.23, 1, 0.32, 1)',
    willChange: ' transform',
    position: ({ position }) => position || 'absolute',
    top: ({ top }) => top || '-28px',
    '&:hover': {
      boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)',
      transform: 'translateY(-2px)',
      backgroundColor: Theme.palette.secondary.main,
    },
    '@media (min-width: 600px)': {
      padding: '11px',
      paddingRight: ' 20px',
      height: '56px',
    },
  },
  user: {
    fontFamily: Theme.typography.fontFamily[20],
  },
  link: { textDecoration: 'none' },
}))

const CreatorButton = ({ username, imageUrl, profileUrl, ...otherProps }) => {
  const classes = useStyle({ ...otherProps })
  return (
    <Link to={profileUrl} className={classes.link}>
      <Button className={classes.root}>
        <ImgConteiner className="creator-button-img-cont">
          <ImgUser src={imageUrl} alt={username} />
        </ImgConteiner>
        <Typography
          className={classes.user}
          color="inherit"
        >{`@${username}`}</Typography>
      </Button>
    </Link>
  )
}

export default CreatorButton

const ImgUser = styled.img`
  margin: 0;
  width: 34px;
`
const ImgConteiner = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  @media (min-width: 600px) {
    width: 34px;
    height: 34px;
  }
`
