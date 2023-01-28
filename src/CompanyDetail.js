import JobCard from './JobCard.js';
import { useParams } from 'react-router-dom';
import JoblyApi from './api.js';
import { useState, useEffect } from 'react';

const CompanyDetail = () => {
	const { handle } = useParams();
	const [ company, setCompany ] = useState({});
	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		async function getCompany(handle) {
			let company = await JoblyApi.getCompany(handle);
			setCompany(company);
			setJobs(company.jobs.map((job) => job));
		}
		getCompany(handle);
	}, []);

	return (
		<section>
			<h3>{company.name}</h3>
			<p>{company.description}</p>
			{jobs.map((job) => <JobCard job={job} key={job.id} />)}
		</section>
	);
};

export default CompanyDetail;
