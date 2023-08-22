// import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const AddHistory = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [newItem, setNewItem] = useState('');
//   const [items, onAddItem] = useState([]);

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleAddItem = () => {
//     onAddItem([...items, newItem]);
//     setNewItem('');
//     setShowModal(false);
//   };

//   return (
//     <>
//       {/* <Button onClick={handleOpenModal}>Open Todo List</Button> */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <div>
//           <h2>Todo List</h2>
//           <ul>
//             {items.map(item => (
//               <li key={item.id}>
//                 {item.text}
//                 <button onClick={() => handleDeleteItem(item)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           <input
//             type="text"
//             placeholder="Add new Notes"
//             value={newItem}
//             onChange={event => setNewItem(event.target.value)}
//           />
//           <button onClick={handleAddItem}>Save</button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default AddHistory;
