import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsStyles = styled.div`
	.tab-list {
		display: flex;
		> div {
			margin-right: 16px;
		}
	}
`;

class Tabs extends Component {
	static propTypes = {
		children: PropTypes.instanceOf(Array).isRequired
	};
	state = {
		activeTab: this.props.children[0].props.label
	};

	onClickTabItem = tab => {
		this.setState({ activeTab: tab });
	};

	render() {
		const {
			onClickTabItem,
			props: { children },
			state: { activeTab }
		} = this;

		return (
			<TabsStyles className="mt-4">
				<div className="tab-list">
					{children.map(child => {
						const { label } = child.props;

						return (
							<Tab
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={onClickTabItem}
							/>
						);
					})}
				</div>
				<div className="tab-content">
					{children.map(child => {
						console.log(child);
						if (child.props.label !== activeTab) return undefined;
						return child.props.children;
					})}
				</div>
			</TabsStyles>
		);
	}
}

export default Tabs;
