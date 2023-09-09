import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [{ category: '玄幻' }, { category: '校園' }];
};

export const prerender = true;