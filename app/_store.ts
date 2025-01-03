import { proxy } from "valtio";

interface Store {}

const store = proxy<Store>({});

export { store };
