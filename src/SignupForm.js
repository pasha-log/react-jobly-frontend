import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import './SignupForm.css';

const SignupForm = () => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: ''
		}
	});

	const onSubmit = (data) => {
		console.log(data);
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
						<div className="FormContainer">
							<h1>Signup</h1>
							<div className="Username">
								<Controller
									name="username"
									control={control}
									render={({ field }) => <Input placeholder="Username" {...field} />}
								/>
							</div>
							<div className="Password">
								<Controller
									name="password"
									control={control}
									render={({ field }) => <Input type="password" placeholder="Password" {...field} />}
								/>
							</div>
							<div className="Firstname">
								<Controller
									name="firstname"
									control={control}
									render={({ field }) => <Input placeholder="Firstname" {...field} />}
								/>
							</div>
							<div className="Lastname">
								<Controller
									name="lastname"
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
								Submit
							</Button>
						</div>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default SignupForm;
