import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CompaniesList = ({ companies }) => {
	return (
		<section>
			<ListGroup>
				{companies.map((company) => (
					<Link to={`/companies/${company.handle}`} key={company.handle}>
						<ListGroupItem>
							{company.name}
							{company.description}
							<img src={company.logoUrl} alt="" />
						</ListGroupItem>
					</Link>
				))}
			</ListGroup>
		</section>
	);
};

export default CompaniesList;
