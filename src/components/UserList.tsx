// import React, { useMemo, useState } from 'react';
// import { Button, Table } from 'react-bootstrap';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import UserInfoModal from './UserInfoModal';
// import mockData from './mock';

// export default function UserList() {
//   const [users, setUsers] = useState(mockData);

//   const handleNewUser = (newUser) => {
//     setUsers([newUser, ...users]);
//   };

//   const handleEditUser = (newUser) => {
//     setUsers((prevUsers) => {
//       // Modify users immutably
//       const i = prevUsers.findIndex((u) => u.id === newUser.id);
//       const updated = { ...prevUsers[i], ...newUser };
//       const arr = [...prevUsers];
//       arr.splice(i, 1, updated);
//       return arr;
//     });
//   };

//   const columns = useMemo(
//     () => [
//       {
//         dataField: 'name',
//         text: 'Name',
//         width: '150px',
//       },
//       {
//         dataField: 'job',
//         text: 'Job Title',
//       },
//       {
//         dataField: 'edit',
//         text: 'Edit',
//         width: '100px',
//         formatter: (cell, user) => (
//           <Button
//             variant="link"
//             onClick={() => handleEditUser(user)}
//           >
//             <FontAwesomeIcon icon={faEdit} />
//           </Button>
//         ),
//       },
//     ],
//     [],
//   );

//   return (
//     <div>
//       <Button variant="primary" onClick={() => UserInfoModal.show().then(handleNewUser)}>
//         + New User
//       </Button>
//       <Table
//         striped
//         bordered
//         hover
//         style={{ marginTop: '20px' }}
//         keyField="id"
//         columns={columns}
//         data={users}
//       />
//     </div>
//   );
// }
