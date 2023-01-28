import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './JobCard.css';

const JobCard = ({ job }) => {
	return (
		<div className="jobCard">
			<Card body className="my-2" style={{ width: '60rem' }}>
				<CardBody>
					<CardTitle tag="h5">{job.title}</CardTitle>
					{job.companyName && <CardText>{job.companyName}</CardText>}
					<CardText>Salary:{job.salary}</CardText>
					<CardText>Equity:{job.equity === null ? 'None' : job.equity}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default JobCard;
