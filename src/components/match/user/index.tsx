import { PDefault } from '@/styles/text';
import { IPlayer } from '@/utils/types';
import React from 'react';
import styled from 'styled-components';
import UserIcon from '@img/user-icon.svg';
import Image from 'next/image';
import { PRIMARY_BG } from '@/utils/consts';

const DivUser = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 8px;
	border-radius: 4px;
	padding: 0px 24px;
	background: ${PRIMARY_BG};
	width: 100%;
`;

const DivText = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
`;

const PDark = styled(PDefault)`
	font-weight: 500;
	font-size: 14px;
	opacity: 0.4;
`;

const DivUserIcon = styled.div`
	width: 36px;
	height: 36px;
`;

export default function User({ username, kills }: IPlayer) {
	return (
		<DivUser>
			<DivText>
				<DivUserIcon>
					<Image style={{ width: '100%' }} src={UserIcon} alt="icon the user" />
				</DivUserIcon>
				<PDefault>{username}</PDefault>
			</DivText>
			<DivText>
				<PDark>Убийств:</PDark>
				<PDefault>{kills}</PDefault>
			</DivText>
		</DivUser>
	);
}
