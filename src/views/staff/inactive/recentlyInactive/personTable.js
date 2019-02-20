import React from 'react'
import { ContextMenu, MenuItem } from 'react-contextmenu'
import Table from '../../../../components/table.js'

const columns = [
  { label: 'Name', dataKey: 'firstNameLastName' },
  { label: 'SourceMarket', dataKey: 'sourceMarket' },
  { label: 'PositionType', dataKey: 'positionType' },
  { label: 'Driver', dataKey: 'driver' },
 // { label: 'Concept Hotel', dataKey: 'concepthotel' }
];

const PersonTable = (props) => {
  function onContextMenuClick(e, data) {
    
    //alert(data.mplID)
  // console.log(data,e,test,hello)
  
  props.toogleAbsentStaffModal(data.staffID) 
    
  }
 
  function onContextMenuClick2(e, data) {
   
      //alert(data.mplID)
    // console.log(data,e,test,hello)
    
    props.toogleResignStaffModal(data.staffID) 
      
    }

    function onContextMenuClick3(e, data) {
     
        //alert(data.mplID)
      // console.log(data,e,test,hello)
      
      props.toogleSendMailModal(data.staffID) 
        
      }

      function onContextMenuClick4(e, data) {
     
       //alert(data.mplID)
     // console.log(data,e,test,hello)
     
     props.toogleRemoveStaffModal(data.staffID) 
       
     }

const contextMenuId = props.index + '-recentlyInactiveContextMenu'

return (
 <div>
<ContextMenu id={contextMenuId}>
   <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick}>
     Mark As Absent
       </MenuItem>
   <MenuItem data={{foo: 'bar'}} onClick={onContextMenuClick2}>
     Mark As Resign
       </MenuItem>

     <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick3}>
     Send Mail Using Template
       </MenuItem>

          <MenuItem data={{ foo: 'bar' }} onClick={onContextMenuClick4}>
     Move Staff To Archive
       </MenuItem>

   </ContextMenu>

      <Table
        list={props.staffs}
        contextMenuId={contextMenuId}
        columns={columns}
        checkbox={true}
        identifier={'staffID'}
        edit={props.edit}
        updateSelectedState={props.handleSelectedStaff}
        selected={props.selectedStaff}
      />
    </div >
  )
}

export default PersonTable