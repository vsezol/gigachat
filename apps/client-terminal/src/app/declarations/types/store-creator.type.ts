import { Store } from '../classes/store.class';

export type StoreCreator<T = unknown> = () => Store<T>;
