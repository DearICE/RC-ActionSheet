import React from 'react';
import './_ActionSheet.scss';

export default class BottomListSelect extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		};
	}
	componentDidMount(){
		let dom = this.smask;
		!dom.ontouchmove && (dom.ontouchmove = (e)=>{
			e.preventDefault();
		});
	}
	getValue(e){
		const id = e.target.getAttribute('data-id');
		this.props.getValue(id);
	}
	render(){
		const self = this;
		return <div ref={ smask => this.smask = smask} className={this.props.visible ? "container-action-sheet-mask" : "container-action-sheet-mask hide"} onClick={this.props.hide}>
			<div className={this.props.visible ? "container-action-sheet-wrap" : "container-action-sheet-wrap slide"}>
				<ul className="select-list">
					{
						this.props.list ? this.props.list.map((item, index) => {
							return <li key={index} className="select-list-item" data-id={item.id} onClick={self.getValue.bind(self)}>{item.name}</li>;
						}) : ""
					}
				</ul>
				<button className="btn-cancel">取消</button>
			</div>
		</div>;
	}
}