'use client';

import { queryClient } from '@/utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
