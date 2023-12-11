import React, { Dispatch, useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllUserAISettings, postUserAISettings } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import AlertBox from '../../components/Alerts';
interface MyVerticallyCenteredModalProps {
  show: boolean;
  onHide: () => void;
  user_id:string,
  token:string
}


const CreateDatasetModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
  // const [settings, setSettings] = useState<UserAISettingsPayload>(initialState); 
  const [datasetName, setDatasetName] = useState<string>(""); 
  const isLoading=useSelector((state:RootState)=>state.postUserAISettings.isLoading)
  const [createDataset, setCreateDataset] = useState(false);
  const isError=useSelector((state:RootState)=>state.postUserAISettings.isError)
  const dispatch:Dispatch<any> =useDispatch()
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDatasetName(event.target.value);
  };
  console.log(isError)
  const settings={
    shared: false,
    dataset_name:datasetName,
    temperature: 0,
    model:  null,
    name:  null,
    personality:  null,
    userId: props.user_id
  }

  const handleCreateDataset = async() => {
    if (datasetName.trim() !== '' && props.user_id) {
      setCreateDataset(true)
      console.log('Dataset Name:', datasetName);
      await dispatch(postUserAISettings(props.user_id,settings,props.token))
      dispatch(getAllUserAISettings(props.token,props.user_id))
      props.onHide();
      setDatasetName("")
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* {isError &&
      <AlertBox type="danger" message='Error during dataset creation'/>
      } */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className='textMediumSize'>Create Dataset</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className='mb-3 textMediumSize'> Name <span className='text-danger'>*</span></h5>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Personal knowledge base"
            value={datasetName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className='mt-3'>
          <Button
            variant="primary"
            className='content_bg-2 w-100 font-weight-bold'
            onClick={handleCreateDataset}
            disabled={datasetName.trim() === ''}
          >
             {isLoading && createDataset&& (
                <Spinner className='spinner-border-sm me-2 textMediumSize'/>
                )}
            CREATE DATASET
          </Button>
        </div>
        <div className='mt-3'>
        {/* <small className='text-danger'>You have reached the limit of datasets for your subscription</small> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateDatasetModal;
