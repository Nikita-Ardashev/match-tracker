import { IMatch } from '@/utils/types';
import { cast, flow, t } from 'mobx-state-tree';

export const playerModel = t.model('player', {
	username: t.string,
	kills: t.number,
});

export const teamModel = t.model('team', {
	name: t.string,
	players: t.array(playerModel),
	points: t.number,
	place: t.number,
	total_kills: t.number,
});

export const matchTypes = t.union(
	t.literal('Scheduled'),
	t.literal('Ongoing'),
	t.literal('Finished'),
);

export const matchModel = t
	.model('match', {
		time: t.union(t.Date, t.string),
		title: t.string,
		homeTeam: teamModel,
		awayTeam: teamModel,
		homeScore: t.number,
		awayScore: t.number,
		status: matchTypes,
	})
	.views((self) => ({
		get getMatch() {
			return self;
		},
	}));

export const matchesModel = t
	.model('matches', {
		matches: t.array(matchModel),
	})
	.views((self) => ({
		get getMatches() {
			return self.matches;
		},
	}))
	.actions((self) => ({
		setMatches: flow(function* (matches: IMatch[]) {
			self.matches = cast(matches);
		}),
	}));
