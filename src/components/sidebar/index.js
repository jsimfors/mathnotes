import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {
    Route,
    NavLink,
    BrowserRouter,
    Link
    } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles.css"

function Sidebar({ items }) {
return (
    <div className="sidebar">
    <List disablePadding dense>
        {items.map(({ label, name, link, items: subItems, ...rest }) => {
        return (
            <React.Fragment key={name}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                    <span>{label}</span>
                </ListItem>
                </AccordionSummary>

                <AccordionDetails>
            {/* {Array.isArray(subItems) ? (
                <List> */}
                <ul>
                {subItems.map((subItem) => {
                    return (
                    // <ListItem
                    //     key={subItem.name}
                    //     style={{ paddingLeft: 36 }}
                    //     button
                    //     dense
                    // >
                    //     <ListItemText>
                        <li><NavLink to={subItem.link?subItem.link:'/home'}>{subItem.label}</NavLink></li>
                    //     </ListItemText>
                    // </ListItem>
                    )
                })}
                </ul>
                {/* </List>
            ) : null} */}
                </AccordionDetails>
            </Accordion>
            </React.Fragment>
        )
        })}
    </List>
    </div>
)
}
// function SidebarItem({ label, link, expand, items, depthStep = 10, depth = 0, ...rest }) {

//     return (
//       <>
//         <ListItem button dense {...rest}>
//           <ListItemText style={{ paddingLeft: depth * depthStep }}>
//             <NavLink to={link?link:'/home'}>{label}</NavLink>
//           </ListItemText>
//         </ListItem>
//         {Array.isArray(items) ? (
//           <List disablePadding dense>
//             {items.map((subItem) => (
//                 console.log(subItem) ,             

//               <SidebarItem
//                 key={subItem.name}
//                 depth={depth + 1}
//                 depthStep={depthStep}
//                 {...subItem}
//               />
//             ))}
//           </List>
//         ) : null}
//       </>
//     )
//   }
  
//   function Sidebar({ items, depthStep, depth }) {
//     return (
//       <div className="sidebar">
//         <List disablePadding dense>
//           {items.map((sidebarItem, index, expand) => (
//               console.log(sidebarItem) ,             
//             <SidebarItem 
//               key={`${sidebarItem.name}${index}`}
//               depthStep={depthStep}
//               depth={depth}
//               {...sidebarItem}
//             />
//           ))}
//         </List>
//       </div>
//     )
//   }

export default Sidebar