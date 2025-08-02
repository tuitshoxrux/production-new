import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '../../types/types';

describe('', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
