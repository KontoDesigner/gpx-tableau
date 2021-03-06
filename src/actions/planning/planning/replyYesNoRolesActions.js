import { ActionTypes as types } from '../../../constants/planning/planning/replyYesNoRolesConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getreplyYesNoRolesSuccess(replyYesNoRoles) {
    return {
        type: types.GET_REPLYYESNOROLES_SUCCESS,
        data: { replyYesNoRoles: replyYesNoRoles }
    }
}

export function getReplyYesNoRoles(sourcemarket = 'ALL', jobfamily = 'ALL',  positiontype = 'ALL',criteria = null) {
    return async function(dispatch) {
        dispatch(beginAjaxCall())

        try {
            //const replyYesNoRoles = await RestClient.Get(`reply/GetReplyYesNo`)
            const replyYesNoRoles = await RestClient.Get(`reply/GetReplyYesNo/${sourcemarket}/${positiontype}/${jobfamily}/${criteria !== null ? `${criteria}` : ''}`)

            //const replyYesNoRoles = await RestClient.Get(`positionassign/GetAllPositionsAssignData`)

            dispatch(getreplyYesNoRolesSuccess(replyYesNoRoles))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}

export function handleReplyYesNoRoles(replyYesNoRoles) {
    return {
        type: types.HANDLE_REPLYYESNOROLES,
        data: { replyYesNoRoles: replyYesNoRoles }
    }
}
