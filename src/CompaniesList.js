import React from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard.js';

const CompaniesList = ({ companies }) => {
	return (
		<section>
			<div>
				{companies.map((company) => (
					<Link to={`/companies/${company.handle}`} key={company.handle}>
						<CompanyCard company={company} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default CompaniesList;
