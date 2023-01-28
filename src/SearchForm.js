import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import './SearchForm.css';

const SearchForm = ({ getSearchTerm }) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			searchTerm: ''
		}
	});

	const onSubmit = (data) => {
		getSearchTerm(data);
		reset();
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup row>
					<Col
						md={{
							offset: 3,
							size: 6
						}}
						sm="12"
					>
						<div className="input-group">
							<Controller
								name="searchTerm"
								control={control}
								render={({ field }) => <Input placeholder="Enter search term..." {...field} />}
							/>
							<Button type="submit" style={{ backgroundColor: '#5c5cf8' }} size="lg">
								Submit
							</Button>
						</div>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default SearchForm;

// curl -X GET -H 'Content-Type: application/json' 'http://localhost:3001/companies?name=blargh'
// curl -X GET -H 'Content-Type: application/json' 'http://localhost:3001/companies/anderson-arias-morrow'
