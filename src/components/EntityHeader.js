import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Headline from './styles/Headline';
import Avatar from './styles/Avatar';
import FollowButton from './FollowButton';
import EntityHeaderStyles from './styles/EntityHeaderStyles';
import Tabs from './Tabs';

const EntityHeader = ({ match, location, history }) => {
	const path = location.pathname;
	return (
		<EntityHeaderStyles>
			{/* <div className="background" /> */}
			<div className="container">
				<div className="row align-items-center pt-2 pt-sm-4">
					<div className="col-auto entity-header">
						<Avatar>
							<img
								alt="Mark Radomski"
								src="https://deaenij3kiw8r.cloudfront.net/system/users/avatars/140082/large_crop/production-6f27747e71c2df2e83964e0e383625f7-open-uri20130403-24890-kmo858?1486723591"
							/>
						</Avatar>
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<Headline size={'32px'}>Mark Radomski</Headline>
							</div>
							<div className="col-12 col-md-auto mt-1 mt-md-0">
								<FollowButton />
							</div>
						</div>
					</div>
				</div>
				<Tabs active={path}>
					<div label="profile" />
					<div label="code" />
					<div label="artworks" />
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
