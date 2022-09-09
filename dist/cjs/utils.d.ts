/**
 * Separates out html strings and json object containing props for renderer.
 */
export declare function chunkOutRenderString<Delta>(renderString: string, separatorStart?: string, separatorEnd?: string): Array<Delta | string>;
