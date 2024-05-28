import React from 'react'
import TopNav from '../comonents/TopNav'
import SideBar from '../comonents/SideBar'
import ChartAmp from '../comonents/ChartAmp'
import ImpressionsCard from '../comonents/ImpressionsCard'
import ProgressCard from '../comonents/ProgressCard'
import SalesAndActivity from '../comonents/SalesAndActivity'
import TableCard from '../comonents/TableCard'

function DashBoard() {
  return (
    <>
    <div>
      <div className='loader-bg' style={{ display: "none" }}>
        <div className='loader-bar' />
      </div>
      <div
        id='pcoded'
        className='pcoded iscollapsed'
        nav-type='st2'
        theme-layout='vertical'
        vertical-placement='left'
        vertical-layout='wide'
        pcoded-device-type='desktop'
        vertical-nav-type='offcanvas'
        vertical-effect='shrink'
        vnavigation-view='view1'
        fream-type='theme1'
        layout-type='light'
      >
        <div className='pcoded-overlay-box' />
        <div className='pcoded-container navbar-wrapper'>
          <TopNav />
          <div className='showChat_inner'>
            <div className='media chat-inner-header'>
              <a className='back_chatBox'>
                {"{"}" "{"}"}
                <i className='feather icon-x' /> Josephin Doe{"{"}" "{"}"}
              </a>
            </div>
            <div
              className='slimScrollDiv'
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 444,
              }}
            >
              <div
                className='main-friend-chat'
                style={{ overflow: "hidden", width: "auto", height: 444 }}
              >
                <div className='media chat-messages'>
                  <a className='media-left photo-table' href='#!'>
                    <img
                      className='media-object img-radius img-radius m-t-5'
                      src='./template_files/avatar-2.jpg'
                      alt='Generic placeholder image'
                    />
                  </a>
                  <div className='media-body chat-menu-content'>
                    <div className>
                      <p className='chat-cont'>
                        I'm just looking around. Will you tell me something
                        about yourself?
                      </p>
                    </div>
                    <p className='chat-time'>8:20 a.m.</p>
                  </div>
                </div>
                <div className='media chat-messages'>
                  <div className='media-body chat-menu-reply'>
                    <div className>
                      <p className='chat-cont'>Ohh! very nice</p>
                    </div>
                    <p className='chat-time'>8:22 a.m.</p>
                  </div>
                </div>
                <div className='media chat-messages'>
                  <a className='media-left photo-table' href='#!'>
                    <img
                      className='media-object img-radius img-radius m-t-5'
                      src='./template_files/avatar-2.jpg'
                      alt='Generic placeholder image'
                    />
                  </a>
                  <div className='media-body chat-menu-content'>
                    <div className>
                      <p className='chat-cont'>can you come with me?</p>
                    </div>
                    <p className='chat-time'>8:20 a.m.</p>
                  </div>
                </div>
              </div>
              <div
                className='slimScrollBar'
                style={{
                  background: "rgb(0, 0, 0)",
                  width: 7,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "block",
                  borderRadius: 7,
                  zIndex: 99,
                  right: 1,
                }}
              />
              <div
                className='slimScrollRail'
                style={{
                  width: 7,
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: "none",
                  borderRadius: 7,
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: 90,
                  right: 1,
                }}
              />
            </div>
            <div className='chat-reply-box'>
              <div className='right-icon-control'>
                <div className='input-group input-group-button'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Write hear . . '
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn btn-primary waves-effect waves-light'
                      type='button'
                    >
                      <i className='feather icon-message-circle' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pcoded-main-container' style={{ marginTop: 73 }}>
            <div className='pcoded-wrapper'>
              <SideBar />
              <div
                className='pcoded-content'
                style={{ marginLeft: "0px!important" }}
              >
                <div className='page-header card'>
                  <div className='row align-items-end'>
                    <div className='col-lg-8'>
                      <div className='page-header-title'>
                        <i className='feather icon-home bg-c-blue' />
                        <div className='d-inline'>
                          <h5>Dashboard</h5>
                          <span>
                            lorem ipsum dolor sit amet, consectetur
                            adipisicing elit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='page-header-breadcrumb'>
                        <ul className='breadcrumb breadcrumb-title'>
                          <li className='breadcrumb-item'>
                            <a href='#'>
                              <i className='feather icon-home' />
                            </a>
                          </li>
                          <li className='breadcrumb-item'>
                            <a href='#!'>Dashboard</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pcoded-inner-content'>
                  <div className='main-body'>
                    <div className='page-wrapper'>
                      <div className='page-body'>
                        <div className='row'>
                          <ChartAmp />
                          <ImpressionsCard />
                          <ProgressCard />
                          <SalesAndActivity />
                          <TableCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='styleSelector' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DashBoard