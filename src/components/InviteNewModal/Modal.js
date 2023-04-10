import React, { useState } from 'react';


import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import Modals from '@iso/components/Feedback/Modal';
import Input, {
  Textarea,
} from '@iso/components/uielements/input';
import PlusIcon from "@iso/assets/images/icon/plus.svg";
import ModalStyle from './Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';
import {
  CloseOutlined
} from '@ant-design/icons'

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

// const confirm = Modals.confirm;


export default function() {
  const defaultMail = 0
  const [mailCounter, setMailCounter] = useState(defaultMail);
  // const [ mailIndex, setMailIndex] = useState(2)
  const [state, setState] = React.useState({
    loading: false,
    visible: false,
  });
  const showModal = () => {
    setState({
      visible: true,
    });
  };
  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 2000);
    setMailCounter(defaultMail)
  };
  const handleCancel = () => {
    setState({ visible: false });
    setMailCounter(defaultMail)
  };

  
  const btnStyle = { 
    backgroundColor: '#1BD2A4',
    borderColor: '#1BD2A4',
    margin: '8px 0 8px 0',
    color: 'white',
   };
   const inputStyle = {
    margin: '3px 0 8px 0',
   }
   const line = {
    height: '0px',
    left: '0px',
    right: '0px',
    top: 'calc(50% - 0px/2)',
    margin: '18px 0 18px 0',
    border: '2px dashed #E8E8EA', 
   }

   const btnRemove = {
    background: '#F65354',
    borderRadius: '6px',
    padding: '4px',
    width: '76px',
    height: '28px',
    fontSize: '11px',
    border: 'transparent',
    color: 'white',
    cursor: 'pointer',
   }

  return (
        <>

              <button type="primary" className='app-button' onClick={showModal}>
                <div className='flex items-center justify-center'>
                  <img
                      className="mr-10"
                      src={PlusIcon}
                      width={14}
                      height={14}
                      alt="plus"
                    />
                    <div style={{color: 'white'}}><IntlMessages id="forms.button.invite" /></div>
                </div>                
              </button>


  
              <Modal
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                style = {{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                }}
              >

                    <div>
                      <div style={{marginBottom: '20px'}}>
                        <h2>
                          <b>Invite New Candidates</b>
                        </h2>
                      </div>
                      <div>
                        Email 1
                          <Input 
                            placeholder="Enter employer's email"
                            style={inputStyle}
                          />
                      </div>
                      {Array.from({ length: mailCounter}, (_, i) => (
                        <div>
                        Email {i+2}
                        <Input 
                          placeholder="Enter employer's email"
                          style={inputStyle}
                          
                          suffix={(<button style={btnRemove} onClick={()=> setMailCounter(mailCounter - 1)}><CloseOutlined />Remove</button>)}
                        />
                        </div>
                      ))}

                      <div>
                        <Button
                          type='primary'
                          style={btnStyle}
                          onClick={()=> setMailCounter(mailCounter + 1)}
                        >
                          <div className='flex items-center justify-center mr-10'>
                            <img
                              className="mr-10"
                              src={PlusIcon}
                              width={10}
                              height={10}
                              alt="plus"
                            />
                            <p style={{color: 'white'}}>Add More Email</p>
                          </div>
                        </Button>
                      </div>
                      <div style={line} />
                      <div>
                        <div>Message</div>
                        <Textarea 
                          placeholder="Add messages to your Employers here"
                        />
                      </div>
                      <div className='flex items-center justify-center'>
                        <Button
                            key="submit"
                            type="primary"
                            size="large"
                            loading={state.loading}
                            onClick={handleOk}
                            style={btnStyle}
                            block={true}
                          >
                            <p style={{color:'white'}}>Send Invitation Email</p>
                          </Button>
                      </div>
                    </div>


                    
              </Modal>

        </>

  );
}
