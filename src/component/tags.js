import React, {Component} from 'react';
import {getTags} from "../api/api";
import '../css/tags.css';
import {getLeft, getTop} from "../js/util";


class Tags extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tagsElemArr: [],
			showNav:''
		};
	}

	render() {
		return (
			<div className="tag-container" ref={'tags'}>
				{this.state.tagsElemArr}
				{this.state.showNav}
				<div className="tag-hidden" ref={'navHidden'} onClick={()=>this.handleClickNavHidden()}>收起来!</div>
			</div>
		);
	}

	async getAllTags() {
		try {
			const data = await getTags();
			const tags = data.tags;
			const tagsElemArr = [(<span key={-1} onClick={() => this.toAbstract('All')}>{'All'}
					</span>)];
			console.log(tags);
			tags.forEach((item, index) => {
				tagsElemArr.push(
					<span key={index} onClick={() => this.toAbstract(item)}>{item}
					</span>
				)
			});
			console.log(tagsElemArr);
			this.setState({tagsElemArr: tagsElemArr});
		} catch (e) {
			console.log(e)
		}
	}

	// 向abstract组件传单击tag
	toAbstract(item) {
		//this.props.abstract.getTagName(this,item)
		this.props.abstract.getAbstractByTag(item);
	}

	// 单击收起事件
	handleClickNavHidden(){
		const tagContainer =this.refs.tags;
		const tagHidden = this.refs.navHidden;
		tagContainer.classList.remove('tag-container');
		tagContainer.classList.add('tag-container-hidden');
		this.setState({'showNav':(<div className='show-nav' onClick={()=>this.handleClickNavShown()}>展开!</div>)});
		tagHidden.style.display = 'none';
	}

	//单击展开事件
	handleClickNavShown(){
		const tagContainer =this.refs.tags;
		const tagHidden = this.refs.navHidden;
		tagContainer.classList.add('tag-container');
		tagContainer.classList.remove('tag-container-hidden');
		this.setState({'showNav':''});
		tagHidden.style.display = 'block';
	}

	// 给tags container绑定鼠标拖动事件
	dragTagGroup() {
		const tagContainer = this.refs.tags;
		let startX, startY, moveX, moveY, mousedownFlag, originTop, originLeft;
		tagContainer.addEventListener('mousedown', (e) => {
			tagContainer.style.cursor = 'grabbing';
			startX = e.clientX;
			startY = e.clientY;
			console.log('x,y:', startX, startY);
			mousedownFlag = 1;
			originTop = getTop(tagContainer);
			originLeft = getLeft(tagContainer);
		});
		window.addEventListener('mousemove', (e) => {
			moveX = e.clientX - startX;
			moveY = e.clientY - startY;
			if (mousedownFlag === 1) {
				console.log('mx,my:', moveX, moveY);
				console.log(getTop(tagContainer), getLeft(tagContainer));
				tagContainer.style.top = originTop + moveY + 'px';
				tagContainer.style.left = originLeft + moveX + 'px';
			}
		});
		window.addEventListener('mouseup', (e) => {
			mousedownFlag = 0;
			tagContainer.style.cursor = 'grab';
		})
	}

	// 给tags container绑定触屏拖动事件
	touchDragTagGroup() {
		const tagContainer = this.refs.tags;
		let startX, startY, moveX, moveY, mousedownFlag, originTop, originLeft;
		tagContainer.addEventListener('touchstart', (e) => {
			tagContainer.style.cursor = 'grabbing';
			const touch = e.targetTouches[0];
			startX = touch.clientX;
			startY = touch.clientY;
			console.log('x,y:', startX, startY);
			mousedownFlag = 1;
			originTop = getTop(tagContainer);
			originLeft = getLeft(tagContainer);
		});
		window.addEventListener('touchmove', (e) => {
			const touch = e.targetTouches[0];
			moveX = touch.clientX - startX;
			moveY = touch.clientY - startY;
			if (mousedownFlag === 1) {
				console.log('mx,my:', moveX, moveY);
				console.log(getTop(tagContainer), getLeft(tagContainer));
				tagContainer.style.top = originTop + moveY + 'px';
				tagContainer.style.left = originLeft + moveX + 'px';
			}
			e.preventDefault();
		},{ passive: false });
		window.addEventListener('touchend', (e) => {
			mousedownFlag = 0;
			tagContainer.style.cursor = 'grab';
		})
	}
	componentDidMount() {
		this.getAllTags();
		this.dragTagGroup();
		this.touchDragTagGroup();
	}
}

export {Tags};
