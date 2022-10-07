- [1. rich-text-editor ](#1-React-form)
- [1.1. Installation](#11-installation)
- [1.2. Exports](#12-Exports)
- [1.3. Getting started with rich-text-editor](#13-Getting-started-with-rich-text-editor)
- [1.4. Editor](#14-Editor)
  - [1.4.1 options](#141-options)
  - [1.4.2 onChange](#142-onChange)
  - [1.4.3 Image Uploader](#143-ImageUploader)
  - [1.4.4 ImageUploadHandler](#144-ImageUploadHandler)
  - [1.4.5 className](#145-className)
  - [1.4.6 quillProps](#146-quillProps)
- [1.5 Renderer](#15-Renderer)
  - [1.5.1 renderString](#151-renderString)
  - [1.5.2 className](#152-className)
  - [1.6 Custom Embed Functionality](#16-CustomEmbedFunctionality)
  - [1.6.1 AddEmbedHandler](#161-AddEmbedHandler)
  - [1.6.2 EmbedPlaceholder](#162-EmbedPlaceholder)
  - [1.6.3 customTag](#163-customTag)
  - [1.6.4 couldHaveEmbeds](#164-couldHaveEmbeds)
  - [1.6.5 EmbedRenderer](#165-EmbedRenderer)

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
import { Quill, Editor, Renderer } from "@mithya-team/rich-text-editor";

// CommonJS
const Quill = require("@mithya-team/rich-text-editor");
const Editor = require("@mithya-team/rich-text-editor");
const Renderer = require("@mithya-team/rich-text-editor");
```

- Quill : The Quill namespace on which you can call register.
- Editor : The Quill editor component
- Renderer: A component that renders the Editor's rendered content.

## 1.3. Getting started with rich-text-editor

## 1.4. Editor

```js
import React from "react";
import { Editor } from "@mithya-team/rich-text-editor";

function App() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default App;
```

The Editor is an instance of Quill's editor. Here are the props available in Editor:

### 1.4.1 options

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

### 1.4.2 onChange

It triggers whenever there is a change to Editor's content and It passes a html string that represents the Editor's current content. It can be used alongside useState hook to maintain the state of Editor in our application.

```js
onChange={(a: string) =>  setDel(a)}
```

> Example

```js
import React from "react";
import { Editor } from "@mithya-team/rich-text-editor";

function App() {
  const [del, setDel] = useState("");
  return (
    <div>
      <Editor onChange={(a: string) => setDel(a)} />
    </div>
  );
}

export default App;
```

### 1.4.3 Image Uploader

Pass an asynchronous function that receives a File object and uploads it to your desired backend. It shall returns a Promise which when resolved, return the public URL of the image uploaded.

```js
imageUploader: (file: File) =>  Promise<string>;
```

Passing this props modify the image button. When clicked, it opens a modal box in which we can drag and drop image, the image is then passed to imageUploader function and after uploading, embed the image onto the editor.

### 1.4.4 ImageUploadHandler

Pass a functional component that displays the user with an option to select an image file, handle the uploading of file by your application and call the 'onFinish' prop when done. Pass the url of the uploaded image to onFinish method and that image will be embedded to the Editor and the Modal will be closed.

```js
ImageUploadHandler?: React.FC<{ onFinish: (url: string) =>  void }> | null;
```

Passing this props modify the image button. When clicked, it mounts a component that you pass through ImageUploadHandler.

### 1.4.5 className

Pass the class name to 'className' props that you want to be applied to the whole Editor Component.

```js
className: string;
```

### 1.4.6 quillProps

you can pass props as you would pass to a react-quill instance which have the same functionality as provided in [react-quill](https://www.npmjs.com/package/react-quill) library. Passing these props overrides any other settings we provide. Please refer to react-quill documentation.

```js
 <Editor quillProps={ ...}/>
```

## 1.5 Renderer

```js
import React from "react";
import { Editor, Renderer} from "@mithya-team/rich-text-editor";

function App() {
const [del, setDel] = useState("");
  return (
    <div>
      <Editor onChange={(a: string) =>  setDel(a)}/>
    </div>
    <div>
      <Renderer renderString={del}/>
    </div>
  );
}

export default App;
```

It is an component that renders the Editor's rendered content. Here are the props available in Renderer:

### 1.5.1 renderString

Pass the string given by the Editor's onChange Prop and it renders the content with all custom components resolved.

```js
renderString: string;
```

### 1.5.2 className

Pass the class name to 'className' props that you want to be applied to the whole Editor Component.

```js
className: string;
```

## 1.6 Custom Embed Functionality

In the Renderer we can display our own React Components as custom embeds, which we can add via Editor. This functionality works in 4 steps;

### 1.6.1 AddEmbedHandler

It is a prop in Editor component. It enables the 'Add Embed' button in toolbar. Pass a EmbedHandler component that is displayed when the user clicks 'Add Embed' button.
Take input from user and create an object that contains the props that will be passed to the CustomComponentRenderer. When done, call the 'onFinish' prop and pass the object. That object will be embeded in the final HTML as an attribute of our custom Embed.

```js
AddEmbedHandler?: React.FC<{ onFinish: (embedObject: Object) =>  void; }> | null;
```

### 1.6.2 EmbedPlaceholder

It is a prop in Editor component. When we add an embed in the editor, It is added as an placeholder in the Editor component, while the Custom component is rendered in the Renderer component.

```js
EmbedPlaceholder?: React.FC | null;
```

### 1.6.3 customTag

It is a prop in Editor and Renderer component. The custom components are embedded in the html document using this tag. Note: You must use the same tag in Editor and Renderer in order to display embeds correctly. The default tag is 'default'.

```js
customTag: string;
```

### 1.6.4 couldHaveEmbeds

It is a prop in Renderer. It is a toggle to turn on/off custom embed functionality.

```js
couldHaveEmbeds: boolean;
```

### 1.6.5 EmbedRenderer

It is a prop in Renderer. Pass a functional component, it recieves the JSON object that is embedded via custom tag from the Editor, and renders the Custom component.

```js
EmbedRenderer?: (props: CustomPropTypes) =>  ReactNode;
```
