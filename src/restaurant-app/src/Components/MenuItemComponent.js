import React, { useState, useEffect } from 'react';

function MenuItemComponent({menuitem}) {
    return (
        <tr>
            <td><label>{menuitem.name}</label></td>
            <td><label>{menuitem.price}</label></td>
        </tr>
    )
}

export default MenuItemComponent;
