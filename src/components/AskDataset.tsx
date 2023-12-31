import { faArrowCircleDown, faChevronUp, faComments,  faGear,  faPaperPlane,  faPlus,  faPowerOff,    faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"
import {  useEffect, useRef, useState } from "react"
import { Button,  Dropdown,  Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
// import { useDispatch } from "react-redux"
import { chatWithAiDataset, deleteDatasetChat, getAllDatasetAiChats, getDatasetChatMessages,  logoutUser, newChat } from "../redux/actions"
// import { Dispatch } from "redux"
import "./MakronexusAi.css"
import { SearchImage, UserRegistration } from "../Types"
import AlertBox from "./Alerts"
import * as Icon from "react-bootstrap-icons"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import Image from "./Image"
import { Link } from "react-router-dom"
import katex from 'katex';
import 'katex/dist/katex.min.css'
import ImageCard from "./ImageCard"
import SignInModal from "./Modal/SignIn"
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
    dataset_id?:string;
  }
  
  interface MobileNavProps{
    chats:chatProps[]
  }
  interface chatProps{
    id:string;
    dataset_chats:Message[];
    createdAt:string;
    updatedAt:string;
  }

  const AskDataset: React.FC = () => {
    const user:UserRegistration=useSelector((state:RootState)=>state.userData.data)
    const token=useSelector((state:RootState)=>state.accessToken.accessToken)
    const isTokenExpired=useSelector((state:RootState)=>state.userData.isTokenExpired)
    const [loading, setLoading] = useState(false); 
    const [currentChat, setCurrentChat] = useState(""); 
    const [chats, setChats] = useState<chatProps[]>([]); 
    const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [isChatError, setIsChatError] = useState<string | null>(null);
  const params=useParams()
    const [currentModel]=useState("gpt-3.5-turbo")
    const [showSignInModal,setShowSignInModal]=useState(false)
    const [messages, setMessages] = useState<Message[]>([]);
    const [question, setQuestion] = useState<string>("");
    const [aiError, setAiError] = useState<boolean>(false);
    const [currentAnswer,setCurrentAnswer]=useState<string>("")
    const [animatedText, setAnimatedText] = useState<string>("");
    const [isNewChat,setIsNewChat] =useState(true)
    const [blinkerVisible, setBlinkerVisible] = useState(true);
    const [alertVisible, setAlertVisible] = useState(true);
    const [autoFilled, setAutoFilled] = useState<boolean>(false);
    const [isChatMessagesLoading, setIsChatMessagesLoading] = useState(false);
const [errorChatMessages, setErrorChatMessages] = useState("");
console.log(errorChatMessages)

    // const navigate=useNavigate()
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
        // navigate("/login")
        setShowSignInModal(true)
      }else{
        setShowSignInModal(false)
      }
      if(isTokenExpired){
        const handleLogout = () => {
          dispatch(logoutUser());
          localStorage.removeItem('accessToken');
          // navigate('/login') ; 
          setShowSignInModal(true)      
      }
        handleLogout()
      }else{
        setShowSignInModal(false)
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
    useEffect(()=>{
      handleNewChat()
    },[])
    const lastMessageRef = useRef<HTMLDivElement | null>(null); 
  const handleAsk = async () => {   
    if (question !== "") { 
      const newMessage = { message: question, type:"text", from: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setQuestion("");
      setAutoFilled(false);
      try {
        setLoading(true); 
        const answer = await chatWithAiDataset(token.accessToken,[...messages, newMessage],currentModel,question,currentChat,params.dataset_id!, params.dataset_name!,Number(params.temp),user.id!);
        if (answer) {
          setIsNewChat(false)
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
  };

  const getAllChats=async()=>{ 
    if (user.id) {
      setIsChatLoading(true);
      try {
        const allChats = await getAllDatasetAiChats(token.accessToken,params.dataset_id!, user.id);
        if(allChats.length>=0){
            // const currentDatasetChats=allChats.filter((chat)=>chat.)
            
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
      if (lastChat && lastChat.dataset_chats.length===0 && !question) {
        await deleteDatasetChat(token.accessToken,lastChat.id,params.dataset_id!,user.id);  }
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
const handleGetDatasetChatMessages = async () => {
  setIsChatMessagesLoading(true);
  if (currentChat) {
    try {
      const chatMessages = await getDatasetChatMessages(token.accessToken, currentChat, user.id!);
      if (chatMessages[0].dataset_chats.length > 0) {
        setMessages(chatMessages[0].dataset_chats);
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
    handleGetDatasetChatMessages();
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
            <Icon.Paperclip className="header" onClick={handleClipping} size={25} />
            {isClipping && (
              <div className="d-flex files flex-column">
                <label htmlFor="image">
                  <span className=" clip-image ">
                    {" "}
                    <Icon.ImageFill size={20} className="header" />
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
                    <Icon.FileEarmarkFill size={20} className="header" />
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

      <div className="d-flex px-2">
            <img
              src={md_logo_small}
              alt={CompanyName}
              style={{ width: `${50}px`, height: `${50}px`, borderRadius: "5%",objectFit:"contain" }}
              className="img_component logo"
            />
      </div>
      
      <div className={`nav-links content_bg d-flex main_bg  flex-column justify-content-between ms-3 ${navActive ? 'nav-active pt-3' : ''}`}>
        <div>
          <ul className="d-flex flex-column ">  
       <div className={`${chats.length>0?"d-flex w-100 mb-2  ps-5 justify-content-between px-2":"d-flex  justify-content-between px-2"}`}>
            <Button className="btn-primary text-nowrap  content_bg-2 " onClick={async()=>{
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
              .filter((chat) => chat.dataset_chats.length !==0)
              .map((chat,index)=>{
                return(
            <li className={`nav-item p-2 w-100 my-1  d-flex justify-content-center align-items-center ${currentChat===chat.id?"main_bg":"text-white"}`} key={index}>
              <small className="d-flex w-75" 
              onClick={() => handleChatItemClick(chat.id)}
              >
              <FontAwesomeIcon 
              className={`${currentChat===chat.id?"text-dark":"text-white"}`}
                icon={faComments}  />
                {chat.dataset_chats.length > 0 &&(
                <span className=" ms-2 text-start chat_header_name">
                  {chat.dataset_chats[chat.dataset_chats.length-1].message}
                </span>
                )}
              </small>
              <FontAwesomeIcon onClick={async()=>{
                await deleteDatasetChat(token.accessToken,chat.id,params.dataset_id!,user.id)
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
            <div className="user-logout w-100 pb-2">
            <Dropdown>
<Dropdown.Toggle className="navbar-item w-100 d-flex justify-content-between align-items-center">
      <div className="pt-2">
            <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
                <span className="px-2 py-0">{user.first_name} {user.last_name}</span>
            </div>
             <FontAwesomeIcon style={{fontSize:"0.8rem"}} icon={faChevronUp}/>         
</Dropdown.Toggle>

<Dropdown.Menu className="py-0 "  style={{width:"20rem"}}>
  <Dropdown.Item className="py-2 main_bg">
    <Link to={`/users/account/${user.id}`} className="textColor px-2">
    <Image src={user.avatar ||`https://img.freepik.com/free-icon/user_318-159711.jpg?size=626&ext=jpg&uid=R36208328&ga=GA1.1.377730112.1687240299&semt=ais`} height={30} width={30} alt="avatar"/>
      <span className="px-2 text-dark">Account</span>
    </Link>
  </Dropdown.Item>
{
  (user.role.trim()==="admin" || user.role.trim()==="teacher") && <div>
      <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2 main_bg">
    <Link to={`/${user.id}/datasets`} className="textColor px-2">
    <FontAwesomeIcon icon={faGear} className="text-dark"/>
      <span className="px-2 text-dark">Settings</span>
    </Link>
  </Dropdown.Item>
  </div>
}
  <hr className="my-0 py-0" />
  <Dropdown.Item className="py-2 main_bg">
    <div
      onClick={handleLogout}
      className="textColor px-2"
    >
    <FontAwesomeIcon className="text-dark" icon={faPowerOff}/>
<span className="px-2 text-dark">
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
          { token &&
          <MobileNav chats={chats}/>
          }
        </div>
        <div className="col col-md-8 mt-5 helper">
          <div className={`d-none d-lg-block makronexa-alert ${showAlert ? 'visible' : 'hidden'}`}>
            {loading?(
              <AlertBox type="info" message="Makronexa is thinking..." loading={loading} />
            ):(
        <AlertBox type="success" message="Makronexa has responded!" loading={loading} />
            )}
          </div>
          {(messages.length > 0 || currentChat) &&
            (<div className="mt-5"> {messages.length>0 && !isChatMessagesLoading?( messages.map((section, index) => (
              <div key={index}>
                <div className="d-flex chats-messages justify-content-center text-start mt-2">
                <div className="pe-2">
                {section.type!=="imageUrl"&&(
                  <div  className="user_avatar">    
                    <img
                      src={section.from === "user" ? user.avatar : md_logo_small}
                      alt={section.from}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                      className="img_component"
                    />
                  </div>
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
                        <small className="text-dark">
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
                              lineHeight: "1.8",
                              color:"black",
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
                  </div> ))):(
                  <div>
                    {
                      !isNewChat && <div className="chat-skeleton mt-5"></div>
                    }
                  </div>
                  )}
             
                  </div>
                  )}
         
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
                {!loading &&  (
                <div className="btn btn-primary" onClick={handleAsk}>
                  {currentChat && 
                  <FontAwesomeIcon className="header" icon={faPaperPlane} />
                  }
                </div>
                  )}
              </div>
            </div>
            <FontAwesomeIcon
              className="go-bottom header d-none d-md-block cursor-pointer"
              icon={faArrowCircleDown}
              onClick={scrollToLastMessage}
            />
          </div>
          
        </div>
        <div className="col chat-nav d-none d-md-block col-md-4 content_bg pt-3 border-radius-round">
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
              {chats && chats.length>0 &&(
                chats
                .filter((chat) => chat.dataset_chats.length !==0)
                .map((chat,index)=>{
                  return(
              <li className={`nav-item p-2 border-radius-round my-1  d-flex justify-content-between align-items-center ${currentChat===chat.id?"content_bg":"header"}`} key={index}>
                <small className="d-flex w-100" 
                onClick={() => handleChatItemClick(chat.id)}
                >
                <FontAwesomeIcon 
                className={`${currentChat===chat.id?"text-dark":"header"}`}
                  icon={faComments} style={{color:"black"}} />
                  {chat.dataset_chats.length > 0 &&(
                  <span className={`ms-2 text-start chat_header_name ${currentChat===chat.id?" text-dark":"header"}`} >
                    {chat.dataset_chats[0].message}
                  </span>
                  )}
                </small>
                <FontAwesomeIcon onClick={async()=>{
                  await deleteDatasetChat(token.accessToken,chat.id,params.dataset_id!,user.id)
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
          <SignInModal show={showSignInModal} onClose={()=>setShowSignInModal(false)}/>
        </div>
      </div>
    );
  };
  
  export default AskDataset