

import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  editUserAddress,
  getUserData,
  postUserAddress,
} from "../../../../redux/actions";
import { AddressInterface } from "../../../../Types";
import { Dispatch } from "redux";
import { provinceCities, provinceOptions } from "../../../../assets/data/citiesAndProvince";

interface SuccessMessageProps {
  variant: "success" | "danger";
  message: string;
}
interface CityProps{
   label: string; value: string 
}
interface CityProvinceData {
  province: string;
  cities:CityProps [];
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

  const user = useSelector((state: RootState) => state.userData.data);

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
  const [citiesInProvince, setCitiesInProvince]=useState<CityProps[]>([]);
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
    dispatch(getUserData(accessToken.accessToken));
    setEditMode(false);
    setShowSuccessMessage(true);
    setSave(true)
  };

  const handleUpdate = async () => {
    await dispatch(postUserAddress(accessToken.accessToken, address, user.id));
    dispatch(getUserData(accessToken.accessToken));
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    dispatch(getUserData(accessToken.accessToken));
  }, []);

  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };
  // const handleProvinceChange = (value: string) => {
  //   // setSelectedProvince(value);
  //   setAddress((data) => ({
  //     ...data,
  //     province:value,
  //   }));
  //   // Reset selectedCity when province changes
  //   setAddress((data) => ({
  //     ...data,
  //     city: "",
  //   }));
  // };
  useEffect(() => {
    const cities = provinceCities
      .filter((city: CityProvinceData) => city.province === address.province)
      .flatMap((city: CityProvinceData) =>
        city.cities.map((cityInfo) => ({
          label: cityInfo.label,
          value: cityInfo.value,
        }))
      );
    setCitiesInProvince(cities);
  }, [address.province]);  
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
          <h5 className="d-flex mb-4 text-dark ">Address</h5>
          <span className="d-flex text-muted textSmallSize mb-2">
            Fill all fields with <span className="text-danger mx-2">*</span>  to update
          </span>
          <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Street <span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="Street"
           name="street"
           value={user.address&&!editMode?user.address.street:address.street}
            required 
            onChange={handleChange}
            />
        </Col>
        <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Building number <span className="text-danger">*</span></Form.Label>
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
    <Form  onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Apartment number </Form.Label>
          <Form.Control 
          placeholder="Apartment number" 
          name="apartment_number"
          value={user.address&&!editMode?user.address.apartment_number:address.apartment_number}
          onChange={handleChange}
          />
        </Col>
        <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Postal code
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
    <Form  onSubmit={handleSubmit}>
      <Row>
      <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Location<span className="text-danger">*</span></Form.Label>
          <Form.Control
           placeholder="eg. Pumula South"
            required
            name="location"
          value={user.address&&!editMode?user.address.location:address.location}
          onChange={handleChange}
            />
        </Col>
        <Col md={6} className="my-2"></Col>
      </Row>
    </Form>
    <Form  onSubmit={handleSubmit}>
      <Row>
      <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Type of settlement<span className="text-danger">*</span></Form.Label>
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
            <option value="city">City</option>
            <option value="village">Village</option>
          </Form.Control>
        </Col>
        <Col md={6} className="my-2">
       
        <Form.Label className="d-flex text-dark textMediumSize">Province<span className="text-danger">*</span></Form.Label>
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
        {provinceOptions.map((province:{value:string,label:string},index)=>{
          return(
            <option key={index} value={province.value}>{province.label}</option>
          )
        })}
    </Form.Control>
        </Col>
      </Row>
    </Form>
    <Form  onSubmit={handleSubmit}>
      <Row>
      <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">City<span className="text-danger">*</span></Form.Label>
          <Form.Control
          as="select"
            required
            name="city"
          value={user.address&&!editMode?user.address.city:address.city}
          onChange={handleChange}
            >
               {!user.address && <option>Select</option>}
        {user.address && (
          <option value={user.address.city} disabled>
            {user.address.city}
          </option>
        )}
        {citiesInProvince.map((city:{value:string,label:string},index)=>{
          return(
            <option key={index} value={city.value}>{city.label}</option>
          )
        })}
              </Form.Control>
        </Col>
        <Col md={6} className="my-2">
        <Form.Label className="d-flex text-dark textMediumSize">Country<span className="text-danger">*</span></Form.Label>
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
              <Button variant="primary" className="px-3 content_bg-2 main_bg textSmallSize" disabled={!isAddressValid()} onClick={handleUpdate}>
                Update
              </Button>
            ) : (
              <div>
                <Button variant="primary" className="px-3 main_bg content_bg-2" onClick={handleEditClick}>
                  {editMode ? "Cancel" : "Edit"}
                </Button>
                {editMode && (
                  <Button
                    variant="success"
                    className="ms-2 px-3 textSmallSize"
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
        <p className="textSmallSize">Loading...</p>
      )}
    </div>
  );
};

export default Address;
