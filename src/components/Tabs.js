import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsStyles = styled.div`
	position: relative;
	margin-top: 32px;
	.tab-list {
		display: flex;
		justify-content: flex-start;

		@media only screen and (max-width: 576px) {
			justify-content: center;
		}
	}
	.tab-content {
		background-color: #fff;
	}
`;

class Tabs extends Component {
	state = {
		activeTab:
			this.props.active === '/'
				? this.props.children[0].props.label
				: this.props.active.replace('/', '')
	};

	handleClickTabItem = tab => {
		this.setState({ activeTab: tab });
	};

	render() {
		const {
			handleClickTabItem,
			props: { children },
			state: { activeTab }
		} = this;

		return (
			<TabsStyles>
				<div className="tab-list">
					{children.map(child => {
						const { label } = child.props;

						return (
							<Tab
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={handleClickTabItem}
							/>
						);
					})}
				</div>
				<div className="tab-content">
					{children.map(child => {
						if (child.props.label !== activeTab) return undefined;
						return child.props.children;
					})}
				</div>
			</TabsStyles>
		);
	}
}

Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
	active: PropTypes.string
};

export default Tabs;
