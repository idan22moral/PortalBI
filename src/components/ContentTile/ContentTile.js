import React from 'react';
import { Card, CardMedia, CardActionArea, CardHeader, CardActions, IconButton, withStyles, Collapse, Typography, Chip, Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { normalizeBoolean } from '../../utils/normalize';
import { FavoriteBorder } from '@material-ui/icons';
import { withSnackbar } from 'notistack';

const styles = (theme) => {
	const __defines__ = {
		mediaHeight: 200,
		headerTextHeight: 20,
		grayBackground: '#F3F5F7',
		headerColor: '#7F48FF',
		screenRatio : (16 / 9)
	};
	
	const componentWidth = __defines__.mediaHeight * __defines__.screenRatio;
	const headerHeight = __defines__.headerTextHeight + 32;
	return {
		root: {
			margin: 20,
			width: componentWidth,
			//height: __defines__.mediaHeight + headerHeight * 2,
			backgroundColor: __defines__.grayBackground
		},
		header: {
			height: __defines__.headerTextHeight,
			backgroundColor: __defines__.headerColor,
			direction: 'rtl'
		},
		headerText: {
			width: componentWidth - 16 - 40 - 8,
			'text-overflow': 'ellipsis',
			overflow: 'hidden',
			'white-space': 'nowrap'
		},
		media: {
			width: componentWidth,
			height: __defines__.mediaHeight
		},
		favoriteButton: {
			height: __defines__.headerTextHeight + 20,
			width: __defines__.headerTextHeight + 20
		},
		favoriteIcon: {
			height: __defines__.headerTextHeight + 12,
			width: __defines__.headerTextHeight + 12
		},
		descriptionContainer: {
			width: componentWidth,
			height: __defines__.mediaHeight,
			fontSize: 30,
			borderRadius: 0,
			backgroundColor: __defines__.grayBackground
		},
		descriptionText: {
			'margin': '8px 16px 16px 16px',
			height: __defines__.mediaHeight - 32,
			width: componentWidth - 32,
			direction:'rtl',
			overflowWrap: 'anywhere',
			whiteSpace: 'pre-line',
			lineHeight: 1.25,
			fontSize: 24,
		},
		footer: {
			direction: 'rtl',
			backgroundColor: __defines__.grayBackground,
			padding: '12px 16px 12px 16px'
		},
		chip: {
			marginLeft: '4px'
		}
	};
};

class ContentTile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFavorite	: normalizeBoolean(this.props.isFavorite),
			hovered		: false
		};
	}

	toggleFavorite() {
		this.setState({isFavorite: !this.state.isFavorite});
		
		if (!this.state.isFavorite) { 
			this.props.enqueueSnackbar('נשמר למועדפים!', {
				autoHideDuration: 3000,
				variant: 'success',
				anchorOrigin: { horizontal: 'right', vertical: 'top' }
			});
		}
		else {
			this.props.enqueueSnackbar('נמחק מהמועדפים', {
				autoHideDuration: 3000,
				variant: 'info',
				anchorOrigin: { horizontal: 'right', vertical: 'top' }
			});
		}
	}

	toggleDescriptionPanel() {
		this.setState({hovered: !this.state.hovered});
	}

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.root}>
				<CardHeader
					titleTypographyProps={{className:classes.headerText}}
					className={classes.header}
					action={
						<IconButton aria-label="settings" className={classes.favoriteButton}
							onClick={() => {this.toggleFavorite()}}>
							{
								this.state.isFavorite ? (
									<FavoriteIcon className={classes.favoriteIcon}
								color="secondary"/>
								) : (
									<FavoriteBorder className={classes.favoriteIcon} />
								)
							}
						</IconButton>
					}
					title="ליגת מיטב - סיכום מדדים"
					/>
				<CardActionArea onMouseEnter={()=>this.toggleDescriptionPanel()} onMouseLeave={()=>this.toggleDescriptionPanel()}>
					<Card align="right" elevation={0} className={classes.descriptionContainer}>
						<Collapse in={this.state.hovered}>
							<CardMedia className={classes.media}
								image={require(`../../assets/images/${'power-bi-report.png'}`).default}>
							</CardMedia>
						</Collapse>
						<Typography component="pre" className={classes.descriptionText}>
							{`סיכום מדדי ליגת מיטב
							ציון כולל המורכב מאחוז מסיימי הליכים בהתייצבות ראשונה,
							סה"כ זמני שהייה וציון מדדי איכות`}
						</Typography>
					</Card>
				</CardActionArea>
				<Divider/>
				<CardActions disableSpacing="true" elevation={0} className={classes.footer}>
				<Chip className={classes.chip} variant="outlined" size="small" label="#ליגת מיטב" color="primary"/>
				<Chip className={classes.chip} variant="outlined" size="small" label="#ליגת מיטב" color="primary"/>
				<Chip className={classes.chip} variant="outlined" size="small" label="#ליגת מיטב" color="primary"/>
				<Chip className={classes.chip} variant="outlined" size="small" label="#ליגת מיטב" color="primary"/>
				</CardActions>
			</Card>
		);
	}
} 

export default withSnackbar(withStyles(styles)(ContentTile));