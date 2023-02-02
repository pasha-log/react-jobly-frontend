import { Button } from 'reactstrap';

const ApplyButton = ({ success, apply }) => {
	return (
		<div>
			{success ? (
				<Button color={'success'}>Applied!</Button>
			) : (
				<Button onClick={apply} color={'primary'}>
					Apply
				</Button>
			)}
		</div>
	);
};

export default ApplyButton;
