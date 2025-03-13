'use client';

import { PDefault } from '@/styles/text';
import { SECONDARY_BG, THIRD_BG } from '@/utils/consts';
import { ITeam } from '@/utils/types';
import React from 'react';
import styled from 'styled-components';

const DivStats = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;
	gap: 8px;
	border-radius: 4px;
	padding: 14px 24px;
	background: ${SECONDARY_BG};
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

const DivStat = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 8px;
`;

const PDark = styled(PDefault)`
	font-weight: 500;
	font-size: 14px;
	opacity: 0.4;
`;

const BorderLine = styled.div`
	display: block;
	margin: 4px 0;
	width: 1px;
	flex-shrink: 0;
	background: ${THIRD_BG};
	@media (max-width: 500px) {
		display: none;
	}
`;

export default function StatsTeam(props: ITeam) {
	return (
		<DivStats>
			<DivStat>
				<PDark>Points:</PDark>
				<PDefault>{props.points}</PDefault>
			</DivStat>
			<BorderLine />
			<DivStat>
				<PDark>Место:</PDark>
				<PDefault>{props.place}</PDefault>
			</DivStat>
			<BorderLine />
			<DivStat>
				<PDark>Всего убийств:</PDark>
				<PDefault>{props.total_kills}</PDefault>
			</DivStat>
		</DivStats>
	);
}
