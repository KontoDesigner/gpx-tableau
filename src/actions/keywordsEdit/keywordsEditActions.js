import { ActionTypes as types } from '../../constants/setting/keywordsEditConstants'
import { beginAjaxCall, ajaxCallError, endAjaxCall } from '../ajaxStatusActions'
import RestClient from '../../infrastructure/restClient'

export function handleKeyValueField(field, val) {
    debugger;
    return {
         
        type: types.HANDLE_KEYVALUE_FIELD,
        data: { field: field, val: val }
    }
}
  
export function handleInputField(field, val) {

    return {
        type: types.HANDLE_INPUT_FIELD, 
        data: { field: field, val: val }
    }
} 

export function handleFilterFromSuccess(from) {
    return {
        type: types.HANDLE_FILTER_FROM,
        data: { from: from }
    }
}




export function getKeywordsSuccess(keywords) {
    return {
        type: types.GET_KEYWORDS_SUCCESS,
        data: { keywords: keywords }
    }
}

export function getKeywordName(keywordname) {
    // console.log('Templatename', templatename);
     return async function (dispatch) {
         dispatch(beginAjaxCall())
         try {
 
          //  const staff = await RestClient.Get(`staff/${staffId}`)
     
            const keywords = await RestClient.Get(`setting/${keywordname}`)
            
            if (keywords) {
                 keywords.keywordValues = keywords.keywordValues  ?  keywords.keywordValues.split(',') : []
           
             }
                
          debugger;



            dispatch(endAjaxCall())
           
           
             dispatch(getKeywordsSuccess(keywords))
         } catch (error) {
             dispatch(ajaxCallError(error))
 
             throw error
         }
     }
 }

export function getKeywords(keywordname) {
   // console.log('Templatename', templatename);
    return async function (dispatch) {
        dispatch(beginAjaxCall())
        try {
debugger;
         //  const staff = await RestClient.Get(`staff/${staffId}`)
    
           const keywords = await RestClient.Get(`settings/${keywordname}`)
           dispatch(endAjaxCall())
          
          
            dispatch(getKeywordsSuccess(keywords))
        } catch (error) {
            dispatch(ajaxCallError(error))

            throw error
        }
    }
}
