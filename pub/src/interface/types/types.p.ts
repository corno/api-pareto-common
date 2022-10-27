export type TStreamToken<PT> =
    | ["data", PT]
    | ["end", null]