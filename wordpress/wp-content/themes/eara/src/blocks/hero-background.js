export function getHeroBackgroundValue( attributes ) {
	const {
		backgroundType,
		backgroundColor,
		gradientStartColor,
		gradientEndColor,
		gradientType,
		gradientAngle,
	} = attributes;

	if ( backgroundType === 'color' ) {
		return backgroundColor;
	}
	if ( backgroundType === 'gradient' ) {
		const colors = `${ gradientStartColor }, ${ gradientEndColor }`;
		return gradientType === 'radial'
			? `radial-gradient(circle, ${ colors })`
			: `linear-gradient(${ gradientAngle }deg, ${ colors })`;
	}
	return '';
}

export function getHeroBackgroundStyle( attributes ) {
	if ( attributes.backgroundType === 'color' ) {
		return {
			backgroundColor: attributes.backgroundValue,
			backgroundImage: 'none',
		};
	}
	if ( attributes.backgroundType === 'gradient' ) {
		return { backgroundImage: attributes.backgroundValue };
	}
	return {};
}
