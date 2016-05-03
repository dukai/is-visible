# Is Visible

Detect whether is dom element is truly visible or not(Don't support z-index check). 

Well jQuery is visible (`$('your-selector').is('visible')`) do not rellay know whether your selected element can be saw. This tool will help your to do that, when your selected element was be layout by relative or margin out of it's parent node and it's parent node overflow is hidden, which jQuery could not handle that, you can use this tool to detect it's display status.
 
检查一个元素是否真正在页面中显示出来了（尚不支持z-index判断）。jQuery中的is方法无法真正的判断一个元素是否显示，这个工具可以帮你做到，当你选择的元素是通过relative或者margin进行定位的时候，它的父对象又是overflow为hidden，你的元素可能就看不见了，这时jQuery不能处理，但是这个工具可以帮你判断。

## Getting Started
Install the module with: `npm install git+https://github.com/dukai/is-visible`

```javascript
var Visible = require('is-visible');
Visible.isVisible('.your-element-selector'); // will return true or false by your selected element truly display status
new Visible('#your-element-selector').once('show', function(){
  console.log('your element show');
```

## Documentation 


### Class 

`VisibleElement`

- Constructor 

    `VisibleElement(options)`  
    options  
    element your selected element or selector

- Method 

    `stopTrack()`  
    stop tracking current element display status.

- StaticMethod  
    `isVisible(selector)`
    detected whether your selected element is visible or not  
    params 
    `selector`: string

- Events 

    show: when element show will triiger this event

## Examples

```javascript
var Visible = require('is-visible');
Visible.isVisible('.your-element-selector'); // will return true or false by your selected element truly display status
new Visible('#your-element-selector').once('show', function(){
  console.log('your element show');
});
```

## Release History
1.0.0 init version

## License
Copyright (c) 2016 dukai  
Licensed under the MIT license.
