import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';
import AlertIcon from '@img/alert-icon.svg';
import { PDefault } from '@/styles/text';
import { THIRD_BG } from '@/utils/consts';

interface IAlert {
	textError?: string;
	isView?: boolean;
}

const DivContents = styled.div`
	position: relative;
	height: 56px;
`;

const DivAnimationAlert = styled.div<{ $width: number }>`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	height: 56px;
	overflow-x: hidden;
	width: ${(props) => props.$width}px;
	z-index: -1;
`;

const DivAlert = styled.div<{ $isView: boolean }>`
	position: absolute;
	left: ${(props) => (props.$isView ? 0 : '100%')};
	top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	padding: 14px 16px;
	width: max-content;
	border-radius: 4px;
	background: ${THIRD_BG};
	transition: 1s ease-out;
`;

const DivImage = styled.div`
	width: 28px;
	height: 28px;
`;

export default function Alert({
	textError = 'не удалось загрузить информацию',
	isView = false,
}: IAlert) {
	const refAlert = useRef<HTMLDivElement>(null);
	return (
		<DivContents>
			<DivAnimationAlert
				$width={refAlert.current?.getBoundingClientRect().width ?? 0}
			>
				<DivAlert ref={refAlert} $isView={isView}>
					<DivImage>
						<Image
							style={{ width: '100%' }}
							src={AlertIcon}
							alt="Иконка ошибки"
						/>
					</DivImage>
					<PDefault $props={{ fontSize: 18 }}>Ошибка: {textError}</PDefault>
				</DivAlert>
			</DivAnimationAlert>
		</DivContents>
	);
}
