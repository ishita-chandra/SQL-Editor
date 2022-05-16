import React from 'react'
import './table.css'

// ["RegionId", "Region"]
function table(props) {
  return (
    
        <table>
			{/* Header  */}
            <tr>
				{props.headers.map(function(h){
					return <th>{h}</th>
				})}
			</tr>

			{/* Rows  */}
        	{props.data.map(function(t){
        	    return (
					<tr>
						{t.map(function(k){
						return <td>{k}</td>
						})}
					</tr>
				)})}
        </table>

  )
}

export default table