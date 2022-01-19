import { createAction } from '../utils/createAction';

export const changeValue = createAction('GLOBAL_SEARCH / changeValue', (id: string, value: string) => ({
    id, value
}));

export const countOvr = createAction('GLOBAL_SEARCH / countOvr', () => ({}));
export const setTotal = createAction('GLOBAL_SEARCH / setTotal', (total: number) => ({ total }));
export const setNeeds = createAction('GLOBAL_SEARCH / setNeeds', (needs: any) => ({ needs }));
