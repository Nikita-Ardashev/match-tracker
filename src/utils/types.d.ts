import { matchModel, matchTypes, playerModel, teamModel } from '@/store/matchModel';
import { Instance } from 'mobx-state-tree';

export type IPlayer = Instance<typeof playerModel>;

export type ITeam = Instance<typeof teamModel>;

export type TMatchStatus = Instance<typeof matchTypes>;

export type IMatch = Instance<typeof matchModel>;

export interface ISuccessfulResponse {
	ok: boolean;
	data: {
		matches: IMatch[];
	};
}
