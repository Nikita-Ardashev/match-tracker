import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';
import RefreshIcon from '@img/refresh-icon.svg';
import { PDefault } from '@/styles/text';
import Image, { ImageProps } from 'next/image';
import { RED_COLOR } from '@/utils/consts';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	imgProps?: ImageProps;
	isLoading?: boolean;
}

const Btn = styled.button<{ $props?: CSSProperties }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border-radius: 4px;
	padding: 16px;
	height: 56px;
	width: 204px;
	background: ${RED_COLOR};
	transition: 0.4s;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
	&:active {
		opacity: 0.6;
	}
	&:disabled {
		opacity: 0.4;
	}
	${({ $props }) => ({ ...$props })}
`;

const refreshAnim = keyframes`
    from{
        rotate: 0deg;
    }
    to{
        rotate: 360deg;
    }
`;

const DivImage = styled.div<{ $isLoading?: boolean }>`
	width: 26px;
	height: 26px;
	animation: ${refreshAnim} ${(props) => (props.$isLoading ? 'running' : 'paused')} 1.2s
		linear infinite;
`;

export default function Button({ imgProps, isLoading, ...btnProps }: IButton) {
	return (
		<Btn {...btnProps} style={undefined} $props={btnProps.style}>
			<PDefault $props={{ fontSize: 18 }}>Обновить</PDefault>
			<DivImage $isLoading={isLoading}>
				<Image
					style={{ width: '100%' }}
					src={RefreshIcon}
					alt="Иконка обновления"
					{...imgProps}
				/>
			</DivImage>
		</Btn>
	);
}
