/**
 * Separates out html strings and json object containing props for renderer.
 */

export function chunkOutRenderString<Delta>(
  renderString: string,
  separators: { start: string; end: string }
): Array<Delta | string> {
  const separatorStart = separators.start;
  const separatorEnd = separators.end;

  let chunks: Array<string | Delta> = [];
  let _renderString = renderString;
  while (_renderString.length) {
    let startIndex = _renderString.indexOf(separatorStart);
    if (startIndex !== -1) {
      let stringChunk = _renderString.substring(0, startIndex);
      chunks.push(stringChunk);
      let temp = _renderString.substring(startIndex + separatorStart.length);
      let endIndex = temp.indexOf(separatorEnd);
      if (endIndex !== -1) {
        let jsonChunk = temp.substring(0, endIndex);
        jsonChunk = JSON.parse(jsonChunk);
        chunks.push(jsonChunk);
        _renderString = temp.substring(endIndex + separatorEnd.length);
      } else {
        // assuming the rest to be jsonChunk.
        let jsonChunk = temp;

        jsonChunk = JSON.parse(jsonChunk);

        chunks.push(jsonChunk);
        _renderString = "";
      }
    } else {
      chunks = [...chunks, _renderString];
      _renderString = "";
    }
  }
  return chunks.filter((item) => !!item); // Only removes empty strings. Not empty objects. This is on purpose in case there is a react component that doesn't need any props.
}
