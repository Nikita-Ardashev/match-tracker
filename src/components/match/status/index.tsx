import { PDefault } from '@/styles/text';
import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from '@/utils/consts';
import { TMatchStatus } from '@/utils/types';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IStatus extends HTMLAttributes<HTMLDivElement> {
	type: TMatchStatus;
}

const statusData = {
	Scheduled: { color: ORANGE_COLOR, text: 'Match preparing' },
	Ongoing: { color: GREEN_COLOR, text: 'Live' },
	Finished: { color: RED_COLOR, text: 'Finished' },
};

const DivStatus = styled.div<{ $bg: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	padding: 6px 8px;
	background: ${(props) => props.$bg};
	min-width: 92px;
	box-sizing: border-box;
`;

const PStatus = styled(PDefault)`
	font-size: 12px;
`;

export default function Status({ type, ...divProps }: IStatus) {
	const status = statusData[type];
	return (
		<DivStatus $bg={status.color} {...divProps}>
			<PStatus>{status.text}</PStatus>
		</DivStatus>
	);
}
