import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';
import type { DeepPartial } from './model/types/types';

export { counterReducer, Counter, CounterSchema, DeepPartial };
