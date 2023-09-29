import React, { Dispatch, useEffect, useState } from 'react';
import { Alert, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faFolder,
  faFolderPlus,
  faInfoCircle,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from '../../components/ToggleSwitch';
import RangeSlider from '../../components/RangesSlider';
import { getAllUserAISettings, putUserAISettings } from '../../redux/actions';
import { Container } from 'react-bootstrap';
import DragAndDropFile from '../../components/DragAndDropFile';
import UploadedDocs from './UploadedDocs';
import md_logo_small from '../../assets/md_logo_small.png';
import { useNavigate, useParams } from 'react-router-dom';
import { UserAISettingsPayload } from '../../Types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';

// interface Engine {
//   created: string | null;
//   id: string;
//   object: string;
//   owner: string;
//   permissions: null;
//   ready: boolean;
// }

interface DataSetSettingsProps {
  user_id: string;
  token: string;
}

const DataSetSettings: React.FC<DataSetSettingsProps> = ({ token, user_id }) => {
  const allDatasets: UserAISettingsPayload[] = useSelector((state: RootState) => state.getAllUserAISettings.data);
  const isLoading = useSelector((state: RootState) => state.getAllUserAISettings.isLoading);
  const [isAlert, setIsAlert] = useState(true);
  const [isTempAlert, setIsTempAlert] = useState(true);
  // const [models, setModels] = useState<Engine[]>([]);
  const [activeComponent, setActiveComponent] = useState<string>('uploadDocs');
  const [currentModel] = useState('gpt-3.5-turbo');
  const [dataSet, setDataSet] = useState<UserAISettingsPayload>({
    shared: false,
    dataset_name: '',
    temperature: 0,
    model: null,
    name: null,
    personality: null,
    userId: '',
  });
  const [shared, setShared] = useState(false);
  const dispatch:Dispatch<any> =useDispatch()
  const navigate = useNavigate();
  const params = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTempAlert = () => {
    setIsTempAlert(!isTempAlert);
  };
  const handleTemperatureChange = (temperature: number) => {
    setDataSet({ ...dataSet, temperature });
  };

  const handleAlert = () => {
    setIsAlert(!isAlert);
  };

  const handleComponentChange = (comp: string) => {
    setActiveComponent(comp);
  };

  // useEffect(() => {
  //   const getModels = async () => {
  //     const engines = await getEngines();
  //     setModels(engines.models);
  //   };
  //   getModels();
  // }, []);

  useEffect(() => {
    dispatch(getAllUserAISettings(token, user_id));
  }, [token,user_id]);

  useEffect(() => {
    if (allDatasets.length > 0) {
      const foundDataset = allDatasets.find((dataset) => dataset.dataset_name.trim() === params.dataset_id?.trim());
      
      if (foundDataset) {
        setDataSet(foundDataset);
        setShared(foundDataset.shared)
      }
    }
  }, [params.dataset_id]);

  const handleUpdateDataset = async () => {
    setIsSubmitting(true);
    try {
      const updatedDataset: UserAISettingsPayload = {
        ...dataSet,
        shared,
        temperature: dataSet.temperature, 
        name: dataSet.name, 
        personality: dataSet.personality,
        model:currentModel 
      }; 
      await dispatch(putUserAISettings(user_id,updatedDataset,token,dataSet.id!));
      console.log(updatedDataset,"putting")
      dispatch(getAllUserAISettings(token, user_id));
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error updating dataset:', error);
      setIsSubmitting(false);
    }
  };
  // useEffect(() => {
  //   if (dataSet.model !== null && models.length > 0) {
  //     const foundModel = models.find((model) => model.id.trim() === (dataSet.model ?? "").trim());
  //     console.log("FOUND MODEL:",foundModel)
  //     if (foundModel) {
  //       setCurrentModel(foundModel.id);
  //     }
  //   }
  // }, [dataSet.model, models]);
  

  return (
    <Container className=" component-margin-top mb-5">
     {!isLoading && 
     <div> 
      <div className="d-flex d-md-none justify-content-end mb-3 mt-2">
        <img
          src={md_logo_small}
          alt="makronexa"
          style={{ width: `${50}px`, height: `${50}px`, borderRadius: '0%', objectFit: 'contain' }}
          className="img_component"
        />
      </div>
      <div className='d-flex align-items-center justify-content-between'>
      <div>
      <small className='link-item header cursor-pointer' onClick={() => navigate(`/ask/${user_id}`)}>Makronexa</small> <span>/</span><small className='link-item header cursor-pointer' onClick={() => navigate(`/${user_id}/datasets`)}>Datasets</small> <span>/</span><small >{dataSet.dataset_name}</small>
      </div>
      <div className='me-2 d-md-none'>
              <Button className='content_bg' onClick={()=>navigate(`/${user_id}/datasets/${dataSet.dataset_name}/${dataSet.id}/ask/${dataSet.temperature || 0.3}`)}><FontAwesomeIcon icon={faComment} style={{ color: "rgb(30, 215, 96)" }} /><span className='ms-2'>Ask</span>
              </Button>
            </div>
      </div>
      <h6 className='d-flex pb-2 my-3'>{dataSet.dataset_name}</h6></div>}
      <Row>
        <div className='  col-sm-12 mb-4 col-xl-6'>
       {isLoading?(<div>
        <Loader/>
        </div>):(
        <div>
         <div className='d-flex align-items-center justify-content-between content_bg px-3'>
           <span className='me-5'>Shared</span>
           <ToggleSwitch checked={shared} onChange={() => setShared(!shared)} />
         </div>
         {isTempAlert && (
           <Alert variant='success' className='d-flex flex-column my-4  text-start'>
             <div className='d-flex justify-content-between'>
               <div>
                 <FontAwesomeIcon icon={faInfoCircle} />
                 <span className='mx-2'>Info</span>
               </div>
               <FontAwesomeIcon className='cursor-pointer' onClick={handleTempAlert} icon={faX} />
             </div>
             <div className='d-flex flex-column text-dark'>
               <small style={{fontSize:"14px"}}>Temperature adjusts how creative Makronexa's writing is. When you turn the temperature up, Makronexa gets more imaginative and can come up with different ideas. But if you turn it down,Makronexa sticks to safer, more predictable choices.</small>
             </div>
           </Alert>
         )}
         <div className='d-flex align-items-center content_bg my-4 px-3'>
           <span className='me-3'>
             Temperature
           </span>
           <RangeSlider onTemperatureChange={handleTemperatureChange} currentTemperature={dataSet.temperature !== null ? dataSet.temperature * 10 : 0} />
         </div>
         {isAlert && (
           <Alert variant='success' className='d-flex flex-column text-start'>
             <div className='d-flex justify-content-between'>
               <div>
                 <FontAwesomeIcon icon={faInfoCircle} />
                 <span className='mx-2'>Info</span>
               </div>
               <FontAwesomeIcon className='cursor-pointer' onClick={handleAlert} icon={faX} />
             </div>
             <div className='d-flex flex-column text-dark'>
               <small style={{fontSize:"14px"}}>You can give Makronexa a personality,for instance, request specific language for the answer.</small>
               <small style={{fontSize:"14px"}}>For instance, try to add</small>
               <small style={{fontSize:"14px"}}> --- Answer in the German language.</small>
               <small style={{fontSize:"14px"}}>to request answers to be in the German language.</small>
             </div>
           </Alert>
         )}
         <div className='d-flex justify-content-between my-4'>
           <div>Model</div>
           {/* {models.length > 0 ? (
             <select name="models" className="py-3 px-2" id="model" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
               setCurrentModel(e.target.value);
             }}>
               {models.map((model, index) => (
                 <option key={index} value={model.id}>{currentModel}</option>
               ))}
             </select>
           ) : (<div className='me-5'><Spinner size='sm' /></div>)

           } */}

         </div>
         <div className='d-flex my-4 text-start'>
           <span className='me-5'>Name</span>
           <input
             type="text"
             placeholder='Makronexus'
             className='px-3 py-2 w-100'
             value={dataSet.name || ''}
             onChange={(e) => setDataSet({ ...dataSet, name: e.target.value })}
           />
           <div>
           </div>
         </div>
         <div className='d-flex flex-column text-start mt-3'>
           <div className='me-5 my-2'>Personality</div>
           <textarea
             name='text'
             rows={5}
             placeholder='- Act as a document having a conversation with a human.'
             className='px-3 py-2'
             value={dataSet.personality || ''}
             onChange={(e) => setDataSet({ ...dataSet, personality: e.target.value })}
           />
         </div>
         <div className='d-flex mt-3 justify-content-end'>
           <Button
             className='content_bg content_bg-2'
             onClick={handleUpdateDataset}
             disabled={isSubmitting}
           >
             <small>Update</small>
           </Button>
         </div>
         </div>
       )}
       </div>
        <div className='col-xl-6 mb-5'>
          <div className='d-flex justify-content-end'>
            <div className='me-2'>
              <Button className='content_bg' onClick={() => { handleComponentChange("uploadedDocs") }}><FontAwesomeIcon icon={faFolder} style={{ color: "rgb(234, 191, 70)" }} /><span className='ms-2' >Docs</span>
              </Button>
            </div>
            <div className='me-2'>
              <Button className='content_bg' onClick={() => { handleComponentChange("uploadDocs") }}><FontAwesomeIcon icon={faFolderPlus} style={{ color: "rgb(234, 191, 70)" }} /><span className='ms-2'>Upload</span>
              </Button>
            </div>
            <div className='d-none d-md-block me-2'>
              <Button className='content_bg' onClick={()=>navigate(`/${user_id}/datasets/${dataSet.dataset_name}/${dataSet.id}/ask/${dataSet.temperature||0.3}`)}><FontAwesomeIcon icon={faComment} style={{ color: "rgb(30, 215, 96)" }} /><span className='ms-2'>Ask</span>
              </Button>
            </div>
          </div>
          <div className='my-4'>
            {activeComponent === "uploadDocs" && <DragAndDropFile user_id={user_id} dataset_id={dataSet.id!} />}
            {activeComponent === "uploadedDocs" && <UploadedDocs user_id={user_id} token={token} dataset_id={dataSet.id!} />}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default DataSetSettings;
