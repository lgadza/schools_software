import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import AIDetectorPieChart from "./AIDetectorPieChart";
import { getUserData, detectAiTextWithZeroGPT } from "../../redux/actions";
import { RootState } from "../../redux/store";
import Loader from "../../components/Loader";
import AlertBox from "../../components/Alerts";
import CalaSideNavbar from "./CalaSideNavbar";
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar";
import { Dispatch } from "redux";

const AIDetector: React.FC = () => {
  const dispatch:Dispatch<any> = useDispatch();
  const user = useSelector((state: RootState) => state.userData.data);
  const accessToken = useSelector((state: RootState) => state.accessToken.accessToken);
  const analyzedText = useSelector((state: RootState) => state.detectAiText.analyzedText);
  const isError = useSelector((state: RootState) => state.detectAiText.isError);
  const isLoading = useSelector((state: RootState) => state.detectAiText.isLoading);
  const [text, setText] = useState("");
  const { user_id } = useParams();
  const [analyze, setAnalyze] = useState(false);

  useEffect(() => {
    dispatch(getUserData(accessToken.accessToken));
  }, [dispatch, accessToken]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAnalyzeText = () => {
    dispatch(detectAiTextWithZeroGPT(text));
  };

  return (
    <Container fluid className="ps-0 ms-0 pages scrollbar">
      {isError && analyze && (
        <div className='register-alert'>
          <AlertBox type="danger" message="An error occurred during the text plagiarism test process. Please contact support for assistance." />
        </div>
      )}
      <Row className="ai-container">
        <Col md={2} className={"pe-0 d-none d-md-block hide-menu"}>
          <CalaSideNavbar user_id={user?.id || user_id} />
        </Col>
        <Col className="px-0 makronexa-container" md={10}>
          <div className="py-0" style={{ height: "100vh", overflowY: "scroll", overflowX: "hidden" }}>
            <AccountTopNavigationBar user={user} />
            <Row className="mt-5">
              <Col md={7}>
                <div className="my-5 card">
                  <Form>
                    <Form.Group>
                      <Form.Label className="color-header d-flex">AI Content Detector</Form.Label>
                      <div className="text-secondary pb-4 text-start">
                        <small>
                          Our AI plagiarism detector identifies dishonesty by comparing submissions, detecting patterns, and flagging potential plagiarism, including <span className="bg-warning p-1 text-dark">AI-generated content</span>. It serves as a dual-purpose tool, promoting proper citation and upholding academic integrity.
                        </small>
                      </div>
                      <Form.Control as="textarea" rows={15} className="border-secondary border-dotted" placeholder="Paste your text here" onChange={handleTextChange} />
                    </Form.Group>
                    <Button onClick={() => { setAnalyze(true), handleAnalyzeText() }} className={`content_bg-2 mt-3 d-flex justify-content-end align-items ${text ? "content_bg-2" : "bg-secondary"}`}>
                      {isLoading && analyze && <Loader />}
                      <span className=" ms-3 text-nowrap">Analyze text</span>
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col md={4}>
                <Card className="my-5 p-0">
                  <Card.Header className="text-start">Results <Icon.ArrowRight /> {analyzedText?.data.is_human_written > analyzedText?.data.is_gpt_generated ? (<span className="text-success">Human written</span>) : (<span className="text-danger">Makronexa Generated</span>)}
                  </Card.Header>
                  <div className="d-flex py-5">
                    <AIDetectorPieChart data={analyzedText?.data} />
                  </div>
                    <ul className="mb-4">
                        {analyzedText?.data && analyzedText.data.gpt_generated_sentences.map((sentence:string,index:number)=>{
                            return(

                        <li key={index} className="d-flex px-4">
                        <div className="color-header  text-start">{index+1}</div>
                           <small className="d-flex">{sentence}</small>
                        </li>
                            )
                        })}
                       
                        {analyzedText?.data && analyzedText.data.feedback_message!=="e" &&
                        <div>
                           <small className="text-success text-uppercase d-flex ms-4  fw-bold">{analyzedText.data.feedback_message}</small>
                        </div>}
                    </ul>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AIDetector;
