import React from 'react';
import Content from '../content/Content';


class Layout extends React.Component {
    render() {
        return(
            <div className="layout">
                <div className="layout__aside-container">
                    <div className="sidebar-menu-vertical__body">
                        <a href="/" className="sidebar-menu-vertical__logo">
                            <div className="sidebar-menu-vertical__logo">
                                logo
                            </div>
                        </a>
                        <div className="sidebar-menu-vartical__list">
                            <span className="sidebar-menu-vertical__icon">
                                <svg width="24" height="24" fill="#5b728c" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M6.756 3H12a1 1 0 011 1v5.308a1 1 0 11-2 0V6.414l-6.293 6.293a1 1 0 01-1.414-1.414L9.586 5h-2.83a1 1 0 010-2zm13.951 8.293a1 1 0 010 1.414L14.414 19h2.83a1 1 0 110 2H12a1 1 0 01-1-1v-5.308a1 1 0 012 0v2.894l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </span>
                            <span className="sidebar-menu-vertical__title">History</span>
                        </div>
                        <div className="sidebar-menu-vartical__list">
                            <span className="sidebar-menu-vertical__icon">
                                <svg width="24" height="24" fill="#5b728c" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fillRule="{evenodd}" d="M3.903 4.767A2 2 0 015.889 3h12.222a2 2 0 011.986 1.767l1.502 12.766A4 4 0 0117.626 22H6.374A4 4 0 012.4 17.533L3.903 4.767zM18.11 5H5.889L4.387 17.767A2 2 0 006.374 20h11.252a2 2 0 001.987-2.233L18.11 5zM8 7a1 1 0 011 1 3 3 0 006 0 1 1 0 012 0A5 5 0 117 8a1 1 0 011-1z" clipRule="{evenodd}"></path>
                                </svg>
                            </span>
                            <span className="sidebar-menu-vertical__title">Market</span>
                        </div>
                        <div className="sidebar-menu-vartical__list">
                            <span className="sidebar-menu-vertical__icon">
                                <svg width="24" height="24" fill="#5b728c"  viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fillRule="{evenodd}" d="M6 6a2 2 0 012-2h8a2 2 0 012 2v.023h2.133c.38 0 .857.069 1.268.347.468.317.732.825.732 1.418V9.93c0 1.165-.31 2.104-.828 2.839-.51.725-1.18 1.191-1.81 1.49a6.286 6.286 0 01-1.693.512 6.305 6.305 0 01-.775.073h-.026a1 1 0 01-.406-.085c-.25.334-.52.638-.794.911-1.008 1.005-2.128 1.647-2.801 1.978V19h3a1 1 0 110 2H8a1 1 0 110-2h3v-1.353c-.673-.331-1.793-.973-2.801-1.978a8.435 8.435 0 01-.765-.872 1 1 0 01-.3.046h-.028a3.888 3.888 0 01-.218-.01 6.307 6.307 0 01-.556-.063 6.286 6.286 0 01-1.693-.512c-.631-.299-1.3-.765-1.81-1.49C2.31 12.033 2 11.094 2 9.929V7.79c0-.594.264-1.102.733-1.42.41-.277.887-.346 1.267-.346h2V6zm0 2.023H4v1.906c0 .792.205 1.32.464 1.687.264.376.628.644 1.03.834.287.136.58.226.842.285A6.678 6.678 0 016 10.625V8.023zm11.654 4.742a6.674 6.674 0 00.346-2.14V8.023h2.133v1.906c0 .792-.205 1.32-.463 1.687-.265.376-.629.644-1.031.834-.34.161-.689.258-.985.315zM16 6H8v4.625c0 1.548.714 2.734 1.61 3.628.865.86 1.857 1.404 2.39 1.656.533-.252 1.525-.795 2.39-1.656.896-.894 1.61-2.08 1.61-3.628V6z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            <span className="sidebar-menu-vertical__title">Events</span>
                        </div>
                        <div className="sidebar-menu-vartical__list">
                            <span className="sidebar-menu-vertical__icon">
                                <svg width="24" height="24" fill="#5b728c" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="{evenodd}" d="M12 4a8 8 0 100 16h6.94l-.47-2.394a1.2 1.2 0 01.114-.788c.144-.275.627-1.217.816-1.768.242-.704.6-2.025.6-3.05a8 8 0 00-8-8zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 1.362-.446 2.935-.708 3.7-.196.57-.588 1.366-.806 1.794l.605 3.075A1.2 1.2 0 0119.913 22H12C6.477 22 2 17.523 2 12z" clipRule="evenodd"></path><path fill="currentColor" fillRule="{evenodd}" d="M12.127 9.013c-.662 0-1.197.535-1.197 1.196a1 1 0 01-2 0 3.197 3.197 0 115.427 2.29l-1.681 1.681a1 1 0 01-1.414-1.414l1.691-1.691.006-.006a1.197 1.197 0 00-.833-2.056z" clipRule="evenodd"></path>
                                    <path fill="currentColor" d="M13 16.559a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                </svg>
                            </span>
                            <span className="sidebar-menu-vertical__title">Help</span>
                        </div>
                        <div className="sidebar-menu-vartical__list setting">
                            <span className="sidebar-menu-vertical__icon">
                                <svg width="24" height="24" fill="{#5b728c}" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" d="M10.986 21.97c-1.09 0-1.99-.88-2.02-1.96l-.02-.83-1.65-.95c.01.01-.05.01-.08.01l-.71.38c-.95.51-2.17.17-2.71-.76l-1.02-1.75a2.02 2.02 0 01.7-2.73l.72-.44v-1.89l-.73-.45c-.94-.57-1.25-1.8-.7-2.74l1.02-1.75c.54-.93 1.76-1.27 2.71-.76l.74.4c0-.01.06-.01.08-.01l1.61-.92.04-.85c.02-1.09.93-1.97 2.02-1.97h2.04c1.09 0 1.99.88 2.02 1.96l.02.83 1.65.95c-.01-.01.05-.01.08-.01l.71-.38c.95-.51 2.17-.17 2.71.76l1.02 1.75c.55.94.23 2.17-.7 2.73l-.72.44-.01 1.89.73.46c.93.57 1.25 1.79.7 2.73l-1.02 1.75c-.55.93-1.76 1.27-2.72.76l-.74-.4c.01.01-.05.01-.08.02l-1.6.92-.04.85a2.036 2.036 0 01-2.02 1.96h-2.03zm-3.72-5.74c.36 0 .72.09 1.02.26l1.64.94c.58.33 1 1.03 1.02 1.7l.02.83 2.07.01.05-.85c.02-.67.44-1.37 1.02-1.7l1.63-.93c.58-.33 1.4-.34 1.98-.02l.74.4 1.06-1.76-.73-.45c-.58-.35-.98-1.06-.98-1.73v-1.87c0-.67.4-1.38.98-1.73l.72-.44-1.01-1.77-.78.39c-.59.32-1.4.31-1.98-.03l-1.64-.93c-.58-.33-1-1.03-1.02-1.7l-.02-.84-2.07-.01-.05.85c-.02.67-.44 1.37-1.02 1.7l-1.64.94c-.58.33-1.39.34-1.98.02l-.74-.4-1.06 1.76.73.45c.57.35.97 1.06.97 1.73v1.87c0 .67-.4 1.38-.98 1.73l-.72.44 1.06 1.77.74-.4c.29-.16.63-.23.97-.23z"></path><path fill="currentColor" d="M12.006 15.99c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </span>
                            <span className="sidebar-menu-vertical__title">Settings</span>
                        </div>
                    </div>
                    <div className="sidebar-menu-vertical__footer">
                        <div className="online-users-beta">
                            <div className="online-users-beta__title">0</div>
                            <div className="online-users-beta__subtitle">
                                <span>online</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Content/>
            </div>
        )
    }
}

export default Layout;
