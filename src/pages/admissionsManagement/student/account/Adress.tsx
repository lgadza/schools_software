

import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  editUserAddress,
  getApplicantData,
  postUserAddress,
} from "../../../../redux/actions";
import { AddressInterface } from "../../../../Types";
import { Dispatch } from "redux";

interface SuccessMessageProps {
  variant: "success" | "danger";
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  variant,
  message,
}) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return showMessage ? <Alert variant={variant}>{message}</Alert> : null;
};

const Address = (): JSX.Element => {
  const dispatch:Dispatch<any> = useDispatch();
  const accessToken = useSelector(
    (state: RootState) => state.accessToken.accessToken
  );
  const editIsError = useSelector(
    (state: RootState) => state.editUserAddress.isError
  );
  const postIsError = useSelector(
    (state: RootState) => state.postUserAddress.isError
  );

  const user = useSelector((state: RootState) => state.applicantData.data);

  const initialAddress: AddressInterface = user && user.address
    ? {
      street: user.address.street,
      building_number: user.address.building_number,
      apartment_number: user.address.apartment_number,
      postal_code: user.address.postal_code,
      location: user.address.location,
      province: user.address.province,
      country: user.address.country,
      email: user.address.email,
      type_of_settlement: user.address.type_of_settlement,
      city: user.address.city,
    }
    : {
      street: "",
      building_number: "",
      apartment_number: "",
      postal_code: "",
      location: "",
      province: "",
      country: "Zimbabwe",
      email: "",
      type_of_settlement: "",
      city: "Bulawayo",
    };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [save, setSave] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [address, setAddress] = useState<AddressInterface>(initialAddress);
const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const isAddressValid = (): boolean => {
    return (
      address.building_number.trim() !== "" &&
      address.city.trim() !== "" &&
      address.country.trim() !== "" &&
      address.province.trim() !== "" &&
      address.type_of_settlement.trim() !== "" &&
      address.street.trim() !== ""
    );
  };

  const handleSave = async () => {
    await dispatch(editUserAddress(accessToken.accessToken, address, user.address.id));
    dispatch(getApplicantData(accessToken.accessToken));
    setEditMode(false);
    setShowSuccessMessage(true);
    setSave(true)
  };

  const handleUpdate = async () => {
    await dispatch(postUserAddress(accessToken.accessToken, address, user.id));
    dispatch(getApplicantData(accessToken.accessToken));
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    dispatch(getApplicantData(accessToken.accessToken));
  }, []);

  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div>
      {editIsError && (
        <SuccessMessage variant="danger" message="Address save failed :(" />
      )}
      {!editIsError && showSuccessMessage &&save &&(
        <SuccessMessage variant="success" message="Address saved successfully!" />
      )}
      {postIsError && (
        <SuccessMessage variant="danger" message="Address update failed :(" />
      )}
      {!postIsError && showSuccessMessage && !save && (
        <SuccessMessage variant="success" message="Address updated successfully!" />
      )}
      {user ? (
        <>
          <h5 className="d-flex mb-4">Address</h5>
          <span className="d-flex text-muted mb-2">
            Fill all fields with <span className="text-danger mx-2">*</span>  to update
          </span>
          <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Street"
           name="street"
           value={user.address&&!editMode?user.address.street:address.street}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Building number <span className="text-danger">*</span></Form.Label>
          <Form.Control 
          placeholder="Building number" 
          required
          name="building_number"
          value={user.address&&!editMode?user.address.building_number:address.building_number}
          onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
        <Col>
        <Form.Label className="d-flex">Apartment number </Form.Label>
          <Form.Control 
          placeholder="Apartment number" 
          name="apartment_number"
          value={user.address&&!editMode?user.address.apartment_number:address.apartment_number}
          onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Label className="d-flex">Postal code
        </Form.Label>
          <Form.Control 
          placeholder="Post code" 
           name="postal_code"
          value={user.address&&!editMode?user.address.postal_code:address.postal_code}
          onChange={handleChange}
           />
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Location<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="eg. Pumula South"
            required
            name="location"
          value={user.address&&!editMode?user.address.location:address.location}
          onChange={handleChange}
            />
        </Col>
        <Col></Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">Type of settlement<span className="text-danger">*</span></Form.Label>
          <Form.Control
           as="select"
          
            required 
            name="type_of_settlement"
          value={user.address&&!editMode?user.address.type_of_settlement:address.type_of_settlement}
          onChange={handleChange}
          >
               {!user.address && <option>Select</option>}
                {user.address && (
                  <option value={user.address.type_of_settlement} disabled>
                    {user.address.type_of_settlement}
                  </option>
                )}
            <option value="City">City</option>
            <option value="Village">Village</option>
          </Form.Control>
        </Col>
        <Col>
       
        <Form.Label className="d-flex">Province<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" required
    name="province"
    value={user.address&&!editMode?user.address.province:address.province}
    onChange={handleChange}
    >
      {!user.address && <option>Select</option>}
        {user.address && (
          <option value={user.address.province} disabled>
            {user.address.province}
          </option>
        )}
      <option value="Bulawayo">Bulawayo</option>
      <option value="Harare">Harare</option>
    </Form.Control>
  
        </Col>
      </Row>
    </Form>
    <Form className="my-3" onSubmit={handleSubmit}>
      <Row>
      <Col>
        <Form.Label className="d-flex">City<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="City"
            required
            name="city"
          value={user.address&&!editMode?user.address.city:address.city}
          onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label className="d-flex">Country<span className="text-danger">*</span></Form.Label>
    <Form.Control as="select" 
    required
    name="country"
    value={user.address&&!editMode?user.address.country:address.country}
    onChange={handleChange}
    >
      {!user.address && <option>Select</option>}
  {user.address && (
    <option value={user.address.country} disabled>
      {user.address.country}
    </option>
  )}
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="South Africa">South Africa</option>
    </Form.Control>
  
        </Col>
      </Row>
    </Form>
          <div className="d-flex justify-content-end">
            {!user.address ? (
              <Button variant="primary" className="px-3 main_bg" disabled={!isAddressValid()} onClick={handleUpdate}>
                Update
              </Button>
            ) : (
              <div>
                <Button variant="primary" className="px-3 main_bg" onClick={handleEditClick}>
                  {editMode ? "Cancel" : "Edit"}
                </Button>
                {editMode && (
                  <Button
                    variant="success"
                    className="ms-2 px-3"
                    type="submit"
                    form="personalDataForm"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Address;
