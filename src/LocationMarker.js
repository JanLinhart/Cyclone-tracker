import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import cycloneIcon from '@iconify-icons/emojione/cyclone';
function LocationMarker({onClick}) {
    return (
        <div className="location-marker" onClick={onClick}>
         <Icon icon={cycloneIcon} className="location-icon"/>
        </div>
    )
}

export default LocationMarker
