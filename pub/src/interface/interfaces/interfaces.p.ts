import { TStreamToken } from "../types/types.p";

export type IStreamConsumer<PT> = ($: TStreamToken<PT>) => void