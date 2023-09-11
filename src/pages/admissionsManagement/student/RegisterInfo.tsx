import { Col, Row, Form, Button, Spinner } from "react-bootstrap";
import "../styling.css";
import { UserRegistration } from "../../../Types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserRegister } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/index.js";
import { useNavigate } from "react-router-dom";
import AlertBox from "../../../components/Alerts.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const initialFormData: UserRegistration = {
  first_name: "",
  email: "",
  last_name: "",
  role: "user",
  second_name: "",
  date_of_birth: "",
  gender: "",
  citizenship: "",
  phone_number: "",
  policy_acceptance: false,
  data_process_acceptance: false,
  password: "",
  country_code: "",
};
const RegisterInfo = (): JSX.Element => {
  const response = useSelector((state: RootState) => state.userRegistration.data);
  const isError = useSelector((state: RootState) => state.userRegistration.isError);
  const isLoading = useSelector((state: RootState) => state.userRegistration.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertVisible, setAlertVisible] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true); 
  const [formData, setFormData] = useState<UserRegistration>(initialFormData);
  const [emailValid, setEmailValid] = useState(true); 


  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const checkPasswordsMatch = () => {
    if (formData.password !== confirmPassword) {
      setPasswordsDoNotMatch(true);
    } else {
      setPasswordsDoNotMatch(false);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const isFormValid = (): boolean => {
    return (
      formData.first_name.trim() !== "" &&
      formData.country_code.trim() !== "" &&
      formData.phone_number.trim().length === 9 &&
      formData.last_name.trim() !== "" &&
      formData.gender.trim() !== "" &&
      isValidEmail(formData.email) && 
      isValidPassword(formData.password) && 
      formData.data_process_acceptance === true &&
      formData.password===confirmPassword
    );
  };
console.log(formData,"FORM DATA")
const handleChange = (e: any) => {
  const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));45
  
};


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked ? true : false,
    }));
  };

  const handleRegistration = async () => {
    setSignUpClicked(true);
    setAlertVisible(true)
    const success = await dispatch<any>(UserRegister(formData));

    if (response) {
      navigate("/login");
    } else {
      console.log(success);
    }
    const timer = setTimeout(() => {
      setAlertVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    if (formData.password !== confirmPassword && formData.password && confirmPassword) {
      setPasswordsDoNotMatch(true);
    } else {
      setPasswordsDoNotMatch(false);
    }
  }, [formData, confirmPassword]);

  useEffect(() => {
    
    setPasswordValid(isValidPassword(formData.password));
  }, [formData.password]);

  useEffect(() => {
    
    setEmailValid(isValidEmail(formData.email));
  }, [formData.email]);

  const isValidEmail = (email: string): boolean => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="content_bg  p-3">
      {isError && alertVisible && (
        <div className="register-alert">
          <AlertBox type="danger" message={`${isError && "Error during registration, try again later!"}`} />
        </div>
      )}
      {response && response.message == "This email has already been registered. Please login." && alertVisible && (
        <div className="register-alert">
          <AlertBox type="danger" message={`This email has already been registered. Please login.`} />
        </div>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label className="d-flex">
              First name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control placeholder="First name" name="first_name" value={formData.first_name} required onChange={handleChange} />
          </Col>
          <Col>
            <Form.Label className="d-flex">
              Last name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control placeholder="Last name" required name="last_name" value={formData.last_name} onChange={handleChange} />
          </Col>
        </Row>
      </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label className="d-flex">
              Email <span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!emailValid && !!formData.email} 
            />
          </Col>
          <Col>
            <Form.Label className="d-flex">
              Gender<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control as="select" required name="gender" value={formData.gender} onChange={handleChange}>
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Col>
        </Row>
      </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label className="d-flex">
              Code <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control as="select" required name="country_code" value={formData.country_code} onChange={handleChange}>
              <option value="">Select</option>
              <option value="+263">+263</option>
              <option value="+27">+27</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Label className="d-flex">
              Phone <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              placeholder="Phone"
              required
              type="number"
              maxLength={9} 
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                const inputElement = e.target as HTMLInputElement;
                if (inputElement.value.length >= 9) {
                  e.preventDefault();
                }}}
            />
          </Col>
        </Row>
      </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label className="d-flex">
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              placeholder="Password"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!passwordValid && !!formData.password} 
            />
          </Col>
          <Col className="password-input-container">
            <Form.Label className="d-flex">
              Confirm password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              onBlur={() => checkPasswordsMatch()}
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={`password-icon ${showPassword ? "text-primary" : ""}`} />
            </div>
          </Col>
        </Row>
      </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div className="d-flex">
              <Form.Check
                type="checkbox"
                id="checkbox2"
                name="data_process_acceptance"
                onChange={handleCheckboxChange}
              />
              <Form.Label className="mx-2 text-start">
                <small>
                  I consent to the processing of my data for the purposes of the current and future admission in accordance with the provisions of Regulation of Zimbabwe. More about the principles of personal data processing in the PRIVACY POLICY
                </small>
              </Form.Label>
            </div>
          </Col>
        </Row>
      </Form>
      <Form className="my-3" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={handleRegistration}
              className={`main_bg w-100 mt-3 d-flex justify-content-center align-items-center ${
                isFormValid() ? "content_bg-2" : ""
              }`}
              type="submit"
              disabled={!isFormValid()}
            >
              {isLoading && signUpClicked && <Spinner className="spinner-border-sm me-2" />}
              <span>Sign Up</span>
            </Button>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-center my-3">
        Already have an account yet? 
        <Link to="/login" >
          <span className="px-3 py-2 header">Sign in</span>
        </Link>
        </div>
        {!passwordValid && formData.password &&(
              <div><small className="text-danger">Password must have at least 6 characters and contain at least 1 letter and 1 digit</small></div>
            )}
        {passwordsDoNotMatch && formData.password &&confirmPassword &&(
              <div><small className="text-danger">Password do not match</small></div>
            )}
      </Form>
    </div>
  );
};
export default RegisterInfo;
