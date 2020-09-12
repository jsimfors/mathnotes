import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {
    NavLink,
    } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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
                    <ul>
                        <li key={subItems[0].name}><NavLink to={subItems[0].link?subItems[0].link:'/home'}>{subItems[0].label}</NavLink></li>
                        <li key={subItems[1].name}><NavLink to={subItems[1].link?subItems[1].link:'/home'}>{subItems[1].label}</NavLink></li>
                    </ul>
            {/* {Array.isArray(subItems) ? (
                <List> */}
                {/* <ul>
                {subItems.map((subItem) => {
                    return (
                    // <ListItem
                    //     key={subItem.name}
                    //     style={{ paddingLeft: 36 }}
                    //     button
                    //     dense
                    // >
                    //     <ListItemText>
                        <li key={subItem.name}>hi<NavLink to={subItem.link?subItem.link:'/home'}>ho{subItem.label}</NavLink></li>
                    //     </ListItemText>
                    // </ListItem>
                    )
                })}
                </ul> */}
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