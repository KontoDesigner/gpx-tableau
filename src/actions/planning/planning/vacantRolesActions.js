import { ActionTypes as types } from '../../../constants/planning/planning/vacantRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getVacantRolesSuccess(vacantRoles) {
  return {
    type: types.GET_VACANTROLES_SUCCESS,
    data: { vacantRoles: vacantRoles }
  }
}

export function getVacantRoles(sourcemarket = 'ALL', criteria = null) {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    try {
   
      
      const vacantRoles = await RestClient.Get(`positionassign/GetAllUnAssignedPositions`)

      //For some reason we need to reset value here, (bug when loading in new data with filter), don't touch h3h3
      dispatch(handleVacantRoles([]))

      dispatch(getVacantRolesSuccess(vacantRoles))
    } catch (error) { 
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleVacantRoles(vacantRoles) {
  return {
    type: types.HANDLE_VACANTROLES,
    data: { vacantRoles: vacantRoles }
  }
}
