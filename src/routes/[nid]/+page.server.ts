import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ nid: 'nid' }];
};

export const prerender = true;