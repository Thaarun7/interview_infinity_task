import React from "react";

function SideBar() {
  return (
    <div>
      {" "}
      <nav
        className='pcoded-navbar'
        style={{ display: "none!Important" }}
        navbar-theme='theme1'
        active-item-theme='theme1'
        sub-item-theme='theme2'
        active-item-style='style0'
        pcoded-navbar-position='fixed'
      >
        <div className='nav-list'>
          <div
            className='slimScrollDiv'
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className='pcoded-inner-navbar main-menu'
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Navigation
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu active'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i data-feather="circle"></i>
                    </span>
                    <span className='pcoded-mtext'>Dashboard</span>
                  </a>
                  <ul className='pcoded-submenu' style={{ display: "none" }}>
                    <li className='active'>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Default</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>CRM</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Analytics</span>
                        <span className='pcoded-badge label label-info'>
                          NEW
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-sidebar' />
                    </span>
                    <span className='pcoded-mtext'>Page layouts</span>
                    <span className='pcoded-badge label label-warning'>
                      NEW
                    </span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li
                      className='pcoded-hasmenu'
                      dropdown-icon='style1'
                      subitem-icon='style1'
                    >
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Vertical</span>
                      </a>
                      <ul className='pcoded-submenu'>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Static Layout</span>
                          </a>
                        </li>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Header Fixed</span>
                          </a>
                        </li>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Compact</span>
                          </a>
                        </li>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Sidebar Fixed</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className='pcoded-hasmenu'
                      dropdown-icon='style1'
                      subitem-icon='style1'
                    >
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Horizontal</span>
                      </a>
                      <ul className='pcoded-submenu'>
                        <li className>
                          <a
                            href='#'
                            target='_blank'
                            className='waves-effect waves-dark'
                          >
                            <span className='pcoded-mtext'>Static Layout</span>
                          </a>
                        </li>
                        <li className>
                          <a
                            href='#'
                            target='_blank'
                            className='waves-effect waves-dark'
                          >
                            <span className='pcoded-mtext'>Fixed layout</span>
                          </a>
                        </li>
                        <li className>
                          <a
                            href='#'
                            target='_blank'
                            className='waves-effect waves-dark'
                          >
                            <span className='pcoded-mtext'>
                              Static With Icon
                            </span>
                          </a>
                        </li>
                        <li className>
                          <a
                            href='#'
                            target='_blank'
                            className='waves-effect waves-dark'
                          >
                            <span className='pcoded-mtext'>
                              Fixed With Icon
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Bottom Menu</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i  className='feather icon-menu' />
                    </span>
                    <span className='pcoded-mtext'>Navigation</span>
                  </a>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-layers' />
                    </span>
                    <span className='pcoded-mtext'>Widget</span>
                    <span className='pcoded-badge label label-danger'>
                      100+
                    </span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Statistic</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Data</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Chart Widget</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                UI Element
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-box' />
                    </span>
                    <span className='pcoded-mtext'>Basic</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Alert</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Breadcrumbs</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Button</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Box-Shadow</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Accordion</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Generic Class</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Tabs</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Color</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Label Badge</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Progress Bar</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>List</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>
                          Tooltip And Popover
                        </span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Typography</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Other</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-gitlab' />
                    </span>
                    <span className='pcoded-mtext'>Advance</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Draggable</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Modal</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Notifications</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Rating</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Range Slider</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Slider</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Syntax Highlighter</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Tour</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Tree View</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Nestable</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Toolbar</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-package' />
                    </span>
                    <span className='pcoded-mtext'>Extra</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Session Timeout</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>
                          Session Idle Timeout
                        </span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Offline</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-aperture rotate-refresh' />
                    </span>
                    <span className='pcoded-mtext'>Animations</span>
                  </a>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-command' />
                    </span>
                    <span className='pcoded-mtext'>Icons</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Font Awesome</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Themify</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Simple Line Icon</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Forms
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-clipboard' />
                    </span>
                    <span className='pcoded-mtext'>Form</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Components</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Add-On</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Advance</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Validation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-edit-1' />
                    </span>
                    <span className='pcoded-mtext'>Form Picker</span>
                    <span className='pcoded-badge label label-warning'>
                      NEW
                    </span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-feather' />
                    </span>
                    <span className='pcoded-mtext'>Form Select</span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-shield' />
                    </span>
                    <span className='pcoded-mtext'>Form Masking</span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-tv' />
                    </span>
                    <span className='pcoded-mtext'>Form Wizard</span>
                  </a>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Tables
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-credit-card' />
                    </span>
                    <span className='pcoded-mtext'>Bootstrap Table</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Basic Table</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Sizing Table</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Border Table</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Styling Table</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-inbox' />
                    </span>
                    <span className='pcoded-mtext'>Data Table</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>
                          Basic Initialization
                        </span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>
                          Advance Initialization
                        </span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Styling</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>API</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Ajax</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Server Side</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Plug-In</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Data Sources</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-server' />
                    </span>
                    <span className='pcoded-mtext'>DT Extensions</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>AutoFill</span>
                      </a>
                    </li>
                    <li
                      className='pcoded-hasmenu'
                      dropdown-icon='style1'
                      subitem-icon='style1'
                    >
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Button</span>
                      </a>
                      <ul className='pcoded-submenu'>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Basic Button</span>
                          </a>
                        </li>
                        <li className>
                          <a href='#' className='waves-effect waves-dark'>
                            <span className='pcoded-mtext'>Data Export</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Col Reorder</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Fixed Columns</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Fixed Header</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Key Table</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Responsive</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Row Reorder</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Scroller</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Select Table</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-hash' />
                    </span>
                    <span className='pcoded-mtext'>FooTable</span>
                  </a>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-airplay' />
                    </span>
                    <span className='pcoded-mtext'>Handson Table</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Appearance</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Data Operation</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Rows Columns</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Columns Only</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Cell Features</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Cell Types</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Integrations</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Rows Only</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Utilities</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-edit' />
                    </span>
                    <span className='pcoded-mtext'>Editable Table</span>
                  </a>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Chart And Maps
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-pie-chart' />
                    </span>
                    <span className='pcoded-mtext'>Charts</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Google Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>ChartJs</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>List Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Float Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Knob chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Morris Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Nvd3 Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Peity Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Radial Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Rickshaw Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Sparkline Chart</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>C3 Chart</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-map' />
                    </span>
                    <span className='pcoded-mtext'>Maps</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Google Maps</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Vector Maps</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>
                          Google Map Search API
                        </span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Location</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Pages
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-unlock' />
                    </span>
                    <span className='pcoded-mtext'>Authentication</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Login</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Registration</span>
                      </a>
                    </li>
                    <li className>
                      <a
                        href='#'
                        target='_blank'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Forgot Password</span>
                      </a>
                    </li>
                    <li className>
                      <a
                        href='#'
                        target='_blank'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Lock Screen</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-sliders' />
                    </span>
                    <span className='pcoded-mtext'>Maintenance</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Error</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Comming Soon</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Offline UI</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-mail' />
                    </span>
                    <span className='pcoded-mtext'>Email</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Compose Email</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Inbox</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Read Mail</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                App
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-bookmark' />
                    </span>
                    <span className='pcoded-mtext'>To-Do</span>
                  </a>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Extension
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-file-plus' />
                    </span>
                    <span className='pcoded-mtext'>Editor</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>CK-Editor</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>WYSIWYG Editor</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-calendar' />
                    </span>
                    <span className='pcoded-mtext'>Event Calendar</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>Full Calendar</span>
                      </a>
                    </li>
                    <li className>
                      <a href='#' className='waves-effect waves-dark'>
                        <span className='pcoded-mtext'>CLNDER</span>
                        <span className='pcoded-badge label label-info'>
                          NEW
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-scissors' />
                      <b>IC</b>
                    </span>
                    <span className='pcoded-mtext'>Image Cropper</span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-upload-cloud' />
                    </span>
                    <span className='pcoded-mtext'>File Upload</span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-briefcase' />
                    </span>
                    <span className='pcoded-mtext'>Change Loges</span>
                    <span className='pcoded-badge label label-warning'>
                      1.0
                    </span>
                  </a>
                </li>
              </ul>
              <div
                className='pcoded-navigation-label'
                menu-title-theme='theme1'
              >
                Other
              </div>
              <ul
                className='pcoded-item pcoded-left-item'
                item-border='true'
                item-border-style='solid'
                subitem-border='false'
              >
                <li
                  className='pcoded-hasmenu'
                  dropdown-icon='style1'
                  subitem-icon='style1'
                >
                  <a
                    href='javascript:void(0)'
                    className='waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-list' />
                    </span>
                    <span className='pcoded-mtext'>Menu Levels</span>
                  </a>
                  <ul className='pcoded-submenu'>
                    <li className>
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Menu Level 2.1</span>
                      </a>
                    </li>
                    <li
                      className='pcoded-hasmenu'
                      dropdown-icon='style1'
                      subitem-icon='style1'
                    >
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Menu Level 2.2</span>
                      </a>
                      <ul className='pcoded-submenu'>
                        <li className>
                          <a
                            href='javascript:void(0)'
                            className='waves-effect waves-dark'
                          >
                            <span className='pcoded-mtext'>Menu Level 3.1</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className>
                      <a
                        href='javascript:void(0)'
                        className='waves-effect waves-dark'
                      >
                        <span className='pcoded-mtext'>Menu Level 2.3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className>
                  <a
                    href='javascript:void(0)'
                    className='disabled waves-effect waves-dark'
                  >
                    <span className='pcoded-micon'>
                      <i className='feather icon-power' />
                      <b>D</b>
                    </span>
                    <span className='pcoded-mtext'>Disabled Menu</span>
                  </a>
                </li>
                <li className>
                  <a href='#' className='waves-effect waves-dark'>
                    <span className='pcoded-micon'>
                      <i className='feather icon-watch' />
                    </span>
                    <span className='pcoded-mtext'>Sample Page</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='slimScrollBar'
              style={{
                background: "rgb(0, 0, 0)",
                width: 5,
                position: "absolute",
                top: 0,
                opacity: "0.4",
                display: "block",
                borderRadius: 7,
                zIndex: 99,
                right: 1,
                height: "124.873px",
              }}
            />
            <div
              className='slimScrollRail'
              style={{
                width: 5,
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
      </nav>{" "}
    </div>
  );
}

export default SideBar;
