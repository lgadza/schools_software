import { Dispatch } from "redux";
import { AddressInterface, ApplicantRegistration, UserChatting } from "../../Types";
import { LoginCredentialsInterface } from "../../components/Login";
import { Message } from "../../components/MakronexusAI";
export const IS_TOKEN_EXPIRED="IS_TOKEN_EXPIRED"

export const APPLICANT_REGISTRATION_ERROR_RESPONSE="APPLICANT_REGISTRATION_ERROR_RESPONSE"
export const APPLICANT_REGISTRATION="APPLICANT_REGISTRATION"
export const APPLICANT_REGISTRATION_ERROR="APPLICANT_REGISTRATION_ERROR"
export const APPLICANT_REGISTRATION_LOADING="APPLICANT_REGISTRATION_LOADING"

export const GET_APPLICANT_DATA="GET_APPLICANT_DATA"
export const GET_APPLICANT_DATA_ERROR="GET_APPLICANT_DATA_ERROR"
export const GET_APPLICANT_DATA_LOADING="GET_APPLICANT_DATA_LOADING"


export const GET_ALL_AI_CHATS="GET_ALL_AI_CHATS"
export const GET_ALL_AI_CHATS_ERROR="GET_ALL_AI_CHATS_ERROR"
export const GET_ALL_AI_CHATS_LOADING="GET_ALL_AI_CHATS_LOADING"

export const EDIT_USER_ADDRESS="EDIT_USER_ADDRESS"
export const EDIT_USER_ADDRESS_ERROR="EDIT_USER_ADDRESS_ERROR"
export const EDIT_USER_ADDRESS_LOADING="EDIT_USER_ADDRESS_LOADING"

export const GET_GUARDIAN_TYPES="GET_GUARDIAN_TYPES"
export const GET_GUARDIAN_TYPES_ERROR="GET_GUARDIAN_TYPES_ERROR"
export const GET_GUARDIAN_TYPES_LOADING="GET_GUARDIAN_TYPES_LOADING"

export const POST_USER_ADDRESS="POST_USER_ADDRESS"
export const POST_USER_ADDRESS_ERROR="POST_USER_ADDRESS_ERROR"
export const POST_USER_ADDRESS_LOADING="POST_USER_ADDRESS_LOADING"

export const GET_USER_ADDRESS="GET_USER_ADDRESS"
export const GET_USER_ADDRESS_ERROR="GET_USER_ADDRESS_ERROR"
export const GET_USER_ADDRESS_LOADING="GET_USER_ADDRESS_LOADING"

export const LOGOUT_USER="LOGOUT_USER"


export const EDIT_APPLICANT_DATA="EDIT_APPLICANT_DATA"
export const EDIT_APPLICANT_DATA_ERROR="EDIT_APPLICANT_DATA_ERROR"
export const EDIT_APPLICANT_DATA_LOADING="EDIT_APPLICANT_DATA_LOADING"
export const LOGIN_APPLICANT="LOGIN_APPLICANT"
export const LOGIN_APPLICANT_ERROR="LOGIN_APPLICANT_ERROR"
export const LOGIN_APPLICANT_LOADING="LOGIN_APPLICANT_LOADING"
export const ACTIVE_NAV="ACTIVE_NAV"

const BE_PROD_URL=import.meta.env.VITE_BE_PROD_URL
export const setChatMessages = (messages: Message[]) => ({
    type: 'SET_CHAT_MESSAGES',
    payload: messages,
  });
  
  // redux/reducers/chatReducer.ts
  interface ChatState {
    messages: Message[];
  }
  
  const initialState: ChatState = {
    messages: [],
  };
  export const logoutUser = () => ({
  
    
    type: LOGOUT_USER,
  });
 export const chatReducer = (state = initialState, action: { type: string; payload: Message[] }) => {
    switch (action.type) {
      case 'SET_CHAT_MESSAGES':
        return {
          ...state,
          messages: action.payload,
        };
      default:
        return state;
    }
  };

export const ApplicantLogin=(cred:LoginCredentialsInterface)=>{
    return async(dispatch:Dispatch)=>{
        const options={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(cred)
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/applicants/login`,options)
            if(response.ok){
                const accessToken=await response.json()
                dispatch({
                    type:LOGIN_APPLICANT,
                    payload:accessToken
                })
                setTimeout(()=>{
                    dispatch({
                     type:LOGIN_APPLICANT_LOADING,
                     payload:false,
                    });
                 },100);
            }else{
                console.log("error")
                dispatch({
                    type:LOGIN_APPLICANT_LOADING,
                    payload:false,
                });
                dispatch({
                    type:LOGIN_APPLICANT_ERROR,
                    payload:true,
                })
                
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:LOGIN_APPLICANT_LOADING,
                payload:false,
            });
            dispatch({
                type:LOGIN_APPLICANT_ERROR,
                payload:true,
            })
        }
    }
}
// export const getAllAiChats = (user_id?:string) => {
    
//     return async (dispatch:Dispatch)=>{
//         const options:RequestInit={
//             method:"GET",
//             headers:{
//                 Accept:"application.json",
//                 "Content-Type":"application/json",
//             },
            
//         }
         
//         try{
//             const response=await fetch(`${BE_PROD_URL}/ai/${user_id}/chats`,options)
//             if(response.ok){
//                 const chats=await response.json();
//                 console.log(chats,"CHATS")
//                 dispatch({
//                     type:GET_ALL_AI_CHATS,
//                     payload:chats
//                 });
//                 setTimeout(()=>{
//                    dispatch({
//                     type:GET_ALL_AI_CHATS_LOADING,
//                     payload:false,
//                    });
//                 },100);
               

//             }else{
//                 console.log("error")
//                 dispatch({
//                     type:GET_ALL_AI_CHATS_LOADING,
//                     payload:false,
//                 });
//                 dispatch({
//                     type:GET_ALL_AI_CHATS_ERROR,
//                     payload:true,
//                 })
//             }
//         }catch(error){
//             console.log(error)
//             dispatch({
//                 type:GET_ALL_AI_CHATS_LOADING,
//                 payload:false,
//             });
//             dispatch({
//                 type:GET_ALL_AI_CHATS_ERROR,
//                 payload:true,
//             })
//         }
//     }
//   };
export const getAllAiChats = async(token:string,user_id?:string) => {
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`,
            },    
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/ai/${user_id}/chats`,options)
            if(response.ok){
                const chats=await response.json();
                return chats
            }else{
                console.log("error")
            }
        }catch(error){
            console.log(error)
        }
    };
export const getChatMessages = async(token:string,chat_id:string,user_id?:string) => {
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`,
            },    
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/ai/${user_id}/chats/${chat_id}`,options)
            if(response.ok){
                const chat=await response.json();
                return chat
            }else{
                console.log("error")
            }
        }catch(error){
            console.log(error)
        }
    };
export const chatWithAi = async (token:string,messages: UserChatting[],model:string,question:string,currentChat:string,applicant_id?:string) => {
    const options:RequestInit={
                    method:"POST",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body:JSON.stringify({message:messages.map((message)=>message.message).join("\n"),model,applicant_id,question})
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/chats/${currentChat}/messages`,options)
      if (response.ok) {
        const answer = await response.json();
        return answer; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
export const imageQuery = async (token:string,model:string,prompt:string,currentChat:string,applicant_id?:string) => {
    const options:RequestInit={
                    method:"POST",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body:JSON.stringify({model,applicant_id,prompt})
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/chats/${currentChat}/image-search`,options)
      if (response.ok) {
        const answer = await response.json();
        return answer; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
export const newChat = async (token:string,applicant_id:string,) => {
    const options:RequestInit={
                    method:"POST",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`,
                    },
                   
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/${applicant_id}/chats`,options)
      if (response.ok) {
        const newChat = await response.json();
        return newChat.id; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
export const deleteChat = async (token:string,chat_id:string,applicant_id?:string,) => {
    const options:RequestInit={
                    method:"DELETE",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                        Authorization: `Bearer ${token}`,
                    },
                   
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/${applicant_id}/chats/${ chat_id}`,options)
      if (response.ok) {
        const res = await response.json();
        console.log(res," CHAT DELETED")
      }
    } catch (error) {
      console.log(error,"ERROR DELETING  CHAT")
    }
  };
export const deleteAllChats = async (token:string,applicant_id?:string,) => {
    const options:RequestInit={
                    method:"DELETE",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                    },
                   
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/${applicant_id}/chats`,options)
      if (response.ok) {
        getAllAiChats(token,applicant_id)
        const res = await response.json();
        console.log(res," ALL CHATS DELETED")
      } 
    } catch (error) {
      console.log(error,"ERROR DELETING ALL CHATS")
    }
  };
export const getEngines = async () => {
    const options:RequestInit={
                    method:"GET",
                    headers:{
                        Accept:"application.json",
                        "Content-Type":"application/json",
                    },
                   
                }
    try {
      const response=await fetch(`${BE_PROD_URL}/ai/models`,options)
      if (response.ok) {
        const models = await response.json();
        return models; 
      } else {
        console.log("ERROR")
      }
    } catch (error) {
      console.log(error)
    }
  };
export const ApplicantRegister = (formData:ApplicantRegistration) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/applicants/register`,options)
            if(response.ok){
                const status=await response.json();
                dispatch({
                    type:APPLICANT_REGISTRATION,
                    payload:status
                });
                setTimeout(()=>{
                   dispatch({
                    type:APPLICANT_REGISTRATION_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:APPLICANT_REGISTRATION_LOADING,
                    payload:false,
                });
                dispatch({
                    type:APPLICANT_REGISTRATION_ERROR,
                    payload:true,
                })
                const errorStatus=await response.json()
                console.log(errorStatus)
                dispatch({
                    type:APPLICANT_REGISTRATION_ERROR_RESPONSE,
                    payload:errorStatus,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:APPLICANT_REGISTRATION_LOADING,
                payload:false,
            });
            dispatch({
                type:APPLICANT_REGISTRATION_ERROR,
                payload:true,
            })
        }
    }
  };
export const editApplicantData = (accessToken:string,formData:ApplicantRegistration,user_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"PUT",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(formData)
            
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/applicants/${user_id}`,options)
            if(response.ok){
                const personalData=await response.json();
                dispatch({
                    type:EDIT_APPLICANT_DATA,
                    payload:personalData
                });
                setTimeout(()=>{
                   dispatch({
                    type:EDIT_APPLICANT_DATA_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:EDIT_APPLICANT_DATA_LOADING,
                    payload:false,
                });
                dispatch({
                    type:EDIT_APPLICANT_DATA_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:EDIT_APPLICANT_DATA_LOADING,
                payload:false,
            });
            dispatch({
                type:EDIT_APPLICANT_DATA_ERROR,
                payload:true,
            })
        }
    }
  };
export const postUserAddress = (accessToken:string,address:AddressInterface,user_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"POST",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(address)
            
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/address/${user_id}`,options)
            if(response.ok){
                const address=await response.json();
                dispatch({
                    type:POST_USER_ADDRESS,
                    payload:address
                });
                setTimeout(()=>{
                   dispatch({
                    type:POST_USER_ADDRESS_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:POST_USER_ADDRESS_LOADING,
                    payload:false,
                });
                dispatch({
                    type:POST_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            dispatch({
                type:POST_USER_ADDRESS_LOADING,
                payload:false,
            });
            dispatch({
                type:POST_USER_ADDRESS_ERROR,
                payload:true,
            })
        }
    }
  };
export const editUserAddress = (accessToken:string,address:AddressInterface,address_id:string) => {
    
    return async (dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"PUT",
            headers:{
                Accept:"application.json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
            body:JSON.stringify(address)
            
        }
        try{
            const response=await fetch(`${BE_PROD_URL}/address/${address_id}`,options)
            if(response.ok){
                const address=await response.json();
                dispatch({
                    type:EDIT_USER_ADDRESS,
                    payload:address
                });
                setTimeout(()=>{
                   dispatch({
                    type:EDIT_USER_ADDRESS_LOADING,
                    payload:false,
                   });
                },100);
            }else{
                console.log("error")
                dispatch({
                    type:EDIT_USER_ADDRESS_LOADING,
                    payload:false,
                });
                dispatch({
                    type:EDIT_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
        }catch(error){
            console.log(error)
            console.log(error)
            dispatch({
                type:EDIT_USER_ADDRESS_LOADING,
                payload:false,
            });
            dispatch({
                type:EDIT_USER_ADDRESS_ERROR,
                payload:true,
            })
        }
    }
  };

  export const  getApplicantData=(accessToken:string)=>{
    

    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch(`${BE_PROD_URL}/applicants/me`,options)
                
                if(response.ok){
                    const data= await response.json()
                    dispatch({
                        type:IS_TOKEN_EXPIRED,
                        payload:false,
                    })
                    dispatch({
                        type:GET_APPLICANT_DATA,
                        payload:data,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_APPLICANT_DATA_LOADING,
                            payload:false
                        })
                    },100);

                }else if (response.status===401){
                    console.log("TOKEN EXPIRED")
                      dispatch({
                        type:IS_TOKEN_EXPIRED,
                        payload:true,
                    })
                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_APPLICANT_DATA_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_APPLICANT_DATA_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_APPLICANT_DATA_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_APPLICANT_DATA_ERROR,
                    payload:true,
                })
            }
    }
}
  export const  getUserAddress=(accessToken:string,user_id:string)=>{
    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch(`${BE_PROD_URL}/address/${user_id}`,options)
                
                if(response.ok){
                    const address= await response.json()
                    dispatch({
                        type:GET_USER_ADDRESS,
                        payload:address,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_USER_ADDRESS_LOADING,
                            payload:false
                        })
                    },100);

                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_USER_ADDRESS_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_USER_ADDRESS_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_USER_ADDRESS_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_USER_ADDRESS_ERROR,
                    payload:true,
                })
            }
    }
}
  export const  getGuardianType=()=>{
    
    return async(dispatch:Dispatch)=>{
        const options:RequestInit={
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                // Authorization:"Bearer " + `${accessToken}`
            },
        };

            try{
                const response=await fetch(`${BE_PROD_URL}/guardians/types/all`,options)
                
                if(response.ok){
                    const guardian_type= await response.json()
                    dispatch({
                        type:GET_GUARDIAN_TYPES,
                        payload:guardian_type,
                    })
                    setTimeout(()=>{
                        dispatch({
                            type:GET_GUARDIAN_TYPES_LOADING,
                            payload:false
                        })
                    },100);

                }else{
                    console.log("ERROR")
                    dispatch({
                        type:GET_GUARDIAN_TYPES_LOADING,
                        payload:false,
                    })
                    dispatch({
                        type:GET_GUARDIAN_TYPES_ERROR,
                        payload:true
                    })
                }
            }
            catch(error){
                console.log(error,"Error")
                dispatch({
                    type:GET_GUARDIAN_TYPES_LOADING,
                    payload:false,
                })
                dispatch({
                    type:GET_GUARDIAN_TYPES_ERROR,
                    payload:true,
                })
            }
    }
}
  