import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ nid: 'nid',chid: 'chid' }];
};

export const prerender = true;