import { IconDefinition, faArrowCircleDown,faBoltLightning, faChevronUp, faComments,  faGear,  faPaperPlane,  faPlus,  faPowerOff,  faSun,  faTrashCan, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"
import {  useEffect, useRef, useState } from "react"
import { Button, Col, Dropdown, Row, Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
// import { useDispatch } from "react-redux"
import { chatWithAi, deleteChat, getAllAiChats, getChatMessages, imageQuery, logoutUser, newChat } from "../redux/actions"
// import { Dispatch } from "redux"
import "./MakronexusAi.css"
import { SearchImage, UserRegistration } from "../Types"
import AlertBox from "./Alerts"
import * as Icon from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Image from "./Image"
import { Link } from "react-router-dom"
import katex from 'katex';
import 'katex/dist/katex.min.css'
import ImageCard from "./ImageCard"
interface MathEquationProps {
  latex: string;
}


const MathEquation: React.FC<MathEquationProps> = ({ latex }) => {
  const container = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (container.current) {
      try {
        katex.render(latex, container.current);
      } catch (error) {
        console.error('KaTeX rendering error:', error);
      }
    }
  }, [latex]);

  return <span  ref={container} />;
};

interface ExtractLaTeXExpressionsProps {
  text: string;
}
// eslint-disable-next-line no-useless-escape
const latexRegex = /\\\((.*?)\\\)|\\\[([\s\S]*?)\\\]|\$\$(.*?)\$\$|\$([^\$]+)\$/g;

const ExtractLaTeXExpressions: React.FC<ExtractLaTeXExpressionsProps> = ({ text }) => {
  const parts: (string | { latex: string })[] = [];
  let lastIndex = 0;
  let match;

  while ((match = latexRegex.exec(text)) !== null) {
    const latexContent = match[1] || match[2] || match[3] || match[4]; 
    parts.push(text.slice(lastIndex, match.index)); 
    parts.push({ latex: latexContent }); 
    lastIndex = match.index + match[0].length; 
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex)); 
  }

  return (
    <div>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        } else {
          return <MathEquation key={index} latex={part.latex} />;
        }
      })}
    </div>
  );
};
export interface Message {
    altText?: string;
    message: string;
    liked?: boolean;
    imageSrc?: string;
    from:string;
    type:string;
  }
  
  interface MobileNavProps{
    chats:chatProps[]
  }
  interface chatProps{
    id:string;
    makronexaQAs:Message[];
    createdAt:string;
    updatedAt:string;
  }
  const MakronexusAI: React.FC = () => {
    const user:UserRegistration=useSelector((state:RootState)=>state.userData.data)
    const token=useSelector((state:RootState)=>state.accessToken.accessToken)
    const isTokenExpired=useSelector((state:RootState)=>state.userData.isTokenExpired)
    // const allChats=useSelector((state:RootState)=>state.getAllAiChats.chats)
    // const allChatsLoading=useSelector((state:RootState)=>state.getAllAiChats.isLoading)
    // const allError=useSelector((state:RootState)=>state.getAllAiChats.isError)
    const [loading, setLoading] = useState(false); 
    const [currentChat, setCurrentChat] = useState(""); 
    // const [deleteNowChat, setDeleteNowChat] = useState<boolean>(false); 
    const [chats, setChats] = useState<chatProps[]>([]); 
    const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [isChatError, setIsChatError] = useState<string | null>(null);
    const [currentModel]=useState("gpt-3.5-turbo")
    const [messages, setMessages] = useState<Message[]>([]);
    const [question, setQuestion] = useState<string>("");
    // const [copied, setCopied] = useState<boolean>(false);
    const [aiError, setAiError] = useState<boolean>(false);
    const [currentAnswer,setCurrentAnswer]=useState<string>("")
    const [animatedText, setAnimatedText] = useState<string>("");
    const [blinkerVisible, setBlinkerVisible] = useState(true);
    const [alertVisible, setAlertVisible] = useState(true);
    const [autoFilled, setAutoFilled] = useState<boolean>(false);
    const [isChatMessagesLoading, setIsChatMessagesLoading] = useState(false);
const [errorChatMessages, setErrorChatMessages] = useState("");
console.log(errorChatMessages)
    const navigate=useNavigate()
    // const dispatch: Dispatch<any> = useDispatch();
    const dispatch = useDispatch();
  
    const [showAlert, setShowAlert] = useState(false);
    const startTypewriterAnimation = (text: string) => {
      setAnimatedText(text.charAt(0))
      setBlinkerVisible(true);
      let charIndex = 1;
      const interval = setInterval(() => {
        if (charIndex < text.length) {
          setAnimatedText((prevText) => prevText + text.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(interval); 
          setBlinkerVisible(false);
        }
      }, 5); 
    };
    useEffect(()=>{
      if(!token){
        navigate("/login")
      }
      if(isTokenExpired){
        const handleLogout = () => {
          dispatch(logoutUser());
          localStorage.removeItem('accessToken');
          navigate('/login') ; 
        
      }
        handleLogout()
      }
    },[isTokenExpired])
    useEffect(() => {
      let timeout: NodeJS.Timeout;
      if (loading) {
        setShowAlert(true);
      } else {
        timeout = setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }, [loading]);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuestion = e.target.value;
      if (newQuestion.startsWith('/') && !autoFilled) {
        setQuestion('/img:'+ newQuestion.substring(1));
        setAutoFilled(true);
      } else {
        setQuestion(newQuestion);
      }
    };
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    
  const handleAsk = async () => {   
    if (question !== "") {
      if (question.startsWith('/img:')) {
        const query = question.slice(5); 
      const newMessage = { message: query, type:"text", from: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setQuestion("");
      setAutoFilled(false);

        try {
          setLoading(true); 
          const answer = await imageQuery(token.accessToken,currentModel,query,currentChat, user.id);
          if (answer) {
            setMessages((prev) => [...prev, {type: "imageUrl",message:answer.message,from:"makronexa"}]);
          }else{
            setAiError(true)
            const timer = setTimeout(() => {
              setAlertVisible(false);
            }, 3000); 
            return () => {
              clearTimeout(timer);
            };
          }
        } catch (error) {
          console.log(error);

        }finally {
          setLoading(false);
        }
      }else{
      const newMessage = { message: question, type:"text", from: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setQuestion("");
      setAutoFilled(false);

      try {
        setLoading(true); 
        const answer = await chatWithAi(token.accessToken,[...messages, newMessage],currentModel,question,currentChat, user.id);
        if (answer) {
          setCurrentAnswer(answer.message)
          setAnimatedText("");
          setMessages((prev) => [...prev, answer]);
          startTypewriterAnimation(answer.message);
        }else{
          setAiError(true)
            const timer = setTimeout(() => {
              setAlertVisible(false);
            }, 3000); 
            return () => {
              clearTimeout(timer);
            };
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    }
  };

  const getAllChats=async()=>{
    
    if (user.id) {
      setIsChatLoading(true);
      try {
        const allChats = await getAllAiChats(token.accessToken, user.id);
        if(allChats.length>=0){
          setChats(allChats)
          setIsChatLoading(false);  
          setIsChatError(null); 
        }else{
          setIsChatError(allChats.error);
          setIsChatLoading(false);   
        }
      } catch (error) {
        setIsChatError('An error occurred while fetching data.');
        setIsChatLoading(false);
      }
    }
  }

  const handleNewChat=async()=>{
    setMessages([])
    try{
     
      const lastChat=chats[chats.length-1]
      if (lastChat && lastChat.makronexaQAs.length===0 && !question) {
        await deleteChat(token.accessToken,lastChat.id,user.id);  }
      else if(user.id){
      const newAiChat = await newChat(token.accessToken,user.id)
      if(newAiChat){
        setCurrentChat(newAiChat)
      }else{
        setAiError(true)
      }
    }
    }catch(error){
      console.log(error,"ERROR")
    }
  }
//  const handleGetChatMessages=async()=>{
//   if(currentChat){
//     const chatMessages:chatProps[]=await getChatMessages(token.accessToken,currentChat,user.id)
//     if(chatMessages[0].makronexaQAs.length>0){
//       setMessages(chatMessages[0].makronexaQAs)
//     } 
//   }
//  }
const handleGetChatMessages = async () => {
  setIsChatMessagesLoading(true);
  if (currentChat) {
    try {
      const chatMessages = await getChatMessages(token.accessToken, currentChat, user.id);

      if (chatMessages[0].makronexaQAs.length > 0) {
        setMessages(chatMessages[0].makronexaQAs);
        setIsChatMessagesLoading(false);
      }

      setErrorChatMessages(""); 
    } catch (err) {
      setErrorChatMessages("An error occurred while fetching data"); 
    } finally {
      setIsChatMessagesLoading(false); 
    }
  }
};
const handleChatItemClick = (chat_id: string) => {
  setMessages([]);
  setCurrentChat(chat_id);
};

useEffect(() => {
  if (currentChat) {

    handleGetChatMessages();
  }
}, [currentChat]);

const scrollToLastMessage=()=>{
  if (lastMessageRef.current) {
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }
}
  useEffect(() => {
    getAllChats()
    scrollToLastMessage()
  }, [messages]);


const Loader: React.FC = () => {

  return (
    <div className="chat-loader-container  py-3 d-flex justify-content-center align-items-center">
      <div className="chat-loader cf ">
      <div className="three col">
        <div className="loader" id="loader-4">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </div>
    </div>
  );
};

const FilesIcons:React.FC=()=>{
     const [isClipping, setIsClipping] = useState(false);
  const handleClipping = () => {
    isClipping ? setIsClipping(false) : setIsClipping(true);
  };
  return(
    <div className="clip-files">
            <Icon.Paperclip onClick={handleClipping} size={25} />
            {isClipping && (
              <div className="d-flex files flex-column">
                <label htmlFor="image">
                  <span className=" clip-image ">
                    {" "}
                    <Icon.ImageFill size={20} />
                  </span>
                </label>
                <input
                  id="image"
                  type="file"
                  style={{ visibility: "hidden" }}
                  //   onChange={handleAvatar}
                />
                <label htmlFor="file">
                  <span className="clip-file ">
                    {" "}
                    <Icon.FileEarmarkFill size={20} />
                  </span>
                </label>
                <input
                  id="file"
                  type="file"
                  style={{ visibility: "hidden" }}
                  //   onChange={handleAvatar}
                />
              </div>
            )}
          </div>
  )
}

const MakronexaOverview: React.FC = () => {
  const examplePrompts = [
    "Explain Newton's law in simple terms",
    "Could you suggest creative and interactive online activities",
    "Got any tips on how to create an effective study schedule?",
  ];

  const capabilities = [
    "Remembers what users said earlier in the conversation",
    "Helps students find relevant and credible sources for research projects",
    "Streamlines the grading process by automatically grading assignments, quizzes, and exams",
  ];

  const limitations = ["May occasionally generate incorrect answers"];
  return (
    <div className="container mt-5">
      <Row>
         <Col className="col-12 col-lg-4">
          <OverviewSection
            icon={faSun}
            title="Examples"
            items={examplePrompts}
            onItemClick={(item)=>{
             setQuestion(item)
              handleAsk()
            }}
            className="nav-item"
          />
        </Col>
        <Col className="col-12 col-lg-4">
          <OverviewSection icon={faBoltLightning} title="Capabilities" items={capabilities} />
        </Col>
        <Col className="col-12 col-lg-4">
          <OverviewSection icon={faWarning} title="Limitations" items={limitations} color="yellow" />
        </Col>
      </Row>
    </div>
  );
};

const OverviewSection: React.FC<{ icon: IconDefinition; title: string; items: string[]; color?: string;className?:string;onItemClick?: (item: string) => void; }> = ({
  icon,
  title,
  items,
  color,
  onItemClick,
  className
}) => {
  return (
    <div className="d-flex flex-column">
      <FontAwesomeIcon icon={icon} style={{ color: color || "inherit" }} />
      <span className="mt-1">{title}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`text-start content_bg my-3 p-2 ${className}`}
          onClick={() => {onItemClick && onItemClick(item)}

          }
          >
            <small>{item}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MobileNav: React.FC<MobileNavProps> = ({chats}) => {
  const [navActive, setNavActive] = useState(false);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('accessToken');
    navigate('/login') ; 
  
}
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <nav className="mobile-nav d-md-none border-round mb-5  px-2">
      <div className="logo">
      <div className="d-flex px-2">
            <img
              src={md_logo_small}
              alt={CompanyName}
              style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%",objectFit:"contain" }}
              className="img_component"
            />
          </div>
      </div>
      
      <div className={`nav-links content_bg d-flex main_bg  flex-column justify-content-between ms-3 ${navActive ? 'nav-active pt-3' : ''}`}>
        <div>
          <ul className="d-flex flex-column ">  
       <div className={`${chats.length>0?"d-flex w-100 mb-2  ps-5 justify-content-between px-2":"d-flex  justify-content-between px-2"}`}>
            <Button className="btn-primary  w-75 content_bg-2 " onClick={async()=>{
              await handleNewChat()
              }}>
              <FontAwesomeIcon className="me-1 " icon={faPlus} /> <small className="text-nowrap">New chat</small>
            </Button>
         
          </div>
      {!isChatLoading||chats.length>0 ?(
        <div className="my-3">
           {isChatError ?(
            <div className="mt-5">
              <span className="text-muted">{isChatError}</span>
            </div>):(
        <div>
             { chats
              .filter((chat) => chat.makronexaQAs.length !==0)
              .map((chat,index)=>{
                return(
            <li className={`nav-item p-2 w-100 my-1  d-flex justify-content-center align-items-center ${currentChat===chat.id?"content_bg":"header"}`} key={index}>
              <small className="d-flex w-75" 
              onClick={() => handleChatItemClick(chat.id)}
              >
              <FontAwesomeIcon 
              className={`${currentChat===chat.id?"":"header"}`}
                icon={faComments} style={{color:"gray"}} />
                {chat.makronexaQAs.length > 0 &&(
                <span className=" ms-2 text-start chat_header_name">
                  {chat.makronexaQAs[chat.makronexaQAs.length-1].message}
                </span>
                )}
              </small>
              <FontAwesomeIcon onClick={async()=>{
                await deleteChat(token.accessToken,chat.id,user.id)
                getAllChats()
                setMessages([])
                }} 
                icon={faTrashCan} style={{color:"red",fontSize:"0.8rem"}} />
            </li>)})}
            </div>)}
            </div>
            )
            
            :(
              <li className="mt-5">
                <Spinner className="spinner-border-sm"/>
              </li>
          )
            }
            </ul>
            </div>
            <div className="user-logout w-100 content_bg pb-2">
            <Dropdown>
<Dropdown.Toggle className="navbar-item w-100 d-flex justify-content-between align-items-center">
      <div className="pt-2">
            <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
                <span className="px-2 py-0">{user.first_name} {user.last_name}</span>
            </div>
             <FontAwesomeIcon style={{fontSize:"0.8rem"}} icon={faChevronUp}/>         
</Dropdown.Toggle>

<Dropdown.Menu className="py-0 "  style={{width:"20rem"}}>
  <Dropdown.Item className="py-2">
    <Link to={`/users/account/${user.id}`} className="textColor px-2">
    {/* <FontAwesomeIcon icon={faGear}/> */}
    <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
      <span className="px-2">Account</span>
    </Link>
  </Dropdown.Item>
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2">
    <Link to={`/${user.id}/datasets`} className="textColor px-2">
    <FontAwesomeIcon icon={faGear}/>
      <span className="px-2">Settings</span>
    </Link>
  </Dropdown.Item>
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2">
    <div
      onClick={handleLogout}
      className="textColor px-2"
    >
    <FontAwesomeIcon icon={faPowerOff}/>
<span className="px-2">
      Log out
</span>
    </div>
  </Dropdown.Item>
 
</Dropdown.Menu>
</Dropdown>
            </div>
      </div>
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Button className="btn-primary content_bg-2 " onClick={async()=>{
              await handleNewChat()
              }}>
              <FontAwesomeIcon className="d-xl-block me-1 d-none" icon={faPlus} /> <small className="text-nowrap">New chat</small>
            </Button>
    </nav>
  );
}
    return (
      <div className="row ask-makronexa ms-4 me-2">
        <div>
          <MobileNav chats={chats}/>
        </div>
        <div className="col col-md-8 mb-4 helper">
          <div className={`d-none d-lg-block makronexa-alert ${showAlert ? 'visible' : 'hidden'}`}>
            {loading?(
              <AlertBox type="info" message="Makronexa is thinking..." loading={loading} />
            ):(
        <AlertBox type="success" message="Makronexa has responded!" loading={loading} />
            )}
          </div>
          {messages.length > 0 || currentChat ?
            (<div className="mt-5"> {messages.length>0 && !isChatMessagesLoading?( messages.map((section, index) => (
              <div key={index}>
                <div className="d-flex chats-messages justify-content-center text-start mt-2">
                <div className="pe-2">
                {section.type!=="imageUrl"&&(
                  <img
                    src={section.from === "user" ? user.avatar : md_logo_small}
                    alt={section.from}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "0%",
                    }}
                    className="img_component"
                  />
                )}
                </div>

                      <div ref={lastMessageRef} />
                  {section.from === "user" ? (
                    <div className="d-flex justify-content-between w-75 ">
                      <p
                        className={`chat-content w-100 ${
                          section.from === "user" ? "main_bg" : "content_bg"
                        } text-start p-2`}
                      >
                        <div className="d-flex align-items-center">
                        <small>
                        {section.message}
                        </small>
                        {section.message===messages[messages.length-1].message && loading && <Loader/>}
                        </div>
                      </p>
                    </div>
                  ) : (
                    <p
                      className={`chat-content ${
                        section.from === "user" ? "main_bg" : "content_bg"
                      } text-start p-2 w-75`}
                    > {section.type==="imageUrl"?(
                      <div className="row">
                        {JSON.parse(section.message).map((imgUrl:SearchImage,index:number)=>{
                        console.log("IMAGES:",imgUrl)
                          return(
                            <div key={index} className="col-12 mb-3">
                              <ImageCard  context={imgUrl.context} imageUrl={imgUrl.link} altText="img"/>
                            </div>
                          )
                        })}
                      </div>
                    ):(
                      <small>
                            <pre id="ai-respond-text-holder" style={{
                              whiteSpace: "pre-wrap",
                              wordWrap: "break-word",
                              overflowWrap: "break-word",
                              fontFamily:"sans-serif",
                              lineHeight: "1.8"
                            }}>
                              {section.from !== "user" && section.message.trimStart() === currentAnswer.trimStart()
                                ? <ExtractLaTeXExpressions text={animatedText} />
                                : <ExtractLaTeXExpressions text={section.message.trimStart()} />}
                                {blinkerVisible && section.message === currentAnswer.trimStart()&&  (
        <span id="blinker">|</span> 
      )}
                            </pre>
                      </small>
                    )}
                      
                    </p>
                  )}
                </div>
                {/* {section.from !== "user" && (
                  <div className="d-flex justify-content-center mb-3">
                    <div className="d-flex w-75 justify-content-end">
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faThumbsUp}
                        style={{
                          color: `${section.liked ? "rgb(3, 233, 244)" : "white"}`,
                        }}
                      />
                      <FontAwesomeIcon
                        className="cursor-pointer px-3"
                        icon={faThumbsDown}
                        style={{
                          color: `${section.liked ? "white" : "red"}`,
                        }}
                      />   
                      <div
                        className="cursor-pointer pb-2"
                        onClick={() => setCopied(true)}>
                        {copied &&  section.message.trimStart() === currentAnswer.trimStart() ? (
                          <span className="py-2 text-muted">Copied</span>
                        ) : (
                          <FontAwesomeIcon
                            style={{ color: `${true}:"rgb(108, 117, 105)"` }}
                            icon={faCopy}
                          />
                        )}
                      </div>
                      </div>
                    </div>)} */}
                  </div> ))):(
                  <div className="chat-skeleton mt-5"></div>
                  )}
             
                  </div>
                  ):(
                    <div>
                      {!currentChat && <MakronexaOverview/>}
                    </div>
                  )}
  
         {currentChat &&(
          <div className="pb-3 ask-input-nav main_bg py-3">
            <div className="d-flex input-container justify-content-center ms-3">
          
              <div className="d-flex justify-content-between w-75 align-items-center">
                 {aiError &&alertVisible&&(
                <div className="regenerate-btn-container">
                  <AlertBox message="Something went wrong at our end, try later" type="danger" loading={false}/>
                </div>
                )
              }
                <FilesIcons/>
                <div className="d-flex align-items-center">  
                    <input
                    type="text"
                    onKeyDown={(e) => {
                      e.keyCode === 13 && e.shiftKey === false && handleAsk();
                    }}
                    style={{ width: "30rem" }}
                    className="search py-2 px-2 ms-1"
                    placeholder="Ask me anything ..."
                    value={question}
                    onChange={handleInput}
                  />
                </div>
                {!loading && (
                <div className="btn btn-primary" onClick={handleAsk}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                  )}
              </div>
            </div>
            <FontAwesomeIcon
              className="go-bottom d-none d-md-block cursor-pointer"
              icon={faArrowCircleDown}
              onClick={scrollToLastMessage}
            />
          </div>
          )}
        </div>
        <div className="col chat-nav d-none d-md-block col-md-4 border-round pt-3 border-radius-round">
          <div>    
            <Button className="btn-primary py-2 d-flex justify-content-center me-2 w-100 content_bg-2" onClick={async()=>{
              await handleNewChat()
            }}>
              <FontAwesomeIcon className="d-xl-block me-1 d-none" icon={faPlus} /> <small className="text-nowrap">New chat</small>
            </Button>
           {!isChatLoading||chats.length>0?(
          <div className="my-3">
            {isChatError ?(
            <div className="mt-5">
              <span className="text-muted">{isChatError}</span>
            </div>):(
              <ul>
              {chats.length>0 &&(
                chats
                .filter((chat) => chat.makronexaQAs.length !==0)
                .map((chat,index)=>{
                  return(
              <li className={`nav-item p-2 border-radius-round my-1  d-flex justify-content-between align-items-center ${currentChat===chat.id?"content_bg":"header"}`} key={index}>
                <small className="d-flex w-100" 
                onClick={() => handleChatItemClick(chat.id)}
                >
                <FontAwesomeIcon 
                className={`${currentChat===chat.id?"":"header"}`}
                  icon={faComments} style={{color:"gray"}} />
                  {chat.makronexaQAs.length > 0 &&(
                  <span className=" ms-2 text-start chat_header_name">
                    {chat.makronexaQAs[0].message}
                  </span>
                  )}
                </small>
                <FontAwesomeIcon onClick={async()=>{
                  await deleteChat(token.accessToken,chat.id,user.id)
                  getAllChats()
                  setMessages([])
                  }} 
                  icon={faTrashCan} style={{color:"red",fontSize:"0.8rem"}} />
              </li>)}))}
            </ul>)}
          </div>
          ):(
          <div className="mt-5" >
            <Spinner/>
          </div>
          )}
          </div>
        
        </div>
      </div>
    );
  };
  
  export default MakronexusAI