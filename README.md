# jQuery custom checkbox

Design your checkboxes in CSS.

## How to use:

### HTML

```html
<div>
    <input id="checkbox-name" onclick="" name="checkbox-name "type="checkbox" />
    <label for="checkbox-name">Your label</label>
</div>
```

### JS

```js
$('input[type=checkbox]').customcheckbox();
```

### CSS

The plugin adds a <span> element inside your label with the class "fake-checkbox" & hides your real checkbox.

So, you can style the following selectors:

* .fake-checkbox
* .fake-checkbox.checked
