/**
 * Separates out html strings and json object containing props for renderer.
 */
export declare function chunkOutRenderString<Delta>(renderString: string, separators: {
    start: string;
    end: string;
}): Array<Delta | string>;
