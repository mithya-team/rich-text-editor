/**
 * Separates out html strings and json object containing props for renderer.
 */

export function chunkOutRenderString<Delta>(
  renderString: string,
  customTag: string
): Array<Delta | string> {
  let chunks: Array<string | Delta> = [];
  let _renderString = renderString;

  const openingTagStart = `<${customTag}`;
  const closingTag = `</${customTag}>`;

  while (_renderString.length) {
    console.log(_renderString.length);
    let openingTagStartIndex = _renderString.indexOf(openingTagStart);

    if (openingTagStartIndex !== -1) {
      let stringChunk = _renderString.substring(0, openingTagStartIndex);
      chunks.push(stringChunk);

      let startIndex = _renderString.indexOf(openingTagStart);
      let temp = _renderString.substring(startIndex);
      let endIndex = temp.indexOf(closingTag) + closingTag.length;
      let elemString = temp.substring(0, endIndex);

      const customTag = document.createElement("div");
      customTag.innerHTML = elemString;
      let elem = customTag?.children[0];
      if (elem instanceof HTMLElement) {
        let jsonChunk = elem.dataset.json;
        if (jsonChunk) chunks.push(JSON.parse(jsonChunk));
      }

      temp = temp.substring(endIndex);

      _renderString = temp;
    } else {
      chunks = [...chunks, _renderString];
      _renderString = "";
    }
  }
  return chunks.filter((item) => !!item); // Only removes empty strings. Not empty objects. This is on purpose in case there is a react component that doesn't need any props.
}
