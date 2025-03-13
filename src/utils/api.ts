import axios from 'axios';
import { ISuccessfulResponse } from './types';

export const apiGetMatches = async () => {
	const matches = axios.get<ISuccessfulResponse>('/api/fronttemp', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const body = await matches;
	return body;
};
