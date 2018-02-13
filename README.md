# ActionSheet

>react移动端ActionSheet组件

### 实例：

```js
<ActionSheet  
    list = {list}                                 //Action列表
    visiable = {this.state.isShowAction}          //控制显示
    getValue = {this.getSheetValue}               //获取列表值(id)
    hide = {this.hideAction}                      //隐藏方法
></ActionSheet>
```

### 说明：
```js
// visiable：
this.state = {
    isShowAction: false
}
```
```js
// list： 
const list = [
    {id: 1, name: item1},
    {id: 2, name: item2}
];
```
```js
// hide:
hideAction(){
    this.setState({isShowAction: false);
}
```
```js
//点击item1时
getSheetValue(id){
    console.log(id)     //item1 => 1
}
```

