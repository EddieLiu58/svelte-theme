import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ nid: 'hello',chid: 'world' }, { nid: 'hello',chid: 'hello' }, { nid: 'hello',chid: 'world' }];
};

export const prerender = true;