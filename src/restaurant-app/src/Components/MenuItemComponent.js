import React, { useState, useEffect } from 'react';

function MenuItemComponent({menuitem}) {
    console.log(menuitem)
    return (
        <tr>
            <td><label>{menuitem.name}</label></td>
            <td><label>{menuitem.category}</label></td>
            <td><label>{menuitem.price}</label></td>
        </tr>
    )
}

export default MenuItemComponent;
