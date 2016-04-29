# is-visible

Detect whether is dom element is truly visible or not.(Don't support z-index check)

## Getting Started
Install the module with: `npm install git+https://github.com/dukai/is-visible`

```javascript
var visible = require('is-visible');
visible.isVisible('.your-element-selector'); // will return true or false by your selected element truly display status
new visible.VisibleElement('#your-element-selector').once('show', function(){
  console.log('your element show');
});
```

## Documentation
# method 
isVisible(selector)
detected whether your selected element is visible or not

selector: string

## Examples

```javascript
var visible = require('is-visible');
visible.isVisible('.your-element-selector'); // will return true or false by your selected element truly display status
new visible.VisibleElement('#your-element-selector').once('show', function(){
  console.log('your element show');
});


## Release History
1.0.0 init version

## License
Copyright (c) 2016 dukai  
Licensed under the MIT license.
