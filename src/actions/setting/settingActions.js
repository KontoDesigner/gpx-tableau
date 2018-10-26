import { ActionTypes as types } from '../../constants/setting/settingConstants'
import { beginAjaxCall, ajaxCallError } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function getJobFamilySuccess(jobFamily) {
    return {
      type: types.GET_JOBFAMILY_SUCCESS,
      data: { jobFamily: jobFamily }
    }
  }
  
  export function getJobFamily() {
    return async function (dispatch) {
      dispatch(beginAjaxCall())
  
      try {
        const jobFamily = await RestClient.Get(`setting/jobfamily`)
  
       
        dispatch(getJobFamilySuccess(jobFamily))
      } catch (error) {
        dispatch(ajaxCallError(error))
  
        throw error
      }
    }
  }

export function handleApplyOpen(val) {
  
    return {
   
       type: types.HANDLE_APPLYOPEN,
        data: { val: val }  
    }
}


export function handleSetting(setting) {
    return {
      type: types.HANDLE_SETTING,
      data: { setting: setting }
    }
  }



export function getSettingSuccess(setting) {
    return {
        type: types.GET_SETTING_SUCCESS,
        data: { setting: setting }
    }
}

export function getSetting() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const setting = await RestClient.Get(`setting/setting`)

            dispatch(getSettingSuccess(setting))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}




export function getJobFamiliesSuccess(jobFamilies) {
    return {
        type: types.GET_JOBFAMILIES_SUCCESS,
        data: { jobFamilies: jobFamilies }
    }
}



export function getJobFamilies() {
    return async function (dispatch) {
        dispatch(beginAjaxCall())

        try {
            const jobFamilies = await RestClient.Get(`setting/jobfamily`)

            dispatch(getJobFamiliesSuccess(jobFamilies))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }

    
}