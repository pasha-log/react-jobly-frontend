import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';

const EditProfileForm = ({ setTokenAfterRegister }) => {
	const navigate = useNavigate();
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			firstName: '',
			lastName: '',
			email: ''
		}
	});

	const onSubmit = (data) => {
		setTokenAfterRegister(data, data.username);
		reset();
		navigate('/');
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
						<div className="FormContainer">
							<h1>Edit Your Profile</h1>
							<div className="Username">
								<Controller
									name="username"
									control={control}
									render={({ field }) => <Input placeholder="Username" {...field} />}
								/>
							</div>
							<div className="Firstname">
								<Controller
									name="firstName"
									control={control}
									render={({ field }) => <Input placeholder="Firstname" {...field} />}
								/>
							</div>
							<div className="Lastname">
								<Controller
									name="lastName"
									control={control}
									render={({ field }) => <Input placeholder="Lastname" {...field} />}
								/>
							</div>
							<div className="Email">
								<Controller
									name="email"
									control={control}
									render={({ field }) => <Input type="email" placeholder="Email" {...field} />}
								/>
							</div>
							<Button
								className="SignupButton"
								type="submit"
								style={{ backgroundColor: '#5c5cf8' }}
								size="lg"
							>
								Save Changes
							</Button>
						</div>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default EditProfileForm;
