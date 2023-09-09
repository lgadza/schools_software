// import React, { useCallback } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import NiceModal, { useModal } from '@ebay/nice-modal-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

// export default NiceModal.create(({ user }) => {
//   const modal = useModal();
//   const [form] = Form.useForm();
//   const meta = {
//     initialValues: user,
//     fields: [
//       { key: 'name', label: 'Name', required: true },
//       { key: 'job', label: 'Job Title', required: true },
//     ],
//   };

//   const handleSubmit = useCallback(() => {
//     form.validateFields().then(() => {
//       const newUser = { ...form.getFieldsValue() };
//       // In a real case, you may call API to create or update user
//       if (!user) {
//         newUser.id = String(Date.now());
//       } else {
//         newUser.id = user.id;
//       }
//       modal.resolve(newUser);
//       modal.hide();
//     });
//   }, [modal, user, form]);

//   return (
//     <Modal
//       {...modal}
//       size="lg"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>
//           {user ? 'Edit User' : 'New User'}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form form={form}>
//           {meta.fields.map((field) => (
//             <Form.Group key={field.key}>
//               <Form.Label>{field.label}</Form.Label>
//               <Form.Control
//                 type="text"
//                 name={field.key}
//                 defaultValue={user ? user[field.key] : ''}
//                 required={field.required}
//               />
//             </Form.Group>
//           ))}
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={modal.hide}>Close</Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           <FontAwesomeIcon icon={faEdit} /> {user ? 'Update' : 'Create'}
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// });
