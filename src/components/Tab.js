import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabStyles = styled.div`
	cursor: pointer;
	transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	font-size: 14px;
	line-height: 35px;
	border-radius: 2px 2px 0 0;
	text-transform: uppercase;
	font-weight: bold;
	padding: 6px 23px 4px;
	background: ${props => (props.selected ? '#fff' : '#ddd')};
	color: ${props => (props.selected ? '#111' : '#99999c')};
	outline: 0;
	@media only screen and (max-width: 768px) {
		padding-left: 10px;
		padding-right: 10px;
		font-size: 13px;
	}
`;

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	render() {
		const {
			onClick,
			props: { activeTab, label }
		} = this;

		return (
			<TabStyles onClick={onClick} selected={activeTab === label}>
				{label}
			</TabStyles>
		);
	}
}

export default Tab;
