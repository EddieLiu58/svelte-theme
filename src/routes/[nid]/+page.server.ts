import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ nid: 'hello' },{ nid: 'world' }];
};

export const prerender = true;