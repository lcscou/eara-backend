import { getHeroBackgroundValue } from './hero-background';

const { PanelBody, SelectControl, RangeControl, ColorPicker } = wp.components;
const { __ } = wp.i18n;

export default function HeroBackgroundControls( {
	attributes,
	setAttributes,
} ) {
	const updateBackground = ( changes ) => {
		const next = { ...attributes, ...changes };
		setAttributes( {
			...changes,
			backgroundValue: getHeroBackgroundValue( next ),
		} );
	};

	const colorControl = ( label, attribute ) => (
		<div>
			<p>{ label }</p>
			<ColorPicker
				color={ attributes[ attribute ] }
				disableAlpha
				onChangeComplete={ ( color ) =>
					updateBackground( { [ attribute ]: color.hex } )
				}
			/>
		</div>
	);

	return (
		<PanelBody title={ __( 'Fundo', 'eara' ) } initialOpen={ true }>
			<SelectControl
				label={ __( 'Tipo de fundo', 'eara' ) }
				value={ attributes.backgroundType }
				options={ [
					{ label: __( 'Imagem', 'eara' ), value: 'image' },
					{ label: __( 'Cor sólida', 'eara' ), value: 'color' },
					{ label: __( 'Gradiente', 'eara' ), value: 'gradient' },
				] }
				onChange={ ( backgroundType ) =>
					updateBackground( { backgroundType } )
				}
			/>
			{ attributes.backgroundType === 'color' &&
				colorControl(
					__( 'Cor de fundo', 'eara' ),
					'backgroundColor'
				) }
			{ attributes.backgroundType === 'gradient' && (
				<>
					<SelectControl
						label={ __( 'Tipo de gradiente', 'eara' ) }
						value={ attributes.gradientType }
						options={ [
							{ label: __( 'Linear', 'eara' ), value: 'linear' },
							{ label: __( 'Radial', 'eara' ), value: 'radial' },
						] }
						onChange={ ( gradientType ) =>
							updateBackground( { gradientType } )
						}
					/>
					{ attributes.gradientType === 'linear' && (
						<RangeControl
							label={ __( 'Ângulo do gradiente', 'eara' ) }
							value={ attributes.gradientAngle }
							min={ 0 }
							max={ 360 }
							allowReset={ false }
							onChange={ ( gradientAngle ) =>
								updateBackground( { gradientAngle } )
							}
						/>
					) }
					{ colorControl(
						__( 'Primeira cor', 'eara' ),
						'gradientStartColor'
					) }
					{ colorControl(
						__( 'Segunda cor', 'eara' ),
						'gradientEndColor'
					) }
				</>
			) }
		</PanelBody>
	);
}
