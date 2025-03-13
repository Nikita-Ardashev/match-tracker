'use client';

import AppHeader from '@/components/appHeader';
import Card from '@/components/match/card';
import { matchesStore } from '@/store/matchStore';
import { apiGetMatches } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import styled from 'styled-components';

const Body = styled.body`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 42px;
`;

export default observer(function Home() {
	const query = useQuery({ queryKey: ['matches'], queryFn: apiGetMatches });
	useEffect(() => {
		if (query.data?.data?.data?.matches) {
			runInAction(() => {
				matchesStore.setMatches(query.data.data.data.matches);
			});
		}
	}, [query.data]);
	const matches = matchesStore.getMatches;
	return (
		<Body>
			<AppHeader />
			{matches.map((m, i) => (
				<Card key={i + '-' + m.title} {...m} />
			))}
		</Body>
	);
});
