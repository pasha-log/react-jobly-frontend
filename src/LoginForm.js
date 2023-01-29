import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setTokenAfterLogin }) => {
	const navigate = useNavigate();
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: 'TestUser',
			password: 'TestUser'
		}
	});

	const onSubmit = (data) => {
		setTokenAfterLogin(data, data.username);
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
							<h1>Login</h1>
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
							<Button
								className="LoginButton"
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

export default LoginForm;
