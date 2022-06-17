import React from 'react';
import { ActivityIndicator, Text, View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
	loading?: boolean;
	label: string;
	onPress: () => any;
	labelColor?: string;
	accessibilityLabel?: string;
	containerStyle?: ViewStyle;
	labelStyle?: TextStyle;
	icon?: string;
	fontSize?: number;
	sizeIcon?: number;
}

export default function TextButton(props: Props) {
	const { loading, label, onPress, fontSize = 16, labelColor = '#000', icon, sizeIcon = 20 } = props;

	return (
		<TouchableOpacity  accessibilityLabel={props.accessibilityLabel} onPress={() => !loading && onPress()}>
			<View
				pointerEvents="auto"
				style={[
					{
            borderColor: '#000',
            borderWidth: 1,
						borderRadius: 5,
						paddingVertical: 10,
						paddingHorizontal: 25,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
					},
					props.containerStyle,
				]}
			>
				<>
					{Boolean(icon) && (
						<View style={{ marginRight: label ? 10 : 0 }}>
							<Icon name={icon} size={sizeIcon} color={labelColor} />
						</View>
					)}
					<Text
						style={[
							{
								letterSpacing: 1,
								fontSize: fontSize,
								fontWeight: '500',
                fontFamily: 'Montserrat-Bold',
								color: labelColor,
								textAlign: 'center',
							},
							props.labelStyle,
						]}
					>
						{label}
					</Text>
					{loading && <ActivityIndicator style={{ marginLeft: 7.5 }} size="small" color={labelColor} />}
				</>
			</View>
		</TouchableOpacity>
	);
}
