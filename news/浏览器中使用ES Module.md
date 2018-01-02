ES modules are starting to land in browsers! They're in…

+ Safari 10.1.
+ Chrome 61.
+ Firefox 54 – behind the dom.moduleScripts.enabled setting in about:config.
+ Edge 16.


```html
<script type="module">
  import {addTextToBody} from './utils.js';

  addTextToBody('Modules are pretty cool.');
</script>
```
```js
// utils.js
export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}
```

**All you need is type=module on the script element, and the browser will treat the inline or external script as an ECMAScript module.**