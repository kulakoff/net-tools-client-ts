// import {
//   Box,
//   Button,
//   ButtonGroup,
//   ClickAwayListener,
//   FormControl,
//   Grow,
//   InputLabel,
//   MenuItem,
//   MenuList,
//   Paper,
//   Popper,
//   Select,
//   TextField,
// } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
// import { SelectChangeEvent } from "@mui/material/Select";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import React, { useState } from "react";

// type Props = {};

// const DevicesPage = (props: Props) => {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLDivElement>(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const [value, setValue] = useState<string>("");

//   const [type, setType] = useState<string>("");

//   const handleChange = (event: SelectChangeEvent) => {
//     setType(event.target.value as string);
//   };

//   const options = [
//     "Serial Number",
//     "Mac Address",
//     ];

//   const handleClick = () => {
//     console.info(`You clicked ${options[selectedIndex]}`);
//   };

//   const handleMenuItemClick = (
//     event: React.MouseEvent<HTMLLIElement, MouseEvent>,
//     index: number
//   ) => {
//     setSelectedIndex(index);
//     setOpen(false);
//   };

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           "& > :not(style)": { m: 1, width: "25ch" },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           label="Serial Number"
//           variant="outlined"
//           size="medium"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <Button variant="contained" size="large" endIcon={<SendIcon />}>
//           Send
//         </Button>
//         <h5>text: {value}</h5>
//       </Box>
//       <Box sx={{ minWidth: 120 }}>

//       <TextField
//           label="Serial Number"
//           variant="outlined"
//           size="medium"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />

//         <ButtonGroup
//           variant="contained"
//           ref={anchorRef}
//           aria-label="split button"
//         >
//           <Button onClick={handleClick}>{options[selectedIndex]}</Button>
//           <Button
//             size="small"
//             aria-controls={open ? "split-button-menu" : undefined}
//             aria-expanded={open ? "true" : undefined}
//             aria-label="select merge strategy"
//             aria-haspopup="menu"
//             onClick={handleToggle}
//           >
//             <ArrowDropDownIcon />
//           </Button>
//         </ButtonGroup>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === "bottom" ? "center top" : "center bottom",
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList id="split-button-menu" autoFocusItem>
//                     {options.map((option, index) => (
//                       <MenuItem
//                         key={option}
//                         disabled={index === 2}
//                         selected={index === selectedIndex}
//                         onClick={(event) => handleMenuItemClick(event, index)}
//                       >
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </Box>
//     </>
//   );
// };

// export default DevicesPage;
