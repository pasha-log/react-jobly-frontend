import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import './EditProfileForm.css';
import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';

const EditProfileForm = ({ editProfileInfo }) => {
	const { currentUser, alert } = useContext(CurrentUserContext);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			firstName: currentUser.firstName,
			lastName: currentUser.lastName,
			password: '',
			email: currentUser.email
		}
	});

	const onSubmit = (data) => {
		editProfileInfo(data);
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
							<div className="Password">
								<Controller
									name="password"
									control={control}
									render={({ field }) => <Input type="password" placeholder="Password" {...field} />}
								/>
							</div>
							<div className="Email">
								<Controller
									name="email"
									control={control}
									render={({ field }) => <Input type="email" placeholder="Email" {...field} />}
								/>
							</div>
							{alert}
							<Button
								className="EditProfileButton"
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
