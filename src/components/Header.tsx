import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Popover } from '@material-ui/core'
import Logo from '../assets/images/Logo.svg'
import Profile from './Profile'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: { pointerEvents: 'none' },
    paper: { padding: theme.spacing(1) }
  })
);

const Header = () => {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const openProfile = Boolean(anchorEl)

	const handleProfileOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget)
	}
  
	const handleProfileClose = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar color="default" position="absolute">
			<Toolbar className="header">
				<img src={Logo} alt="Eduwo" />

				<Typography
					aria-owns={openProfile ? 'profile-popover' : undefined}
					aria-haspopup="true"
					onMouseEnter={handleProfileOpen}
					onMouseLeave={handleProfileClose}
					className="profile-button"
				>
					Hover with a Popover.
				</Typography>
				<Popover
					id="profile-popover"
					open={openProfile}
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					transformOrigin={{ vertical: 'top', horizontal: 'center' }}
					onClose={handleProfileClose}
					disableRestoreFocus
					className={classes.popover}
					classes={{ paper: classes.paper }}
				>
					<Profile />
				</Popover>

			</Toolbar>
		</AppBar>
	);
}

export default Header;
