import JobList from './JobList.js';
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const CompanyDetail = ({ company }) => {
	return (
		<section>
			<h3>{company.name}</h3>
			<p>{company.description}</p>
			{/* {jobs.map((job) => (
				<div className="companyCard">
					<Card body className="my-2" style={{ width: '60rem' }}>
						<CardBody>
							<CardTitle tag="h5">{job.title}</CardTitle>
							<CardText>{job.salary}</CardText>
							<CardText>{job.equity}</CardText>
						</CardBody>
					</Card>
				</div>
			))} */}
			<JobList companyHandle={company.handle} />
		</section>
	);
};

export default CompanyDetail;
