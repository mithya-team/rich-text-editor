- [1. rich-text-editor ](#1-React-form)
	- [1.1. Installation](#11-installation)
	- [1.2. Exports](#12-Exports)
  - [1.3. Getting started with rich-text-editor](#13-Getting-started-with-rich-text-editor)
  - [1.4. react-quill props](#14-react-quill-props)
  - [1.5. Props](#15-Props)
    - [1.5.1. options ](#151-options)
    - [1.5.2. Image Uploader](#152-Image-Uploader)

---

# 1. rich-text-editor

Hi! This is a react library that provides a text editor component for you.
It is wrapper on [react-quill](https://www.npmjs.com/package/react-quill) library and it aims to simplify using text editors in our applications

## 1.1. Installation

```sh
    npm i https://github.com/mithya-team/rich-text-editor.git
```

## 1.2. Exports

```js
// ES6
import { Editor, Quill} from "@mithya-team/rich-text-editor";

// CommonJS
const Editor = require('@mithya-team/rich-text-editor');
const { Quill } = react-edit0r;
```

- Quill : The Quill namespace on which you can call register.
- Editor : The Quill editor component


## 1.3. Getting started with rich-text-editor

```js
import React from "react";
import { Editor} from "@mithya-team/rich-text-editor";

function App() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default App;
```

## 1.4. quillProps
you can pass props as you would pass to a react-quill instance which have the same functionality as provided in [react-quill](https://www.npmjs.com/package/react-quill) library. Passing these props overrides any other settings we provide. Please refer to react-quill documentation.
 
```js
 <Editor quillProps={ ...}/>
```

## 1.5. Props 

### 1.5.1 options 
The options must be an array of type enum toolbarOptions. Each enum represent an icon(s) on the toolbar.

```js
enum toolbarOptions {
  fontStyle,    // bold, italic, underline, strike
  quoteCode,    // blockquote, code-block
  headers,      // heading sizes
  list,		// unordered, ordered list
  indentation,	// indent controls
  font,		// font, font-direction, font-size
  script,	// subscript, superscript
  align,	// alignment controls
  clear,	// clear all text
}
```

> Example
```js
{
import React from "react";
import { Editor, toolbarOptions } from "@mithya-team/rich-text-editor";
import "./App.css";

const options = [
  toolbarOptions.fontStyle,
  toolbarOptions.list,
  toolbarOptions.align,
  toolbarOptions.font,
  toolbarOptions.clear,
];

function App() {
  return (
    <div>
      <Editor options={options} />
    </div>
  );
}

export default App;
}
```

### 1.5.2 Image Uploader
Pass an asynchronous function that receives a File object and uploads it to your desired backend. It shall returns a Promise which when resolved, return the public URL of the image uploaded.
```js
imageUploader: (file: File) =>  Promise<string>;
```
Passing this props modify the image button. When clicked, it opens a modal box in which we can drag and drop image, the image is then passed to imageUploader function and after uploading, embed the image onto the editor.
> Example
```js
import  React  from  "react";
import { Editor, toolbarOptions } from  "@mithya-team/rich-text-editor";
import  "./App.css";
import  fileUploader  from  "./fileUploader";

function  App() {
return (
  <div>
     <Editor  imageUploader={fileUploader}  />
  </div>
 );
}
export  default  App;
```

