import  { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteDatasetFile, getAllDataFiles } from '../../redux/actions';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { DatasetFile } from '../../Types';


const UploadedDocs = ({token,user_id,dataset_id}:{token:string,user_id:string,dataset_id:string}):JSX.Element => {
  const dispatch:Dispatch<any> =useDispatch()
  const datasetFiles:DatasetFile[]=useSelector((state:RootState)=>state.getAllDatasetFiles.data)
  const isLoading=useSelector((state:RootState)=>state.getAllDatasetFiles.isLoading)
  // const isError=useSelector((state:RootState)=>state.getAllDatasetFiles.isError)
  useEffect(()=>{
    dispatch(getAllDataFiles(token,user_id,dataset_id))
  },[])
  const handleDeleteDatasetFile=async(file_id:string)=>{
   await dispatch(deleteDatasetFile(token,dataset_id,file_id,user_id))
   dispatch(getAllDataFiles(token,user_id,dataset_id))

  }
  return (
    <div className="mx-2">
        
            <div className='text-start mt-4'>
                <div className='mb-4'>
              <h5>Uploaded documents</h5>
                </div>
                      {isLoading?(<Loader/>):(
                    <ul> 
                      {
                        datasetFiles.length>0?(
                          <div>
                          {
                          datasetFiles.map((file)=>{
                            return(
                              <li key={file.id} className='d-flex content_bg  mb-3 p-3 justify-content-between'>
                              <div>
                                  <div>
                                  <FontAwesomeIcon className='me-2 text-dark' icon={faFile}/> 
                                  <span className='text-dark'>
                                     {file.name}
                                    </span>
                                  </div>
                                  <div>
                                  <span className='text-dark'>{file.type}</span>
                                  <strong className='ms-3 text-dark'>{new Date(file.createdAt).toLocaleDateString('en-GB')}</strong>
                                  </div>
                              </div>
                              <div>
                                  <FontAwesomeIcon onClick={()=>handleDeleteDatasetFile(file.id)} className='text-danger cursor-pointer'  icon={faTrashCan}/>
                              </div>
                              </li>
                            )
                          })
                          }
                          </div>
                        ):(
                          <li  className='d-flex content_bg  mb-3 p-3 justify-content-between'>
                         No files available
                          </li>
                        )
                      } 
                        
                      
                    </ul>
                      )}  
            </div>
    </div>
  );
};

export default UploadedDocs;
