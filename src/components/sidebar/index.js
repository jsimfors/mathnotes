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

function SidebarItem({ label, link, expand, items, depthStep = 10, depth = 0, ...rest }) {

    return (
      <>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <NavLink to={link?link:'/home'}>{label}</NavLink>
          </ListItemText>
        </ListItem>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </>
    )
  }
  
  function Sidebar({ items, depthStep, depth }) {
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <SidebarItem 
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </List>
      </div>
    )
  }

export default Sidebar