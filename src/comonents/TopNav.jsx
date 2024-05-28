import React from 'react'

function TopNav() {
  return (
    <div>  <nav
    className='navbar header-navbar pcoded-header iscollapsed'
    header-theme='themelight1'
    pcoded-header-position='fixed'
  >
    <div className='navbar-wrapper'>
      <div className='navbar-logo' logo-theme='theme6'>
        <a href='#'>
          <img
            className='img-fluid'
            src='./template_files/logo.png'
            alt='Theme-Logo'
          />
        </a>
        <a className='mobile-menu' id='mobile-collapse' href='#!'>
          <i className='feather icon-menu icon-toggle-left' />
        </a>
        <a className='mobile-options waves-effect waves-light'>
          <i className='feather icon-more-horizontal' />
        </a>
      </div>
      <div className='navbar-container container-fluid'>
        <ul className='nav-left'>
          <li className='header-search'>
            <div className='main-search morphsearch-search'>
              <div className='input-group'>
                <span className='input-group-prepend search-close'>
                  <i className='feather icon-x input-group-text' />
                </span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Keyword'
                />
                <span className='input-group-append search-btn'>
                  <i className='feather icon-search input-group-text' />
                </span>
              </div>
            </div>
          </li>
          <li>
            <a
              href='#!'
              onclick='javascript:toggleFullScreen()'
              className='waves-effect waves-light'
            >
              <i className='full-screen feather icon-maximize' />
            </a>
          </li>
        </ul>
        <ul className='nav-right'>
          <li className='header-notification'>
            <div className='dropdown-primary dropdown'>
              <div className='dropdown-toggle' data-toggle='dropdown'>
                <i className='feather icon-bell' />
                <span className='badge bg-c-red'>5</span>
              </div>
              <ul
                className='show-notification notification-view dropdown-menu'
                data-dropdown-in='fadeIn'
                data-dropdown-out='fadeOut'
              >
                <li>
                  <h6>Notifications</h6>
                  <label className='label label-danger'>New</label>
                </li>
                <li>
                  <div className='media'>
                    <img
                      className='img-radius'
                      src='./template_files/avatar-4.jpg'
                      alt='Generic placeholder image'
                    />
                    <div className='media-body'>
                      <h5 className='notification-user'>John Doe</h5>
                      <p className='notification-msg'>
                        Lorem ipsum dolor sit amet, consectetuer elit.
                      </p>
                      <span className='notification-time'>
                        30 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='media'>
                    <img
                      className='img-radius'
                      src='./template_files/avatar-3.jpg'
                      alt='Generic placeholder image'
                    />
                    <div className='media-body'>
                      <h5 className='notification-user'>
                        Joseph William
                      </h5>
                      <p className='notification-msg'>
                        Lorem ipsum dolor sit amet, consectetuer elit.
                      </p>
                      <span className='notification-time'>
                        30 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='media'>
                    <img
                      className='img-radius'
                      src='./template_files/avatar-4.jpg'
                      alt='Generic placeholder image'
                    />
                    <div className='media-body'>
                      <h5 className='notification-user'>
                        Sara Soudein
                      </h5>
                      <p className='notification-msg'>
                        Lorem ipsum dolor sit amet, consectetuer elit.
                      </p>
                      <span className='notification-time'>
                        30 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className='header-notification'>
            <div className='dropdown-primary dropdown'>
              <div
                className='displayChatbox dropdown-toggle'
                data-toggle='dropdown'
              >
                <i className='feather icon-message-square' />
                <span className='badge bg-c-green'>3</span>
              </div>
            </div>
          </li>
          <li className='user-profile header-notification'>
            <div className='dropdown-primary dropdown'>
              <div className='dropdown-toggle' data-toggle='dropdown'>
                <img
                  src='./template_files/avatar-4.jpg'
                  className='img-radius'
                  alt='User-Profile-Image'
                />
                <span>John Doe</span>
                <i className='feather icon-chevron-down' />
              </div>
              <ul
                className='show-notification profile-notification dropdown-menu'
                data-dropdown-in='fadeIn'
                data-dropdown-out='fadeOut'
              >
                <li>
                  <a href='#!'>
                    {"{"}" "{"}"}
                    <i className='feather icon-settings' /> Settings
                    {"{"}" "{"}"}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    {"{"}" "{"}"}
                    <i className='feather icon-user' /> Profile{"{"}"
                    "{"}"}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    {"{"}" "{"}"}
                    <i className='feather icon-mail' /> My Messages
                    {"{"}" "{"}"}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    {"{"}" "{"}"}
                    <i className='feather icon-lock' /> Lock Screen
                    {"{"}" "{"}"}
                  </a>
                </li>
                <li>
                  <a href='#'>
                    {"{"}" "{"}"}
                    <i className='feather icon-log-out' /> Logout{"{"}
                    " "{"}"}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id='sidebar' className='users p-chat-user showChat'>
    <div className='had-container'>
      <div className='p-fixed users-main'>
        <div className='user-box'>
          <div className='chat-search-box'>
            <a className='back_friendlist'>
              <i className='feather icon-x' />
            </a>
            <div className='right-icon-control'>
              <div className='input-group input-group-button'>
                <input
                  type='text'
                  id='search-friends'
                  name='footer-email'
                  className='form-control'
                  placeholder='Search Friend'
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-primary waves-effect waves-light'
                    type='button'
                  >
                    <i className='feather icon-search' />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className='slimScrollDiv'
            style={{
              position: "relative",
              overflow: "hidden",
              width: "auto",
              height: 519,
            }}
          >
            <div
              className='main-friend-list'
              style={{
                overflow: "hidden",
                width: "auto",
                height: 519,
              }}
            >
              <div
                className='media userlist-box waves-effect waves-light'
                data-id={1}
                data-status='online'
                data-username='Josephin Doe'
              >
                <a className='media-left' href='#!'>
                  <img
                    className='media-object img-radius img-radius'
                    src='./template_files/avatar-3.jpg'
                    alt='Generic placeholder image '
                  />
                  <div className='live-status bg-success' />
                </a>
                <div className='media-body'>
                  <div className='chat-header'>Josephin Doe</div>
                </div>
              </div>
              <div
                className='media userlist-box waves-effect waves-light'
                data-id={2}
                data-status='online'
                data-username='Lary Doe'
              >
                <a className='media-left' href='#!'>
                  <img
                    className='media-object img-radius'
                    src='./template_files/avatar-2.jpg'
                    alt='Generic placeholder image'
                  />
                  <div className='live-status bg-success' />
                </a>
                <div className='media-body'>
                  <div className='f-13 chat-header'>Lary Doe</div>
                </div>
              </div>
              <div
                className='media userlist-box waves-effect waves-light'
                data-id={3}
                data-status='online'
                data-username='Alice'
              >
                <a className='media-left' href='#!'>
                  <img
                    className='media-object img-radius'
                    src='./template_files/avatar-4.jpg'
                    alt='Generic placeholder image'
                  />
                  <div className='live-status bg-success' />
                </a>
                <div className='media-body'>
                  <div className='f-13 chat-header'>Alice</div>
                </div>
              </div>
              <div
                className='media userlist-box waves-effect waves-light'
                data-id={4}
                data-status='offline'
                data-username='Alia'
              >
                <a className='media-left' href='#!'>
                  <img
                    className='media-object img-radius'
                    src='./template_files/avatar-3.jpg'
                    alt='Generic placeholder image'
                  />
                  <div className='live-status bg-default' />
                </a>
                <div className='media-body'>
                  <div className='f-13 chat-header'>
                    Alia
                    <small className='d-block text-muted'>
                      10 min ago
                    </small>
                  </div>
                </div>
              </div>
              <div
                className='media userlist-box waves-effect waves-light'
                data-id={5}
                data-status='offline'
                data-username='Suzen'
              >
                <a className='media-left' href='#!'>
                  <img
                    className='media-object img-radius'
                    src='./template_files/avatar-2.jpg'
                    alt='Generic placeholder image'
                  />
                  <div className='live-status bg-default' />
                </a>
                <div className='media-body'>
                  <div className='f-13 chat-header'>
                    Suzen
                    <small className='d-block text-muted'>
                      15 min ago
                    </small>
                  </div>
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
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default TopNav