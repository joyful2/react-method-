import React from 'react';
import ReactDOM from 'react-dom'

import inp from './input'
import loading from './loading';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: false
		}
	}
	render() {
		return (
			<div>
				app
				{this.state.data.map(item => <p>{item}</p>)}
			</div>
		)
	}
	componentDidMount() {
		loading.show()

		inp.show({
			onOk: (value) => {
				const { data } = this.state;
				data.push(value)
				this.setState(data)
			}
		})

	}
}
export default App;

// 作业：
// 方法组件 ： confirm
// 方法组件 : tooltip message
// todolist ： 编辑