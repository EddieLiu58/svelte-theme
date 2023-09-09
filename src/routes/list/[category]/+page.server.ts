import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ category: 'category' }];
};

export const prerender = true;