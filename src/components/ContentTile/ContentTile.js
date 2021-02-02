import React from 'react';
import { Card, CardMedia, CardActionArea, CardHeader, IconButton, withStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { normalizeBoolean } from '../../utils/normalize';
import { FavoriteBorder } from '@material-ui/icons';

const styles = (theme) => {
	const __defines__ = {
		mediaHeight: 200,
		headerHeight: 20
	};

	return {
		root: {
			margin: 20,
			width: __defines__.mediaHeight * (16 / 9)
		},
		header: {
			height: __defines__.headerHeight,
			backgroundColor: '#7f48ff'
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
		}
	};
};

class ContentTile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFavorite : normalizeBoolean(this.props.isFavorite)
		};
	}

	toggleFavorite() {
		this.setState({isFavorite: !this.state.isFavorite});
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
				<CardActionArea>
						<CardMedia className={classes.media}
							image={require(`../../assets/images/${'power-bi-report.png'}`).default}>
						</CardMedia>
				</CardActionArea>
			</Card>
		);
	}
}	

export default withStyles(styles)(ContentTile);