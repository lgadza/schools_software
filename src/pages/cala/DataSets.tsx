import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faComment,faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CreateDatasetModal from './CreateDatasetModal';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { deleteUserAISettings, getAllUserAISettings } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { Dispatch } from "redux"
import { UserAISettingsPayload } from '../../Types';
import AlertBox from '../../components/Alerts';


export interface DataSetItem {
  icon: any;
  name: string;
  created: string;
}

const DataSets= ({token,user_id}:{token:string,user_id:string}):JSX.Element => {
  const datasets:UserAISettingsPayload[]=useSelector((state:RootState)=>state.getAllUserAISettings.data)
  const isLoading=useSelector((state:RootState)=>state.getAllUserAISettings.isLoading)
  const isError=useSelector((state:RootState)=>state.getAllUserAISettings.isError)
  const [isErrorHide,setIsErrorHide]=useState(true)
  const navigate=useNavigate()
  const params=useParams()
  const dispatch:Dispatch<any> =useDispatch()

 
  const [modalShow, setModalShow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{setIsErrorHide(false)},3000)
    dispatch(getAllUserAISettings(token,user_id))
  },[])

  const handleDeleteDataset = async (settings_id: string) => {
    try {
      await dispatch(deleteUserAISettings(token, settings_id, user_id));
      dispatch(getAllUserAISettings(token, user_id));
    } catch (error) {
      console.error('Error deleting dataset:', error);
    }
  };
  
  return (
    <Container className="component-margin-top">
      {isError && isErrorHide && <AlertBox type="danger" message='Error fetching data'/>}
      <div>
        <div className='d-flex'><small className='textSmallSize link-item header  cursor-pointer' onClick={()=>navigate(`/ask/${user_id}`)}>Makronexa</small> <span>/</span><small className='textSmallSize'>Datasets</small></div>
      
            <h6 className='d-flex pb-2 mb-3 textSmallSize'>Datasets</h6>
       <div className='content_bg'>
       <div className='d-flex justify-content-end p-4'>
       <Button className="btn-primary d-flex py-2 px-4 content_bg content_bg-2 " onClick={() => setModalShow(true)}>
              <FontAwesomeIcon className="textSmallSize d-xl-block me-2 d-none" icon={faPlus} /> <span className="text-nowrap textSmallSize">New</span>
            </Button>
       </div>
       <Row className="dataset-item main_bg py-2 mx-1 mb-3">
          <Col xs={1} className="icon-column d-none d-md-block text-start">
            
          </Col>
          <Col xs={5} className="name-column text-start">
            <strong className='text-dark textMediumSize'>Name</strong>
          </Col>
          <Col xs={4} className="created-column text-start">
            <strong className='text-dark textMediumSize'>Created</strong>
          </Col>
          <Col xs={1} className="chat-icon-column text-dark ">
            <strong className='d-none d-md-block textMediumSize'>Ask</strong>
          </Col>
          <Col xs={1} className="delete-icon-column text-danger">
           <strong className='d-none d-md-block textMediumSize'>Delete</strong>
          </Col>
        </Row>
        {isLoading?(
       <Loader/>
      ):(
        <div>
      {datasets && datasets.length>0?( datasets.map((item, index) => (
        <Row key={index}   className="dataset-item mx-1  pe-2 my-2 content_bg py-2">
          <Col xs={1} className="icon-column d-none d-md-block text-start">
          <FontAwesomeIcon icon={faDatabase} />
          </Col>
          <Col xs={5} className="name-column text-start header cursor-pointer textSmallSize" onClick={() => navigate(`/${params.user_id}/datasets/${item.dataset_name}`)}>
            {item.dataset_name}
          </Col>
          <Col xs={4} className="created-column header text-start textSmallSize">
        {new Date(item.createdAt!).toLocaleDateString('en-GB')}
        </Col>

          <Col xs={1} className="chat-icon-column textSmallSize">
            <FontAwesomeIcon icon={faComment} onClick={()=>navigate(`/${user_id}/datasets/${item.dataset_name}/${item.id}/ask`)} className='header cursor-pointer' />
          </Col>
          <Col xs={1} className="delete-icon-column textSmallSize">
            <FontAwesomeIcon icon={faTrashCan} onClick={()=>handleDeleteDataset(item.id!)} className='text-danger cursor-pointer' />
          </Col>
        </Row>
      ))):(
        <div className='pb-4'>
          <small className='text-muted textSmallSize'>No dataset available, create one</small>
        </div>
      )}
        </div>
      )}
     </div>
      </div>
      <CreateDatasetModal user_id={user_id} token={token}  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </Container>
  );
};

export default DataSets;
