import { PRIMARY_FONT_FAMILY } from '@/utils/consts';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export const PDefault = styled.p<{ $props?: CSSProperties }>`
	font-family: ${() => PRIMARY_FONT_FAMILY};
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	${({ $props }) => ({ ...$props })}
`;
