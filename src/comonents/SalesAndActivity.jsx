import React from "react";
import whatsNewData from "../jsons/Whats_New.json";
import ActivityData from "../jsons/Latest_Activity.json";
import {whatsNewsStyle,activityStyle} from '../Data/data'

function SalesAndActivity() {
  return (
    <>
      <div className='col-md-12 col-xl-4'>
        <div className='card card-blue text-white'>
          <div className='card-block p-b-0'>
            <div className='row m-b-50'>
              <div className='col'>
                <h6 className='m-b-5'>Sales In July</h6>
                <h5 className='m-b-0 f-w-700'>$2665.00</h5>
              </div>
              <div className='col-auto text-center'>
                <p className='m-b-5'>Direct Sale</p>
                <h6 className='m-b-0'>$1768</h6>
              </div>
              <div className='col-auto text-center'>
                <p className='m-b-5'>Referal</p>
                <h6 className='m-b-0'>$897</h6>
              </div>
            </div>
            <div
              id='sec-ecommerce-chart-line'
              className
              style={{
                height: 60,
                padding: 0,
                position: "relative",
              }}
            >
              <canvas
                className='flot-base'
                width={367}
                height={60}
                style={{
                  direction: "ltr",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 367,
                  height: 60,
                }}
              />
              <div
                className='flot-text'
                style={{
                  position: "absolute",
                  inset: 0,
                  fontSize: "smaller",
                  color: "rgb(84, 84, 84)",
                }}
              >
                <div
                  className='flot-x-axis flot-x1-axis xAxis x1Axis'
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 8,
                      textAlign: "center",
                    }}
                  >
                    0.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 71,
                      textAlign: "center",
                    }}
                  >
                    2.5
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 133,
                      textAlign: "center",
                    }}
                  >
                    5.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 196,
                      textAlign: "center",
                    }}
                  >
                    7.5
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 259,
                      textAlign: "center",
                    }}
                  >
                    10.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 52,
                      top: 60,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 321,
                      textAlign: "center",
                    }}
                  >
                    12.5
                  </div>
                </div>
                <div
                  className='flot-y-axis flot-y1-axis yAxis y1Axis'
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 52,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 37,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    10
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 23,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    20
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    30
                  </div>
                </div>
              </div>
              <canvas
                className='flot-overlay'
                width={367}
                height={60}
                style={{
                  direction: "ltr",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 367,
                  height: 60,
                }}
              />
            </div>
            <div
              id='sec-ecommerce-chart-bar'
              style={{
                height: 195,
                padding: 0,
                position: "relative",
              }}
            >
              <canvas
                className='flot-base'
                width={367}
                height={195}
                style={{
                  direction: "ltr",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 367,
                  height: 195,
                }}
              />
              <div
                className='flot-text'
                style={{
                  position: "absolute",
                  inset: 0,
                  fontSize: "smaller",
                  color: "rgb(84, 84, 84)",
                }}
              >
                <div
                  className='flot-x-axis flot-x1-axis xAxis x1Axis'
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 8,
                      textAlign: "center",
                    }}
                  >
                    0.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 70,
                      textAlign: "center",
                    }}
                  >
                    2.5
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 133,
                      textAlign: "center",
                    }}
                  >
                    5.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 196,
                      textAlign: "center",
                    }}
                  >
                    7.5
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 259,
                      textAlign: "center",
                    }}
                  >
                    10.0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      maxWidth: 45,
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 322,
                      textAlign: "center",
                    }}
                  >
                    12.5
                  </div>
                </div>
                <div
                  className='flot-y-axis flot-y1-axis yAxis y1Axis'
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 195,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    0
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 163,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    5
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 130,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    10
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 98,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    15
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 65,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    20
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 33,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    25
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      font: '400 0px / 0px "open sans", sans-serif',
                      color: "transparent",
                      left: 0,
                      textAlign: "right",
                    }}
                  >
                    30
                  </div>
                </div>
              </div>
              <canvas
                className='flot-overlay'
                width={367}
                height={195}
                style={{
                  direction: "ltr",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 367,
                  height: 195,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='col-xl-4 col-md-12'>
        <div className='card latest-update-card'>
          <div className='card-header'>
            <h5>What’s New</h5>
            <div className='card-header-right'>
              <ul className='list-unstyled card-option'>
                <li className='first-opt'>
                  <i className='feather icon-chevron-left open-card-option' />
                </li>
                <li>
                  <i className='feather icon-maximize full-card' />
                </li>
                <li>
                  <i className='feather icon-minus minimize-card' />
                </li>
                <li>
                  <i className='feather icon-refresh-cw reload-card' />
                </li>
                <li>
                  <i className='feather icon-trash close-card' />
                </li>
                <li>
                  <i className='feather icon-chevron-left open-card-option' />
                </li>
              </ul>
            </div>
          </div>
          <div className='card-block'>
            <div
              className='slimScrollDiv'
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 290,
              }}
            >
              <div
                className='scroll-widget'
                style={{
                  overflow: "hidden",
                  width: "auto",
                  height: 290,
                }}
              >
                <div className='latest-update-box p-t-20'>
                  {whatsNewData?.what_new_items.map((el, idx) => (
                    <div className='row  p-b-30'>
                      <div className='col-auto text-right update-meta p-r-0'>
                        {whatsNewsStyle[idx].element}
                      </div>
                      <div className='col p-l-5'>
                        <a href='#!'>
                          <h6>{el.message}</h6>
                        </a>
                        <p className='text-muted m-b-0'>{el.created_by}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className='slimScrollBar'
                style={{
                  background: "rgb(0, 0, 0)",
                  width: 5,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "none",
                  borderRadius: 7,
                  zIndex: 99,
                  right: 1,
                  height: "186.475px",
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
        </div>
      </div>
      <div className='col-xl-4 col-md-6'>
        <div className='card latest-update-card'>
          <div className='card-header'>
            <h5>Latest Activity</h5>
            <div className='card-header-right'>
              <ul className='list-unstyled card-option'>
                <li className='first-opt'>
                  <i className='feather icon-chevron-left open-card-option' />
                </li>
                <li>
                  <i className='feather icon-maximize full-card' />
                </li>
                <li>
                  <i className='feather icon-minus minimize-card' />
                </li>
                <li>
                  <i className='feather icon-refresh-cw reload-card' />
                </li>
                <li>
                  <i className='feather icon-trash close-card' />
                </li>
                <li>
                  <i className='feather icon-chevron-left open-card-option' />
                </li>
              </ul>
            </div>
          </div>
          <div className='card-block'>
            <div
              className='slimScrollDiv'
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: 290,
              }}
            >
              <div
                className='scroll-widget'
                style={{
                  overflow: "hidden",
                  width: "auto",
                  height: 290,
                }}
              >
                <div className='latest-update-box'>
                  {ActivityData?.latest_activity.map((el, idx) => (
                    <div className='row p-t-20 p-b-30'>
                      <div className='col-auto text-right update-meta p-r-0'>
                        <i
                          className={
                            " update-icon ring " + activityStyle[idx].background
                          }
                        />
                      </div>
                      <div className='col p-l-5'>
                        <a href={el.readmore_link}>
                          <h6>{el.activity_type}</h6>
                        </a>
                        <p className='text-muted m-b-0'>
                          {el.activity},{"{"}" "{"}"}
                          <a href='#!' className={activityStyle[idx].textColor}>
                            {"{"}" "{"}"}
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className='slimScrollBar'
                style={{
                  background: "rgb(0, 0, 0)",
                  width: 5,
                  position: "absolute",
                  top: 0,
                  opacity: "0.4",
                  display: "none",
                  borderRadius: 7,
                  zIndex: 99,
                  right: 1,
                  height: "186.475px",
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
        </div>
      </div>
    </>
  );
}

export default SalesAndActivity;
