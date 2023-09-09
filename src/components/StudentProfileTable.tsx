import { faCheck, faPencil, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./UploadFile.css";

const StudentProfileTable = (): JSX.Element => {
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [name, setName] = useState("Louis Gadza");

  const [isDateOfBirthEditing, setIsDateOfBirthEditing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("11-09-1998");

  const [isGenderEditing, setIsGenderEditing] = useState(false);
  const [gender, setGender] = useState("male");

  const [isTelEditing, setIsTelEditing] = useState(false);
  const [tel, setTel] = useState("793433455");

  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [emailAddress, setEmailAddress] = useState("louis@gmail.com");

  const updateMe = () => {
    // Your update function logic
    console.log("Changes saved!");
  };

  return (
    <table className="student-table candidate-details-field w-100">
      <tbody>
        <tr>
          <td>Full-name</td>
          <td>
            {!isNameEditing ? (
              name
            ) : (
              <Form.Group className="w-100 px-3 edit-text mt-2">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-0 pl-0"
              />
            </Form.Group>
            )}
          </td>
          <td>
              {!isNameEditing ? (
                <span className="d-flex justify-content-end">
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faPencil}
                    onClick={() => setIsNameEditing(true)}
                  />
                </span>
              ) : (
                <span className="d-flex justify-content-end align-items-center">
                  <FontAwesomeIcon
                    className="text-success cursor-pointer"
                    icon={faCheck}
                    onClick={() => {
                      setIsNameEditing(false);
                      updateMe();
                    }}
                  />
                  <FontAwesomeIcon
                    className="ps-3 text-danger cursor-pointer"
                    icon={faTimes}
                    style={{ fontSize: "0.8rem" }}
                    onClick={() => {
                      setIsNameEditing(false);
                      setName("Louis Gadza");
                    }}
                  />
                </span>
              )}
          </td>
        </tr>
        <tr>
          <td>Date of birth</td>
          <td>
            {!isDateOfBirthEditing ? (
              dateOfBirth
            ) : (
              <Form.Group className="w-100 px-3 edit-text mt-2">
                <Form.Control
                  type="text"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="py-0 pl-0"
                />
              </Form.Group>
            )}
          </td>
          <td>
            {!isDateOfBirthEditing && (
              <span className="d-flex justify-content-end">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faPencil}
                  onClick={() => setIsDateOfBirthEditing(true)}
                />
              </span>
            )}
            {isDateOfBirthEditing && (
              <span className="d-flex align-items-center justify-content-end">
                <FontAwesomeIcon
                  className="text-success cursor-pointer"
                  icon={faCheck}
                  onClick={() => {
                    setIsDateOfBirthEditing(false);
                    updateMe();
                  }}
                />
                <FontAwesomeIcon
                  className="ps-3 text-danger cursor-pointer"
                  icon={faTimes}
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => {
                    setIsDateOfBirthEditing(false);
                    setDateOfBirth("11-09-1998");
                  }}
                />
              </span>
            )}
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            {!isGenderEditing ? (
              gender
            ) : (
              <Form.Group className="w-100 px-3 edit-text mt-2">
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="py-0 pl-0"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Control>
              </Form.Group>
            )}
          </td>
          <td>
            {!isGenderEditing && (
              <span className="d-flex justify-content-end">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faPencil}
                  onClick={() => setIsGenderEditing(true)}
                />
              </span>
            )}
            {isGenderEditing && (
              <span className="d-flex align-items-center justify-content-end">
                <FontAwesomeIcon
                  className="text-success cursor-pointer"
                  icon={faCheck}
                  onClick={() => {
                    setIsGenderEditing(false);
                    updateMe();
                  }}
                />
                <FontAwesomeIcon
                  className="ps-3 text-danger cursor-pointer"
                  icon={faTimes}
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => {
                    setIsGenderEditing(false);
                    setGender("male");
                  }}
                />
              </span>
            )}
          </td>
        </tr>  
        <tr>
          <td>Mobile No</td>
          <td>
            {!isTelEditing ? (
              <a className="header" href={`tel:${tel}`}>
                {tel}
              </a>
            ) : (
              <Form.Group className="w-100 px-3 edit-text mt-2">
                <Form.Control
                  type="text"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="py-0 pl-0"
                />
              </Form.Group>
            )}
          </td>
          <td>
            {!isTelEditing && (
              <span className="d-flex justify-content-end">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faPencil}
                  onClick={() => setIsTelEditing(true)}
                />
              </span>
            )}
            {isTelEditing && (
              <div className="d-flex align-items-center justify-content-end">
                <FontAwesomeIcon
                  className="text-success cursor-pointer me-2"
                  icon={faCheck}
                  onClick={() => {
                    setIsTelEditing(false);
                    updateMe();
                  }}
                />
                <FontAwesomeIcon
                  className="ps-3 text-danger cursor-pointer"
                  icon={faTimes}
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => {
                    setIsTelEditing(false);
                    setTel("793433455");
                  }}
                />
              </div>
            )}
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            {!isEmailEditing ? (
              <a className="header" href={`mailto:${emailAddress}`}>
                {emailAddress}
              </a>
            ) : (
              <Form.Group className="w-100 px-3 edit-text mt-2">
                <Form.Control
                  type="text"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="py-0 pl-0"
                />
              </Form.Group>
            )}
          </td>
          <td>
            {!isEmailEditing && (
              <span className="d-flex justify-content-end">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faPencil}
                  onClick={() => setIsEmailEditing(true)}
                />
              </span>
            )}
            {isEmailEditing && (
              <span className="d-flex align-items-center justify-content-end">
                <FontAwesomeIcon
                  className="text-success cursor-pointer"
                  icon={faCheck}
                  onClick={() => {
                    setIsEmailEditing(false);
                    updateMe();
                  }}
                />
                <FontAwesomeIcon
                  className="ps-3 text-danger cursor-pointer"
                  icon={faTimes}
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => {
                    setIsEmailEditing(false);
                    setEmailAddress("louis@gmail.com");
                  }}
                />
              </span>
            )}
          </td>
        </tr>
        <tr>
          <td>Citizenship</td>
          <td>Zimbabwe</td>

        </tr>
      </tbody>
    </table>
  );
};
export default StudentProfileTable;
// import { faCheck, faPencil, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { Form } from "react-bootstrap";
// import "./UploadFile.css";

// const StudentProfileTable = (): JSX.Element => {
//   const [isNameEditing, setIsNameEditing] = useState(false);
//   const [name, setName] = useState("Louis Gadza");

//   const [isDateOfBirthEditing, setIsDateOfBirthEditing] = useState(false);
//   const [dateOfBirth, setDateOfBirth] = useState("11-09-1998");

//   const [isGenderEditing, setIsGenderEditing] = useState(false);
//   const [gender, setGender] = useState("male");

//   const [isTelEditing, setIsTelEditing] = useState(false);
//   const [tel, setTel] = useState("793433455");

//   const [isEmailEditing, setIsEmailEditing] = useState(false);
//   const [emailAddress, setEmailAddress] = useState("louis@gmail.com");

//   const updateMe = () => {
//     // Your update function logic
//     console.log("Changes saved!");
//   };

//   const renderTextInputField = (label: string, value: string, setValue: (value: string) => void, isEditing: boolean) => {
//     if (!isEditing) {
//       return <span>{value}</span>;
//     } else {
//       return (
//         <Form.Group className=" w-100 px-3 d-flex justify-content-between edit-text mt-2">
//           <Form.Control
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="py-0 pl-0"
//           />
//           <div className="d-flex justify-content-end mt-2">
//             <FontAwesomeIcon
//               className="text-success cursor-pointer"
//               icon={faCheck}
//               onClick={() => {
//                 setIsNameEditing(false);
//                 updateMe();
//               }}
//             />
//             <FontAwesomeIcon
//               className="ps-3 text-danger cursor-pointer"
//               icon={faTimes}
//               style={{ fontSize: "0.8rem" }}
//               onClick={() => {
//                 setIsNameEditing(false);
//                 setValue(label === "Full-name" ? "Louis Gadza" : "11-09-1998");
//               }}
//             />
//           </div>
//         </Form.Group>
//       );
//     }
//   };

//   return (
//     <ul className="student-list candidate-details-field w-100">
//       <li className="d-flex justify-content-between my-3">
//         <span>Full-name:</span>
//           {renderTextInputField("Full-name", name, setName, isNameEditing)}
//         <span>
//           {!isNameEditing && (
//             <FontAwesomeIcon
//               className="cursor-pointer"
//               icon={faPencil}
//               onClick={() => setIsNameEditing(true)}
//             />
//           )}
//         </span>
//       </li>
//       <li className="d-flex justify-content-between my-3">
//         <span>Date of birth:</span>
//         <span>
//           {renderTextInputField("Date of birth", dateOfBirth, setDateOfBirth, isDateOfBirthEditing)}
//           {!isDateOfBirthEditing && (
//             <FontAwesomeIcon
//               className="cursor-pointer"
//               icon={faPencil}
//               onClick={() => setIsDateOfBirthEditing(true)}
//             />
//           )}
//         </span>
//       </li>
//       <li className="d-flex justify-content-between my-3">
//         <span>Gender:</span>
//         <span>
//           {renderTextInputField("Gender", gender, setGender, isGenderEditing)}
//           {!isGenderEditing && (
//             <FontAwesomeIcon
//               className="cursor-pointer"
//               icon={faPencil}
//               onClick={() => setIsGenderEditing(true)}
//             />
//           )}
//         </span>
//       </li>
//       <li className="d-flex justify-content-between my-3">
//         <span>Mobile No:</span>
//         <span>
//           {renderTextInputField("Mobile No", tel, setTel, isTelEditing)}
//           {!isTelEditing && (
//             <FontAwesomeIcon
//               className="cursor-pointer"
//               icon={faPencil}
//               onClick={() => setIsTelEditing(true)}
//             />
//           )}
//         </span>
//       </li>
//       <li className="d-flex justify-content-between my-3">
//         <span>Email:</span>
//         <span>
//           {renderTextInputField("Email", emailAddress, setEmailAddress, isEmailEditing)}
//           {!isEmailEditing && (
//             <FontAwesomeIcon
//               className="cursor-pointer"
//               icon={faPencil}
//               onClick={() => setIsEmailEditing(true)}
//             />
//           )}
//         </span>
//       </li>
//       <li className="d-flex justify-content-between my-3">
//         <span>Citizenship:</span>
//         <span>Zimbabwe</span>
//       </li>
//     </ul>
//   );
// };

// export default StudentProfileTable;
