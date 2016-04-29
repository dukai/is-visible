# is-visible

Detect whether is dom element is truly visible or not.(Don't support z-index check)
检查一个元素是否真正在页面中显示出来了。（尚不支持z-index判断）

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

# Class 
VisibleElement
- Constructor 

VisibleElement(options)
options => 
  element your selected element or selector

- Method 

stopTrack()
stop tracking current element display status.
- Events 

  show: when element show will triiger this event

## Examples

```javascript
var visible = require('is-visible');
visible.isVisible('.your-element-selector'); // will return true or false by your selected element truly display status
new visible.VisibleElement('#your-element-selector').once('show', function(){
  console.log('your element show');
});
```

## Release History
1.0.0 init version

## License
Copyright (c) 2016 dukai  
Licensed under the MIT license.
