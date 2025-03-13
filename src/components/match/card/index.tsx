import { SECONDARY_BG } from '@/utils/consts';
import { IMatch } from '@/utils/types';
import React from 'react';
import styled from 'styled-components';
import TeamPreview from '../teamPreview';
import { PDefault } from '@/styles/text';
import Status from '../status';

const DivCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	padding: 16px;
	gap: 32px;
	background: ${SECONDARY_BG};
`;

const DivPreview = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const DivScore = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
`;

export default function Card(props: IMatch) {
	return (
		<DivCard>
			<DivPreview>
				<TeamPreview name={props.awayTeam.name} />
				<DivScore>
					<PDefault>
						{props.awayScore}:{props.homeScore}
					</PDefault>
					<Status type={props.status} />
				</DivScore>
				<TeamPreview name={props.homeTeam.name} />
			</DivPreview>
		</DivCard>
	);
}
