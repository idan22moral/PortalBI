import React from 'react';
import { Card, Paper, CardMedia, CardActionArea, CardHeader, IconButton, withStyles, Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { normalizeBoolean } from '../../utils/normalize';
import { FavoriteBorder } from '@material-ui/icons';
import { positions } from '@material-ui/system';

const styles = (theme) => {
	const __defines__ = {
		mediaHeight: 200,
		headerHeight: 20
	};

	return {
		root: {
			margin: 20,
			width: __defines__.mediaHeight * (16 / 9),
			height: __defines__.mediaHeight + __defines__.headerHeight + 32
		},
		header: {
			height: __defines__.headerHeight,
			backgroundColor: '#7f48ff',
			direction: 'rtl'
		},
		media: {
			width: __defines__.mediaHeight * (16 / 9),
			height: __defines__.mediaHeight
		},
		favoriteButton: {
			height: __defines__.headerHeight + 20,
			width: __defines__.headerHeight + 20
		},
		favoriteIcon: {
			height: __defines__.headerHeight + 12,
			width: __defines__.headerHeight + 12
		},
		collapse: {
			
		},
		descriptionContainer: {
			width: __defines__.mediaHeight * (16 / 9),
			height: __defines__.mediaHeight,
			direction: 'rtl',
			fontSize: 30,
			borderRadius: 0,
			backgroundColor: '#7f48ff'
		},
		descriptionText: {
			margin: 16
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
	}

	toggleDescriptionPanel() {
		this.setState({hovered: !this.state.hovered});
	}

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.root}>
				<CardHeader
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
					title="דוח סייבר"
					/>
				<CardActionArea onMouseEnter={()=>this.toggleDescriptionPanel()} onMouseLeave={()=>this.toggleDescriptionPanel()}>
					<Collapse className={classes.collapse} in={this.state.hovered}>
						<Card className={classes.descriptionContainer}>
							<span className={classes.descriptionText}>
							לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול.
							</span>
						</Card>
					</Collapse>
					<CardMedia className={classes.media}
							image={require(`../../assets/images/${'power-bi-report.png'}`).default}>
					</CardMedia>
				</CardActionArea>
			</Card>
		);
	}
}	

export default withStyles(styles)(ContentTile);