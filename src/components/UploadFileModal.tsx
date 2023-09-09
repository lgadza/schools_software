
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "./Loader";
import "./UploadFile.css"

import React, { useEffect, useState } from 'react';
import { faX } from "@fortawesome/free-solid-svg-icons";

enum ModalState {
  Hidden,
  Uploading,
  Error,
  Success,
}

const UploadFileModal: React.FC<{ onFileUpload: (file: File) => void }> = ({ onFileUpload }) => {
  const [filename, setFilename] = useState<string>('');
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [progressTimeout, setProgressTimeout] = useState<number | null>(null);
  const [modalState, setModalState] = useState<ModalState>(ModalState.Hidden);
  const [state] = useState(1)
  const fileHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const fileTarget = target?.files?.[0];
    if (fileTarget) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilename(fileTarget.name);
        setModalState(ModalState.Hidden);
        onFileUpload(fileTarget);
      };
      reader.readAsDataURL(fileTarget);
    }
  };
 
  const fileReset = () => {
    setFilename('');
  };

  const copy = async () => {
    if (!isCopying) {
      setIsCopying(true);
      const copyButton = document.querySelector("[data-action='copy']") as HTMLButtonElement;
      if (copyButton) {
        copyButton.style.width = `${copyButton.offsetWidth}px`;
        copyButton.disabled = true;
        copyButton.textContent = 'Copied!';
        try {
          await navigator.clipboard.writeText(filename);
        } catch (error) {
          console.error('Failed to copy the text: ', error);
        }
        await new Promise((res) => setTimeout(res, 1000));
        setIsCopying(false);
        copyButton.removeAttribute('style');
        copyButton.disabled = false;
        copyButton.textContent = 'Copy Link';
      }
    }
  };

  const cancel = () => {
    setIsUploading(false);
    setProgress(0);
    setFilename('')
    if (progressTimeout) {
      clearTimeout(progressTimeout);
      setProgressTimeout(null);
    }
    setModalState(ModalState.Hidden);
    fileReset();
  };

  const success = () => {
    setIsUploading(false);
    setModalState(ModalState.Success);
  };

  const fail = () => {
    setIsUploading(false);
    setProgress(0);
    if (progressTimeout) {
      clearTimeout(progressTimeout);
      setProgressTimeout(null);
    }
    setModalState(ModalState.Error);
  };

  const upload = () => {
    if (!isUploading) {
      setIsUploading(true);
      setProgress(0);
      setModalState(ModalState.Uploading);
      progressLoop();
    }
  };


  const progressLoop = () => {
    if (isUploading) {
      const uploadDuration = 2000;
      const intervalDuration = 50; 
      const progressStep = Math.min((intervalDuration / uploadDuration) * 100, 100 - progress);

  
      if (progress < 100) {
        setProgress((prevProgress) => Math.min(prevProgress + progressStep, 100));
        // setProgressTimeout(setTimeout(progressLoop, intervalDuration));
      } else {
        success();
      }
    }
  };
  
  const file = () => {
    const fileInput = document.querySelector('#file') as HTMLInputElement;
    fileInput?.click();
  };
const stateDisplay = () => {
  return state;
};
  const actions = {
  cancel,
  copy,
  fail,
  file,
  fileReset,
  upload
};
console.log(filename,"FILENAME")

const action = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
  const actionName = e.currentTarget.dataset.action;
  if (actionName) {
    const actionFunc = actions[actionName as keyof typeof actions];
    if (actionFunc) {
      actionFunc();
    }
  }
  stateDisplay();
};
useEffect(() => {
  if (isUploading) {
    progressLoop();
  } else {
   
    if (progressTimeout) {
      clearTimeout(progressTimeout);
      setProgressTimeout(null);
    }
  }
}, [isUploading, progress, progressTimeout]);


  return (
    <div
      id="upload"
      className="upload_model"
      data-state={modalState}
      data-ready={!!filename}
      onClick={(e) => action(e)}
    >
      <div className="upload_model_body my-1 mx-2">
        <div className="upload_model_col">
          <svg className="upload_model_icon upload_model_icon--blue" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true"  
           style={{ display: !filename?'block':'none'}}
          >
            <g fill="none" stroke="hsl(223,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <polyline className="upload_model_icon-sdo14" points="7 12 12 7 17 12" strokeDasharray="14.2 14.2" />
              <line className="upload_model_icon-sdo10" x1="12" y1="7" x2="12" y2="17" strokeDasharray="10 10" />
            </g>
          </svg>
          <svg
            className="upload_model_icon upload_model_icon--red"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            aria-hidden="true"
            style={{ display: modalState === ModalState.Error ? 'block' : 'none' }}
          >
            <g fill="none" stroke="hsl(3,90%,50%)" strokeWidth="2" strokeLinecap="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <line className="upload_model_icon-sdo14" x1="7" y1="7" x2="17" y2="17" strokeDasharray="14.2 14.2" />
              <line className="upload_model_icon-sdo14" x1="17" y1="7" x2="7" y2="17" strokeDasharray="14.2 14.2" />
            </g>
          </svg>

          <svg
            className="upload_model_icon upload_model_icon--green"
            viewBox="0 0 24 24"
            width="10px"
            height="10px"
            aria-hidden="true"
            style={{ display: modalState === ModalState.Success ? 'block' : 'none' }}
          >
            <g fill="none" stroke="hsl(138,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle className="upload_model_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
              <polyline className="upload_model_icon-sdo14" points="7 12.5 10 15.5 17 8.5" strokeDasharray="14.2 14.2" />
            </g>
          </svg>
        </div>

        <div className="upload_model_col">
          <div className="upload_model_content" style={{ display: modalState === ModalState.Hidden ? 'block' : 'none' }}>
            {/* <p className="d-flex">Select a file to upload </p> */}
            <div className="upload_model_actions">
              <button className="upload_model_button upload_model_button--upload" type="button" onClick={file}>
                Choose File
              </button>
              <input id="file" type="file" hidden onChange={fileHandle} />
            </div>
            <div className="upload_model_actions d-flex" style={{ display: filename?'block':'none'}}>
              <svg className="upload_model_file-icon" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true"
               style={{ display: filename?'block':'none'}}
              >
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="4 1 12 1 20 8 20 23 4 23" />
                  <polyline points="12 1 12 8 20 8" />
                </g>
              </svg>
              <div className="upload_model_file" data-file>
                {filename}
              </div>
             
                <FontAwesomeIcon className="nav-item me-3" icon={faX} data-action="upload" onClick={fileReset}
               style={{ display: filename?'block':'none'}}/>
              <button className="upload_model_button" type="button" data-action="upload" onClick={upload}
               style={{ display: filename?'block':'none'}}
              >
                Upload
              </button>
            </div>
          </div>

         
          <div className="upload_model_content" style={{ display: modalState === ModalState.Uploading ? 'block' : 'none' }}>
            <div className="">
              <Loader/>
            </div>
            <p className="d-flex">Just give us a moment to process your file.</p>
            <div className="upload_model_actions">
              <div className="upload_model_progress">
                <div className="upload_model_progress-value" data-progress-value>
                  {`${Math.floor(progress * 100)}%`}
                </div>
                <div className="upload_model_progress-bar">
                  <div className="upload_model_progress-fill" data-progress-fill style={{ transform: `translateX(${Math.floor(progress * 100)}%)` }} />
                </div>
              </div>
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>

          <div className="upload_model_content" style={{ display: modalState === ModalState.Error ? 'block' : 'none' }}>
            <h5 className="d-flex">Oops!</h5>
            <p className="d-flex">Your file could not be uploaded due to an error. Try uploading it again?</p>
            <div className="upload_model_actions upload_model_actions--center">
              <button className="upload_model_button" type="button" data-action="upload" onClick={upload}>
                Retry
              </button>
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>

        
          <div className="upload_model_content "  style={{ display: modalState === ModalState.Success ? 'block' : 'none' }}>
            <div className="d-flex justify-content-between align-items-center">

            <p className="d-flex justify-content-between align-items-center">Your file has been uploaded successful!.</p>
            <div className="d-flex justify-content-end ">
              <button className="upload_model_button" type="button" data-action="cancel" onClick={cancel}>
                Done
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Utils {
//   static randomInt(min = 0, max: number = 2 ** 32): number {
//     const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
//     const relativeValue = (max - min) * percent;
//     return Math.round(min + relativeValue);
//   }
// }

export default UploadFileModal;

