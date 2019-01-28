import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Headline from './styles/Headline';
import Avatar from './styles/Avatar';
import FollowButton from './FollowButton';
import EntityHeaderStyles from './styles/EntityHeaderStyles';
import Tabs from './Tabs';

const avatarPath = `${process.env.PUBLIC_URL}/assets/img/headshot-bw.png`;

const EntityHeader = ({ match, location, history }) => {
	const path = location.pathname;
	return (
		<EntityHeaderStyles>
			{/* <div className="background" /> */}
			<div className="container">
				<div className="row entity-header-container">
					<div className="col-auto entity-header">
						<Avatar>
							<img alt="Mark Radomski" src={avatarPath} />
						</Avatar>
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<Headline size={'32px'}>Mark Radomski</Headline>
							</div>
							<div className="follow-button">
								<FollowButton />
							</div>
						</div>
					</div>
				</div>
				<Tabs active={path}>
					<div label="profile" />
					<div label="code" />
				</Tabs>
			</div>
		</EntityHeaderStyles>
	);
};

EntityHeader.propTypes = {
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default withRouter(EntityHeader);
