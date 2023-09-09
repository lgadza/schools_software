
import React, { useEffect, useState } from 'react';
import { Alert, Row, Spinner,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFolder, faFolderPlus, faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from '../../components/ToggleSwitch';
import RangeSlider from '../../components/RangesSlider';
import { getEngines } from '../../redux/actions';
import { Container } from 'react-bootstrap';
import DragAndDropFile from '../../components/DragAndDropFile';
import UploadedDocs from './UploadedDocs';
import { DataSetItem } from './DataSets';

interface Engine{
  created:string|null;
  id:string;
  object:string;
  owner:string;
  permissions: null;
  ready:boolean
}
interface DataSetSettingsProps {
  dataSet: DataSetItem; 
}

const DataSetSettings: React.FC<DataSetSettingsProps> = ({dataSet}) => {
  const [isAlert,setIsAlert]=useState(true)
  const [isTempAlert,setIsTempAlert]=useState(true)
  const [models, setModels] = useState<Engine[]>([]); 
  const [activeComponent,setActiveComponent]=useState<string>("uploadDocs")
  const [currentModel,setCurrentModel]=useState("gpt-3.5-turbo")

  console.log(currentModel)
  const handleTempAlert=()=>{
    setIsTempAlert(!isTempAlert)
  }
  const handleAlert=()=>{
    setIsAlert(!isAlert)
  }
  const handleComponentChange=(comp:string)=>{
    setActiveComponent(comp)
  }
  useEffect(()=>{
    const getModels=async()=>{
      const engines=await getEngines()
      setModels(engines.models)
    }
    getModels()

  },[])

  return (
      <Container className=" component-margin-top mb-5">
        <div className='d-flex'><small className='link-item cursor-pointer'>Makronexa</small> <span>/</span><small className='link-item cursor-pointer'>Datasets</small> <span>/</span><small className='header'>{dataSet.name}</small></div>
        <h4 className='d-flex pb-2 my-3'>{dataSet.name}</h4>
       <Row>
       <div className='  col-sm-12 col-xl-6'>
        <div className='d-flex align-items-center justify-content-between content_bg px-3'>
        <span className='me-5'>Shared</span>
        <ToggleSwitch/>
        </div>
        {isTempAlert && (
          <Alert variant='success' className='d-flex flex-column my-4  text-start'>
          <div className='d-flex justify-content-between'>
            <div>
            <FontAwesomeIcon icon={faInfoCircle}/>
            <span className='mx-2'>Info</span>
            </div>
            <FontAwesomeIcon className='cursor-pointer' onClick={handleTempAlert} icon={faX}/>
          </div>
          <div className='d-flex flex-column text-dark'>
            <small>Temperature adjusts how creative Makronexa's writing is. When you turn the temperature up, let's say to 7, Makronexa gets more imaginative and can come up with different ideas. But if you turn it down, like to 2, Makronexa sticks to safer, more predictable choices.</small>
          </div>
        </Alert>
        )}
        <div className='d-flex align-items-center content_bg my-4 px-3'>
          <span className='me-3'>
          Temperature
          </span>
          <RangeSlider/>
        </div>
        {isAlert && (
          <Alert variant='success' className='d-flex flex-column text-start'>
          <div className='d-flex justify-content-between'>
            <div>
            <FontAwesomeIcon icon={faInfoCircle}/>
            <span className='mx-2'>Info</span>
            </div>
            <FontAwesomeIcon className='cursor-pointer' onClick={handleAlert} icon={faX}/>
          </div>
          <div className='d-flex flex-column text-dark'>
            <small>You can give your chatbot a personality, or for instance, request specific language for the answer.</small>
            <small>For instance, try to add</small>
            <small> --- Answer in the German language.</small>
            <small>to request answers to be in the German language.</small>
          </div>
        </Alert>
        )}
        <div className='d-flex justify-content-between my-4'>
          <div>Model</div>
        {models.length>0 ? (
             <select name="models" className="py-3 px-2" id="model" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
              setCurrentModel(e.target.value)
             }}>
             {models.map((model,index)=>(
               <option key={index} value={model.id}>{model.id}</option>
             ))}
           </select>
           ):(<div className='me-5'><Spinner size='sm'/></div>)
            
           }
        </div>
        <div className='d-flex my-4 text-start'>
          <span className='me-5'>Name</span>
          <input type="text" placeholder='Makronexus' className='px-3 py-2 w-100'/>
          <div>
          </div>
        </div>
        <div className='d-flex flex-column text-start mt-3'>
        <div className='me-5 my-2'>Personality</div>
          <textarea name='text' rows={5} placeholder='- Act as a document having a conversation with a human.
- You have to be friendly.
- You are talking to a human.
- You NEVER answer that you are an AI language model.' className='px-3 py-2 '/>
        </div>
        <div className='d-flex mt-3 justify-content-end'>
            <button className='header content_bg'><small>Update</small></button>
        </div>
        </div>
        <div className='col-xl-6'>
          <div className='d-flex justify-content-end'>
            <div className='me-2'>
            <Button className='content_bg' onClick={()=>{handleComponentChange("uploadedDocs")}}><FontAwesomeIcon icon={faFolder}style={{color:"rgb(234, 191, 70)"}} /><span className='ms-2' >Docs</span>
            </Button>
            </div>
            <div className='me-2'>
            <Button className='content_bg' onClick={()=>{handleComponentChange("uploadDocs")}}><FontAwesomeIcon icon={faFolderPlus} style={{color:"rgb(234, 191, 70)"}}/><span className='ms-2'>Upload</span>
            </Button>
            </div>
            <div className='me-2'>
            <Button className='content_bg'><FontAwesomeIcon icon={faComment}style={{color:"rgb(30, 215, 96)"}} /><span className='ms-2'>Ask</span>
            </Button>
            </div>
          </div>
          <div className='my-4'>
            {activeComponent==="uploadDocs"&& <DragAndDropFile/>}
            {activeComponent==="uploadedDocs"&& <UploadedDocs/>}
            
          </div>
        </div>
       </Row>
      </Container>
  
  );
};

export default DataSetSettings;
