import React, { useState } from 'react';
import styled from 'styled-components';
import LogoIcon from '@img/logo-icon.svg';
import Image from 'next/image';
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import Button from '../button';
import Alert from '../alert';
import { PRIMARY_BG } from '@/utils/consts';
const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	background: ${PRIMARY_BG};
	padding: 8px 0;
`;

const DivLogo = styled.div`
	height: 32px;
`;

const DivRightSide = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;
`;

export default function AppHeader() {
	const queryClient = useQueryClient();
	const isFetching = useIsFetching({ queryKey: ['matches'] });
	const matchesStatus = queryClient.getQueryState(['matches'])?.status;

	const [isError, setIsError] = useState(matchesStatus === 'error');

	const refresh = () => {
		try {
			queryClient.invalidateQueries({ queryKey: ['matches'] });
			setIsError(false);
		} catch {
			setIsError(true);
		}
	};

	return (
		<Header>
			<DivLogo>
				<Image src={LogoIcon} alt="Логотип" />
			</DivLogo>
			<DivRightSide>
				<Alert isView={isError} />
				<Button onClick={refresh} isLoading={isFetching > 0} />
			</DivRightSide>
		</Header>
	);
}
