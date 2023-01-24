import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
	return (
		<div className="companyCard">
			<Card body className="my-2" style={{ width: '60rem' }}>
				{/* <img src={company.logoUrl} alt="" /> */}
				{company.logoUrl && <img alt={company.name} src={company.logoUrl} className="col-sm-2 float-right" />}
				<CardBody>
					<CardTitle tag="h5">{company.name}</CardTitle>
					<CardText>{company.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default CompanyCard;
