export interface ISET_ACCESS_TOKEN {
    readonly type: 'SET_ACCESS_TOKEN';
    payload: string | null;
}
export interface ISET_USER_TOKEN {
    readonly type: 'SET_USER_TOKEN';
    payload: string | null;
}
export interface IEND_USER_SESSION {
    readonly type: 'END_USER_SESSION';
    payload?: string | null;
}

export type AuthTypes =
 | ISET_ACCESS_TOKEN
 | ISET_USER_TOKEN
 | IEND_USER_SESSION;