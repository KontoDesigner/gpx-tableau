import { ActionTypes as types } from '../../../constants/staff/active/destinationConstants'
import { beginAjaxCall, ajaxCallError } from '../../ajaxStatusActions'
import RestClient from '../../../infrastructure/restClient'

export function getDestinationSuccess(destination) {
  return {
    type: types.GET_DESTINATION_SUCCESS,
    data: { destination: destination }
  }
}

export function getDestination() {
  return async function (dispatch) {
    dispatch(beginAjaxCall())

    dispatch(getDestinationSuccess([]))

    try {
      const destination = await RestClient.Get(`staff/destination`)

      dispatch(getDestinationSuccess(destination))
    } catch (error) {
      dispatch(ajaxCallError(error))

      throw error
    }
  }
}

export function handleDestination(destination) {
  return {
    type: types.HANDLE_DESTINATION,
    data: { destination: destination }
  }
}