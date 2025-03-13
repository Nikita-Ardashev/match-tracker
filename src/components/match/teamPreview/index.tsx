import React from 'react';
import styled from 'styled-components';
import TeamIcon from '@img/team-icon.svg';
import Image from 'next/image';
import { PDefault } from '@/styles/text';
const DivTeamName = styled.div`
	display: flex;
	flex-direction: row;
	gap: 14px;
	align-items: center;
`;

const DivTeamIcon = styled.div`
	width: 48px;
	height: 48px;
`;

interface ITeamPreview {
	name: string;
}

export default function TeamPreview({ name }: ITeamPreview) {
	return (
		<DivTeamName>
			<DivTeamIcon>
				<Image style={{ width: '100%' }} src={TeamIcon} alt="иконка команды" />
			</DivTeamIcon>
			<PDefault>{name}</PDefault>
		</DivTeamName>
	);
}
