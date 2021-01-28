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
    <div className="sidebar" id="flervarre">
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
                        {subItems[1]?
                        <li key={subItems[1].name}><NavLink to={subItems[1].link?subItems[1].link:'/home'}>{subItems[1].label}</NavLink></li>
                        :
                        <div></div>
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
            </React.Fragment>
        )
        })}
    </List>
    </div>
)
}

export default Sidebar