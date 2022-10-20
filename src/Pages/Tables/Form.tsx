import React from 'react'
import { NavLink } from 'react-router-dom';


const Form = () => {
  return (
    
       <body data-sidebar="dark">



   
    <div id="layout-wrapper">

        
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                  
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo.svg" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17"/>
                            </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-light.svg" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="19"/>
                            </span>
                        </a>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>

                
                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="htmlForm-control" placeholder="Search..."/>
                            <span className="bx bx-search-alt"></span>
                        </div>
                    </form>

                    <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                        <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                            <span key="t-megamenu">Mega Menu</span>
                            <i className="mdi mdi-chevron-down"></i> 
                        </button>
                        <div className="dropdown-menu dropdown-megamenu">
                            <div className="row">
                                <div className="col-sm-8">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-htmlForms">htmlForms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-applications">Applications</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-email">Email</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-projects">Projects</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-horizontal">Horizontal layout</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                                </li>
                        
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-htmlForms">htmlForms</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-5">
                                            <div>
                                                <img src="assets/images/megamenu-img.png" alt="" className="img-fluid mx-auto d-block"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-inline-block d-lg-none ms-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-magnify"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-search-dropdown">
    
                            <form className="p-3">
                                <div className="htmlForm-group m-0">
                                    <div className="input-group">
                                        <input type="text" className="htmlForm-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">English</span>
                            </a>
                           
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                            </a>

                           
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                            </a>

                
                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Italian</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item noti-icon waves-effect"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-customize"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            <div className="px-lg-2">
                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/github.png" alt="Github"/>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                            <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                            <span>Dribbble</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                            <span>Dropbox</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                            <span>Mail Chimp</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/images/brands/slack.png" alt="slack"/>
                                            <span>Slack</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                            <i className="bx bx-fullscreen"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-bell bx-tada"></i>
                            <span className="badge bg-danger rounded-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#!" className="small" key="t-view-all"> View All</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar>
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                <i className="bx bx-cart"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <img src="assets/images/users/avatar-3.jpg"
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">James Lemire</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript: void(0);" className="text-reset notification-item">
                                    <div className="d-flex">
                                        <img src="assets/images/users/avatar-4.jpg"
                                            className="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1">Salena Layfield</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top d-grid">
                                <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                    <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                alt="Header Avatar"/>
                            <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            
                            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                            <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                            <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                            <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                        </div>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="bx bx-cog bx-spin"></i>
                        </button>
                    </div>

                </div>
            </div>
        </header>

        <div className="vertical-menu">

            <div data-simplebar className="h-100">

            
                <div id="sidebar-menu">
            
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title" key="t-menu">Menu</li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                <span key="t-dashboards">Dashboards</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="index.html" key="t-default">Default</a></li>
                                <li><a href="dashboard-saas.html" key="t-saas">Saas</a></li>
                                <li><a href="dashboard-crypto.html" key="t-crypto">Crypto</a></li>
                                <li><a href="dashboard-blog.html" key="t-blog">Blog</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-layout"></i>
                                <span key="t-layouts">Layouts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="true">
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-vertical">Vertical</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="layouts-light-sidebar.html" key="t-light-sidebar">Light Sidebar</a></li>
                                        <li><a href="layouts-compact-sidebar.html" key="t-compact-sidebar">Compact Sidebar</a></li>
                                        <li><a href="layouts-icon-sidebar.html" key="t-icon-sidebar">Icon Sidebar</a></li>
                                        <li><a href="layouts-boxed.html" key="t-boxed-width">Boxed Width</a></li>
                                        <li><a href="layouts-preloader.html" key="t-preloader">Preloader</a></li>
                                        <li><a href="layouts-colored-sidebar.html" key="t-colored-sidebar">Colored Sidebar</a></li>
                                        <li><a href="layouts-scrollable.html" key="t-scrollable">Scrollable</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-horizontal">Horizontal</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="layouts-horizontal.html" key="t-horizontal">Horizontal</a></li>
                                        <li><a href="layouts-hori-topbar-light.html" key="t-topbar-light">Topbar light</a></li>
                                        <li><a href="layouts-hori-boxed-width.html" key="t-boxed-width">Boxed width</a></li>
                                        <li><a href="layouts-hori-preloader.html" key="t-preloader">Preloader</a></li>
                                        <li><a href="layouts-hori-colored-header.html" key="t-colored-topbar">Colored Header</a></li>
                                        <li><a href="layouts-hori-scrollable.html" key="t-scrollable">Scrollable</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-apps">Apps</li>

            

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bx-calendar"></i><span className="badge rounded-pill bg-success float-end">New</span>
                                <span key="t-dashboards">Calendars</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="calendar.html" key="t-tui-calendar">TUI Calendar</a></li>
                                <li><a href="calendar-full.html" key="t-full-calendar">Full Calendar</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="chat.html" className="waves-effect">
                                <i className="bx bx-chat"></i>
                                <span key="t-chat">Chat</span>
                            </a>
                        </li>

                        <li>
                            <a href="apps-filemanager.html" className="waves-effect">
                                <i className="bx bx-file"></i>
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <span key="t-file-manager">File Manager</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-store"></i>
                                <span key="t-ecommerce">Ecommerce</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="ecommerce-products.html" key="t-products">Products</a></li>
                                <li><a href="ecommerce-product-detail.html" key="t-product-detail">Product Detail</a></li>
                                <li><a href="ecommerce-orders.html" key="t-orders">Orders</a></li>
                                <li><a href="ecommerce-customers.html" key="t-customers">Customers</a></li>
                                <li><a href="ecommerce-cart.html" key="t-cart">Cart</a></li>
                                <li><a href="ecommerce-checkout.html" key="t-checkout">Checkout</a></li>
                                <li><a href="ecommerce-shops.html" key="t-shops">Shops</a></li>
                                <li><a href="ecommerce-add-product.html" key="t-add-product">Add Product</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-bitcoin"></i>
                                <span key="t-crypto">Crypto</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="crypto-wallet.html" key="t-wallet">Wallet</a></li>
                                <li><a href="crypto-buy-sell.html" key="t-buy">Buy/Sell</a></li>
                                <li><a href="crypto-exchange.html" key="t-exchange">Exchange</a></li>
                                <li><a href="crypto-lending.html" key="t-lending">Lending</a></li>
                                <li><a href="crypto-orders.html" key="t-orders">Orders</a></li>
                                <li><a href="crypto-kyc-application.html" key="t-kyc">KYC Application</a></li>
                                <li><a href="crypto-ico-landing.html" key="t-ico">ICO Landing</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-envelope"></i>
                                <span key="t-email">Email</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="email-inbox.html" key="t-inbox">Inbox</a></li>
                                <li><a href="email-read.html" key="t-read-email">Read Email</a></li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <span className="badge rounded-pill badge-soft-success float-end" key="t-new">New</span>
                                        <span key="t-email-templates">Templates</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="email-template-basic.html" key="t-basic-action">Basic Action</a></li>
                                        <li><a href="email-template-alert.html" key="t-alert-email">Alert Email</a></li>
                                        <li><a href="email-template-billing.html" key="t-bill-email">Billing Email</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-receipt"></i>
                                <span key="t-invoices">Invoices</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="invoices-list.html" key="t-invoice-list">Invoice List</a></li>
                                <li><a href="invoices-detail.html" key="t-invoice-detail">Invoice Detail</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-briefcase-alt-2"></i>
                                <span key="t-projects">Projects</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="projects-grid.html" key="t-p-grid">Projects Grid</a></li>
                                <li><a href="projects-list.html" key="t-p-list">Projects List</a></li>
                                <li><a href="projects-overview.html" key="t-p-overview">Project Overview</a></li>
                                <li><a href="projects-create.html" key="t-create-new">Create New</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-task"></i>
                                <span key="t-tasks">Tasks</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="tasks-list.html" key="t-task-list">Task List</a></li>
                                <li><a href="tasks-kanban.html" key="t-kanban-board">Kanban Board</a></li>
                                <li><a href="tasks-create.html" key="t-create-task">Create Task</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-contacts">Contacts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="contacts-grid.html" key="t-user-grid">Users Grid</a></li>
                                <li><a href="contacts-list.html" key="t-user-list">Users List</a></li>
                                <li><a href="contacts-profile.html" key="t-profile">Profile</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i className="bx bx-detail"></i>
                                <span key="t-blog">Blog</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="blog-list.html" key="t-blog-list">Blog List</a></li>
                                <li><a href="blog-grid.html" key="t-blog-grid">Blog Grid</a></li>
                                <li><a href="blog-details.html" key="t-blog-details">Blog Details</a></li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-pages">Pages</li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i className="bx bx-user-circle"></i>
                                <span key="t-authentication">Authentication</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="auth-login.html" key="t-login">Login</a></li>
                                <li><a href="auth-login-2.html" key="t-login-2">Login 2</a></li>
                                <li><a href="auth-register.html" key="t-register">Register</a></li>
                                <li><a href="auth-register-2.html" key="t-register-2">Register 2</a></li>
                                <li><a href="auth-recoverpw.html" key="t-recover-password">Recover Password</a></li>
                                <li><a href="auth-recoverpw-2.html" key="t-recover-password-2">Recover Password 2</a></li>
                                <li><a href="auth-lock-screen.html" key="t-lock-screen">Lock Screen</a></li>
                                <li><a href="auth-lock-screen-2.html" key="t-lock-screen-2">Lock Screen 2</a></li>
                                <li><a href="auth-confirm-mail.html" key="t-confirm-mail">Confirm Email</a></li>
                                <li><a href="auth-confirm-mail-2.html" key="t-confirm-mail-2">Confirm Email 2</a></li>
                                <li><a href="auth-email-verification.html" key="t-email-verification">Email verification</a></li>
                                <li><a href="auth-email-verification-2.html" key="t-email-verification-2">Email Verification 2</a></li>
                                <li><a href="auth-two-step-verification.html" key="t-two-step-verification">Two Step Verification</a></li>
                                <li><a href="auth-two-step-verification-2.html" key="t-two-step-verification-2">Two Step Verification 2</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-file"></i>
                                <span key="t-utility">Utility</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="pages-starter.html" key="t-starter-page">Starter Page</a></li>
                                <li><a href="pages-maintenance.html" key="t-maintenance">Maintenance</a></li>
                                <li><a href="pages-comingsoon.html" key="t-coming-soon">Coming Soon</a></li>
                                <li><a href="pages-timeline.html" key="t-timeline">Timeline</a></li>
                                <li><a href="pages-faqs.html" key="t-faqs">FAQs</a></li>
                                <li><a href="pages-pricing.html" key="t-pricing">Pricing</a></li>
                                <li><a href="pages-404.html" key="t-error-404">Error 404</a></li>
                                <li><a href="pages-500.html" key="t-error-500">Error 500</a></li>
                            </ul>
                        </li>

                        <li className="menu-title" key="t-components">Components</li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-tone"></i>
                                <span key="t-ui-elements">UI Elements</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="ui-alerts.html" key="t-alerts">Alerts</a></li>
                                <li><a href="ui-buttons.html" key="t-buttons">Buttons</a></li>
                                <li><a href="ui-cards.html" key="t-cards">Cards</a></li>
                                <li><a href="ui-carousel.html" key="t-carousel">Carousel</a></li>
                                <li><a href="ui-dropdowns.html" key="t-dropdowns">Dropdowns</a></li>
                                <li><a href="ui-grid.html" key="t-grid">Grid</a></li>
                                <li><a href="ui-images.html" key="t-images">Images</a></li>
                                <li><a href="ui-lightbox.html" key="t-lightbox">Lightbox</a></li>
                                <li><a href="ui-modals.html" key="t-modals">Modals</a></li>
                                <li><a href="ui-offcanvas.html" key="t-offcanvas">Offcanvas</a></li>
                                <li><a href="ui-rangeslider.html" key="t-range-slider">Range Slider</a></li>
                                <li><a href="ui-session-timeout.html" key="t-session-timeout">Session Timeout</a></li>
                                <li><a href="ui-progressbars.html" key="t-progress-bars">Progress Bars</a></li>
                                <li><a href="ui-placeholders.html" key="t-placeholders">Placeholders</a></li>
                                <li><a href="ui-sweet-alert.html" key="t-sweet-alert">Sweet-Alert</a></li>
                                <li><a href="ui-tabs-accordions.html" key="t-tabs-accordions">Tabs & Accordions</a></li>
                                <li><a href="ui-typography.html" key="t-typography">Typography</a></li>
                                <li><a href="ui-toasts.html" key="t-toasts">Toasts</a></li>
                                <li><a href="ui-video.html" key="t-video">Video</a></li>
                                <li><a href="ui-general.html" key="t-general">General</a></li>
                                <li><a href="ui-colors.html" key="t-colors">Colors</a></li>
                                <li><a href="ui-rating.html" key="t-rating">Rating</a></li>
                                <li><a href="ui-notifications.html" key="t-notifications">Notifications</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="waves-effect">
                                <i className="bx bxs-eraser"></i>
                                <span className="badge rounded-pill bg-danger float-end">10</span>
                                <span key="t-htmlForms">htmlForms</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="htmlForm-elements.html" key="t-htmlForm-elements">htmlForm Elements</a></li>
                                <li><a href="htmlForm-layouts.html" key="t-htmlForm-layouts">htmlForm Layouts</a></li>
                                <li><a href="htmlForm-validation.html" key="t-htmlForm-validation">htmlForm Validation</a></li>
                                <li><a href="htmlForm-advanced.html" key="t-htmlForm-advanced">htmlForm Advanced</a></li>
                                <li><a href="htmlForm-editors.html" key="t-htmlForm-editors">htmlForm Editors</a></li>
                                <li><a href="htmlForm-uploads.html" key="t-htmlForm-upload">htmlForm File Upload</a></li>
                                <li><a href="htmlForm-xeditable.html" key="t-htmlForm-xeditable">htmlForm Xeditable</a></li>
                                <li><a href="htmlForm-repeater.html" key="t-htmlForm-repeater">htmlForm Repeater</a></li>
                                <li><a href="htmlForm-wizard.html" key="t-htmlForm-wizard">htmlForm Wizard</a></li>
                                <li><a href="htmlForm-mask.html" key="t-htmlForm-mask">htmlForm Mask</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-list-ul"></i>
                                <span key="t-tables">Tables</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="tables-basic.html" key="t-basic-tables">Basic Tables</a></li>
                                <li><a href="tables-datatable.html" key="t-data-tables">Data Tables</a></li>
                                <li><a href="tables-responsive.html" key="t-responsive-table">Responsive Table</a></li>
                                <li><a href="tables-editable.html" key="t-editable-table">Editable Table</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bxs-bar-chart-alt-2"></i>
                                <span key="t-charts">Charts</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="charts-apex.html" key="t-apex-charts">Apex Charts</a></li>
                                <li><a href="charts-echart.html" key="t-e-charts">E Charts</a></li>
                                <li><a href="charts-chartjs.html" key="t-chartjs-charts">Chartjs Charts</a></li>
                                <li><a href="charts-flot.html" key="t-flot-charts">Flot Charts</a></li>
                                <li><a href="charts-tui.html" key="t-ui-charts">Toast UI Charts</a></li>
                                <li><a href="charts-knob.html" key="t-knob-charts">Jquery Knob Charts</a></li>
                                <li><a href="charts-sparkline.html" key="t-sparkline-charts">Sparkline Charts</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-aperture"></i>
                                <span key="t-icons">Icons</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="icons-boxicons.html" key="t-boxicons">Boxicons</a></li>
                                <li><a href="icons-materialdesign.html" key="t-material-design">Material Design</a></li>
                                <li><a href="icons-dripicons.html" key="t-dripicons">Dripicons</a></li>
                                <li><a href="icons-fontawesome.html" key="t-font-awesome">Font Awesome</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-map"></i>
                                <span key="t-maps">Maps</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><a href="maps-google.html" key="t-g-maps">Google Maps</a></li>
                                <li><a href="maps-vector.html" key="t-v-maps">Vector Maps</a></li>
                                <li><a href="maps-leaflet.html" key="t-l-maps">Leaflet Maps</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" className="has-arrow waves-effect">
                                <i className="bx bx-share-alt"></i>
                                <span key="t-multi-level">Multi Level</span>
                            </a>
                            <ul className="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" key="t-level-1-1">Level 1.1</a></li>
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" key="t-level-1-2">Level 1.2</a>
                                    <ul className="sub-menu" aria-expanded="true">
                                        <li><a href="javascript: void(0);" key="t-level-2-1">Level 2.1</a></li>
                                        <li><a href="javascript: void(0);" key="t-level-2-2">Level 2.2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
             
            </div>
        </div>


        

     
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

               
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0 font-size-18">Login FORM</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">

                                        {/* <li>
                                            <NavLink className="btn btn-success" to="/Form">ADD</NavLink>
                                        </li>
                                        <li className="breadcrumb-item"><a href="javascript: void(0);"></a></li>
                                        <li className="breadcrumb-item active">htmlForm Advanced</li> */}
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                   

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Select2</h4>
                                    <p className="card-title-desc">A mobile and touch friendly input spinner component htmlFor
                                        Bootstrap</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Single Select</label>
                                                    <select className="htmlForm-control select2">
                                                        <option>Select</option>
                                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </optgroup>
                                                        <optgroup label="Pacific Time Zone">
                                                            <option value="CA">CalihtmlFornia</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                        </optgroup>
                                                        <optgroup label="Mountain Time Zone">
                                                            <option value="AZ">Arizona</option>
                                                            <option value="CO">Colorado</option>
                                                            <option value="ID">Idaho</option>
                                                            <option value="MT">Montana</option>
                                                            <option value="NE">Nebraska</option>
                                                            <option value="NM">New Mexico</option>
                                                            <option value="ND">North Dakota</option>
                                                            <option value="UT">Utah</option>
                                                            <option value="WY">Wyoming</option>
                                                        </optgroup>
                                                        <optgroup label="Central Time Zone">
                                                            <option value="AL">Alabama</option>
                                                            <option value="AR">Arkansas</option>
                                                            <option value="IL">Illinois</option>
                                                            <option value="IA">Iowa</option>
                                                            <option value="KS">Kansas</option>
                                                            <option value="KY">Kentucky</option>
                                                            <option value="LA">Louisiana</option>
                                                            <option value="MN">Minnesota</option>
                                                            <option value="MS">Mississippi</option>
                                                            <option value="MO">Missouri</option>
                                                            <option value="OK">Oklahoma</option>
                                                            <option value="SD">South Dakota</option>
                                                            <option value="TX">Texas</option>
                                                            <option value="TN">Tennessee</option>
                                                            <option value="WI">Wisconsin</option>
                                                        </optgroup>
                                                        <optgroup label="Eastern Time Zone">
                                                            <option value="CT">Connecticut</option>
                                                            <option value="DE">Delaware</option>
                                                            <option value="FL">Florida</option>
                                                            <option value="GA">Georgia</option>
                                                            <option value="IN">Indiana</option>
                                                            <option value="ME">Maine</option>
                                                            <option value="MD">Maryland</option>
                                                            <option value="MA">Massachusetts</option>
                                                            <option value="MI">Michigan</option>
                                                            <option value="NH">New Hampshire</option>
                                                            <option value="NJ">New Jersey</option>
                                                            <option value="NY">New York</option>
                                                            <option value="NC">North Carolina</option>
                                                            <option value="OH">Ohio</option>
                                                            <option value="PA">Pennsylvania</option>
                                                            <option value="RI">Rhode Island</option>
                                                            <option value="SC">South Carolina</option>
                                                            <option value="VT">Vermont</option>
                                                            <option value="VA">Virginia</option>
                                                            <option value="WV">West Virginia</option>
                                                        </optgroup>
                                                    </select>

                                                </div>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Multiple Select</label>

                                                    <select className="select2 htmlForm-control select2-multiple">
                                                       
                                                        <optgroup>
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </optgroup>
                                                        <optgroup label="Pacific Time Zone">
                                                            <option value="CA">CalihtmlFornia</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                        </optgroup>
                                                        <optgroup label="Mountain Time Zone">
                                                            <option value="AZ">Arizona</option>
                                                            <option value="CO">Colorado</option>
                                                            <option value="ID">Idaho</option>
                                                            <option value="MT">Montana</option>
                                                            <option value="NE">Nebraska</option>
                                                            <option value="NM">New Mexico</option>
                                                            <option value="ND">North Dakota</option>
                                                            <option value="UT">Utah</option>
                                                            <option value="WY">Wyoming</option>
                                                        </optgroup>
                                                        <optgroup label="Central Time Zone">
                                                            <option value="AL">Alabama</option>
                                                            <option value="AR">Arkansas</option>
                                                            <option value="IL">Illinois</option>
                                                            <option value="IA">Iowa</option>
                                                            <option value="KS">Kansas</option>
                                                            <option value="KY">Kentucky</option>
                                                            <option value="LA">Louisiana</option>
                                                            <option value="MN">Minnesota</option>
                                                            <option value="MS">Mississippi</option>
                                                            <option value="MO">Missouri</option>
                                                            <option value="OK">Oklahoma</option>
                                                            <option value="SD">South Dakota</option>
                                                            <option value="TX">Texas</option>
                                                            <option value="TN">Tennessee</option>
                                                            <option value="WI">Wisconsin</option>
                                                        </optgroup>
                                                        <optgroup label="Eastern Time Zone">
                                                            <option value="CT">Connecticut</option>
                                                            <option value="DE">Delaware</option>
                                                            <option value="FL">Florida</option>
                                                            <option value="GA">Georgia</option>
                                                            <option value="IN">Indiana</option>
                                                            <option value="ME">Maine</option>
                                                            <option value="MD">Maryland</option>
                                                            <option value="MA">Massachusetts</option>
                                                            <option value="MI">Michigan</option>
                                                            <option value="NH">New Hampshire</option>
                                                            <option value="NJ">New Jersey</option>
                                                            <option value="NY">New York</option>
                                                            <option value="NC">North Carolina</option>
                                                            <option value="OH">Ohio</option>
                                                            <option value="PA">Pennsylvania</option>
                                                            <option value="RI">Rhode Island</option>
                                                            <option value="SC">South Carolina</option>
                                                            <option value="VT">Vermont</option>
                                                            <option value="VA">Virginia</option>
                                                            <option value="WV">West Virginia</option>
                                                        </optgroup>
                                                    </select>

                                                </div>

                                                <div>
                                                    <label className="htmlForm-label">Search Disable</label>
                                                    <select className="htmlForm-control select2-search-disable">
                                                        <option>Select</option>
                                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </optgroup>
                                                        <optgroup label="Pacific Time Zone">
                                                            <option value="CA">CalihtmlFornia</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                        </optgroup>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3 ajax-select mt-3 mt-lg-0">
                                                    <label className="htmlForm-label">Ajax (remote data)</label>
                                                    <select className="htmlForm-control select2-ajax"></select>

                                                </div>
                                                <div className="templating-select">
                                                    <label className="htmlForm-label">Templating</label>
                                                    <select className="htmlForm-control select2-templating">
                                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </optgroup>
                                                        <optgroup label="Pacific Time Zone">
                                                            <option value="CA">CalihtmlFornia</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                        </optgroup>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>
                    

                        </div>


                    </div>
                  

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Colorpicker</h4>
                                    <p className="card-title-desc">Examples of Spectrum Colorpicker.</p>

                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Simple input field</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-default" value="#50a5f1"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Show Alpha</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-showalpha" value="rgba(244, 106, 106, 0.6)"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Show Palette Only</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-showpaletteonly" value="#34c38f"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Toggle Palette Only</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-togglepaletteonly" value="#50a5f1"/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="htmlForm-label">Show Initial</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-showintial" value="#f1b44c"/>
                                        </div>
                                        <div>
                                            <label className="htmlForm-label">Show Input And Initial</label>
                                            <input type="text" className="htmlForm-control" id="colorpicker-showinput-intial" value="#f46a6a"/>
                                        </div>

                                    </form>

                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Timepicker</h4>
                                    <p className="card-title-desc">Easily select a time htmlFor a text input using your mouse or
                                        keyboards arrow keys.</p>

                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Default Time Picker</label>

                                            <div className="input-group" id="timepicker-input-group1">
                                                <input id="timepicker" type="text" className="htmlForm-control" data-provide="timepicker"/>

                                                <span className="input-group-text"><i className="mdi mdi-clock-outline"></i></span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">24 Hour Mode Time Picker</label>

                                            <div className="input-group" id="timepicker-input-group2">
                                                <input id="timepicker2" type="text" className="htmlForm-control"
                                                    data-provide="timepicker"/>

                                                <span className="input-group-text"><i className="mdi mdi-clock-outline"></i></span>
                                            </div>

                                        </div>

                                        <div>
                                            <label className="htmlForm-label">Specify a step htmlFor the minute field</label>

                                            <div className="input-group" id="timepicker-input-group3">
                                                <input id="timepicker3" type="text" className="htmlForm-control"
                                                    data-provide="timepicker"/>

                                                <span className="input-group-text"><i className="mdi mdi-clock-outline"></i></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Bootstrap Datepicker</h4>
                                    <p className="card-title-desc">Examples of twitter bootstrap datepicker.</p>

                                    <form action="#">
                                        <div className="mb-4">
                                            <label>Default Functionality</label>
                                            <div className="input-group" id="datepicker1">
                                                <input type="text" className="htmlForm-control" placeholder="dd M, yyyy"
                                                    data-date-htmlFormat="dd M, yyyy" data-date-container='#datepicker1' data-provide="datepicker"/>

                                                <span className="input-group-text"><i className="mdi mdi-calendar"></i></span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label>Auto Close</label>
                                            <div className="input-group" id="datepicker2">
                                                <input type="text" className="htmlForm-control" placeholder="dd M, yyyy"
                                                    data-date-htmlFormat="dd M, yyyy" data-date-container='#datepicker2' data-provide="datepicker"
                                                    data-date-autoclose="true"/>

                                                <span className="input-group-text"><i className="mdi mdi-calendar"></i></span>
                                            </div>/
                                        </div>

                                        <div className="mb-4">
                                            <label>Multiple Date</label>
                                            <div className="input-group" id="datepicker3">
                                                <input type="text" className="htmlForm-control" placeholder="dd M, yyyy"
                                                    data-provide="datepicker" data-date-container='#datepicker3' data-date-htmlFormat="dd M, yyyy"
                                                    data-date-multidate="true"/>

                                                <span className="input-group-text"><i className="mdi mdi-calendar"></i></span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label>Month View</label>
                                            <div className="position-relative" id="datepicker4">
                                                <input type="text" className="htmlForm-control" data-date-container='#datepicker4' data-provide="datepicker"
                                                data-date-htmlFormat="MM yyyy" data-date-min-view-mode="1"/>
                                            </div>
                                            
                                        </div>

                                        <div className="mb-4">
                                            <label>Year View</label>
                                            <div className="position-relative" id="datepicker5">
                                                <input type="text" className="htmlForm-control" data-provide="datepicker" data-date-container='#datepicker5'
                                                    data-date-htmlFormat="dd M, yyyy" data-date-min-view-mode="2"/>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label>Date Range</label>

                                            <div className="input-daterange input-group" id="datepicker6" data-date-htmlFormat="dd M, yyyy" data-date-autoclose="true" data-provide="datepicker" data-date-container='#datepicker6'>
                                                <input type="text" className="htmlForm-control" name="start" placeholder="Start Date" />
                                                <input type="text" className="htmlForm-control" name="end" placeholder="End Date" />
                                            </div>
                                        </div>

                                        <div>
                                            <label>Inline Datepicker</label>
                                            
                                            <div data-provide="datepicker-inline" className="bootstrap-datepicker-inline"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="row">


                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Bootstrap MaxLength</h4>
                                    <p className="card-title-desc">This plugin integrates by default with
                                        Twitter bootstrap using badges to display the maximum lenght of the
                                        field where the user is inserting text. </p>

                                    <div>
                                        <label className="mb-1">Default usage</label>
                                        <p className="text-muted mb-2">
                                            The badge will show up by default when the remaining chars are 10 or less:
                                        </p>
                                        <input type="text" className="htmlForm-control" name="defaultconfig"
                                            id="defaultconfig" />
                                    </div>

                                    <div className="mt-3">
                                        <label className="mb-1">Threshold value</label>
                                        <p className="text-muted mb-2">
                                            Do you want the badge to show up when there are 20 chars or less? Use the
                                            <code>threshold</code> option:
                                        </p>
                                        <input type="text"  name="thresholdconfig" className="htmlForm-control"
                                            id="thresholdconfig" />
                                    </div>

                                    <div className="mt-3">
                                        <label className="mb-1">All the options</label>
                                        <p className="text-muted mb-2">
                                            Please note: if the <code>alwaysShow</code> option is enabled, the
                                            <code>threshold</code> option is ignored.
                                        </p>
                                        <input type="text" className="htmlForm-control"  name="alloptions"
                                            id="alloptions" />
                                    </div>

                                    <div className="mt-3">
                                        <label className="mb-1">Position</label>
                                        <p className="text-muted mb-2">
                                            All you need to do is specify the <code>placement</code> option, with one of
                                            those strings. If none
                                            is specified, the positioning will be defauted to 'bottom'.
                                        </p>
                                        <input type="text" className="htmlForm-control"  name="placement"
                                            id="placement" />
                                    </div>

                                    <div className="mt-3">
                                        <label className="mb-1">Textarea</label>
                                        <p className="text-muted mb-2">
                                            Bootstrap maxlength supports textarea as well as inputs. Even on old IE.
                                        </p>
                                        <textarea id="textarea" className="htmlForm-control" 
                                            placeholder="This textarea has a limit of 225 chars."></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Bootstrap TouchSpin</h4>
                                    <p className="card-title-desc">A mobile and touch friendly input spinner component htmlFor
                                        Bootstrap</p>

                                    <form>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Using data attributes</label>
                                            <input data-toggle="touchspin" type="text" value="55"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Example with postfix (large)</label>
                                            <input data-toggle="touchspin" value="18.20" type="text" data-step="0.1"
                                                data-decimals="2" data-bts-postfix="%"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">With prefix </label>
                                            <input data-toggle="touchspin" type="text" data-bts-prefix="$"/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="htmlForm-label">Init with empty value:</label>
                                            <input data-toggle="touchspin" type="text"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Value attribute is not set (applying
                                                settings.initval)</label>
                                            <input id="demo3_21" type="text" value="" name="demo3_21"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="htmlForm-label">Value is set explicitly to 33 (skipping
                                                settings.initval) </label>
                                            <input id="demo3_22" type="text" value="33" name="demo3_22"/>
                                        </div>
                                        <div className="me-4">
                                            <label className="htmlForm-label">Vertical button alignment:</label>
                                            <input id="demo_vertical" type="text" value="" name="demo_vertical"></input>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="card-title">Css Switch</h4>
                                    <p className="card-title-desc">Here are a few types of switches. </p>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="font-size-14 mb-3">Example switch</h5>
                                            <div>
                                                <input type="checkbox" id="switch1" checked />
                                                <label htmlFor="switch1" data-on-label="On" data-off-label="Off"></label>

                                                <input type="checkbox" id="switch2"  checked />
                                                <label htmlFor="switch2" data-on-label="" data-off-label=""></label>

                                                <input type="checkbox" id="switch3"  checked />
                                                <label htmlFor="switch3" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch6" checked />
                                                <label htmlFor="switch6" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch4" checked />
                                                <label htmlFor="switch4" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch7"checked />
                                                <label htmlFor="switch7" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch5"  checked />
                                                <label htmlFor="switch5" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch8"  checked />
                                                <label htmlFor="switch8" data-on-label="Yes" data-off-label="No"></label>

                                                <input type="checkbox" id="switch9"  checked />
                                                <label htmlFor="switch9" data-on-label="Yes" data-off-label="No"></label>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mt-4 mt-lg-0">
                                                <h5 className="font-size-14 mb-3">Square switch</h5>
                                                <div className="d-flex">
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch1"  checked />
                                                        <label htmlFor="square-switch1" data-on-label="On"
                                                            data-off-label="Off"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch2" checked />
                                                        <label htmlFor="square-switch2" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                    <div className="square-switch">
                                                        <input type="checkbox" id="square-switch3" checked />
                                                        <label htmlFor="square-switch3" data-on-label="Yes"
                                                            data-off-label="No"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                   

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Datepicker</h4>
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div>
                                                <h4 className="font-size-14 mb-3">Demo</h4>
                                                <div className="docs-datepicker">
                                                    <div className="input-group">
                                                        <input type="text" className="htmlForm-control docs-date" name="date"
                                                            placeholder="Pick a date" />
                                                        <button type="button"
                                                            className="btn btn-secondary docs-datepicker-trigger"
                                                            disabled>
                                                            <i className="mdi mdi-calendar" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                    <div className="docs-datepicker-container"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="mt-4 mt-xl-0">
                                                <h4 className="font-size-14 mb-3">Options</h4>
                                                <div className="docs-options">
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text" id="option-date">date</span>
                                                        <input type="text" className="htmlForm-control" name="date" 
                                                            aria-describedby="option-date" placeholder="null"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text" id="option-htmlFormat">htmlFormat</span>
                                                        <input type="text" className="htmlForm-control" name="htmlFormat"
                                                            value="mm/dd/yyyy" aria-describedby="option-htmlFormat"
                                                            placeholder="mm/dd/yyyy"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <span className="input-group-text"
                                                                id="option-startDate">startDate</span>
                                                        <input type="text" className="htmlForm-control" name="startDate"
                                                            aria-describedby="option-startDate" placeholder="null"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text"
                                                            id="option-endDate">endDate</span>
                                                        <input type="text" className="htmlForm-control" name="endDate"
                                                            aria-describedby="option-endDate" placeholder="null"/>
                                                    </div>

                                                    <div className="input-group mb-3">
                                                            <span className="input-group-text"
                                                                id="option-startView">startView</span>
                                                        <select className="htmlForm-control" id="option-startView" name="startView">
                                                            <option value="0" selected>0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <span className="input-group-text"
                                                                id="option-weekStart">weekStart</span>
                                                        <select className="htmlForm-control" id="option-weekStart" name="weekStart">
                                                            <option value="0" selected>0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <span className="input-group-text" id="option-offset">offset</span>
                                                        <input type="number" className="htmlForm-control" name="offset" value="10"
                                                            aria-describedby="option-offset" placeholder="offset"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <span className="input-group-text" id="option-zIndex">zIndex</span>
                                                        <input type="number" className="htmlForm-control" name="zIndex" value="1000"
                                                            aria-describedby="option-zIndex" placeholder="zIndex"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="mt-4 mt-xl-0">
                                                <h4 className="font-size-14 mb-3">Toggles</h4>
                                                <div className="docs-toggles">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="container"
                                                                    type="checkbox" name="container"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="container">container</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="trigger" type="checkbox"
                                                                    name="trigger"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="trigger">trigger</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="inline" type="checkbox"
                                                                    name="inline"/>
                                                                <label className="htmlForm-check-label" htmlFor="inline">inline</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="autoShow"
                                                                    type="checkbox" name="autoShow"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="autoShow">autoShow</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="autoHide"
                                                                    type="checkbox" name="autoHide"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="autoHide">autoHide</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="autoPick"
                                                                    type="checkbox" name="autoPick"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="autoPick">autoPick</label>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="htmlForm-check">
                                                                <input className="htmlForm-check-input" id="yearFirst"
                                                                    type="checkbox" name="yearFirst"/>
                                                                <label className="htmlForm-check-label"
                                                                    htmlFor="yearFirst">yearFirst</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="mt-4 mt-xl-0">
                                                <h4 className="font-size-14 mb-3">Methods</h4>
                                                <div className="docs-actions">
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-method="getDate" data-target="#putDate">Get
                                                                Date</button>
                                                        <input type="text" className="htmlForm-control" id="putDate"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        
                                                        <button type="button" className="btn btn-primary"
                                                                data-arguments="[true]" data-method="getDate"
                                                                data-target="#putDatehtmlFormatted">Get Date
                                                                (htmlFormatted)</button>
                                                        <input type="text" className="htmlForm-control" id="putDatehtmlFormatted"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-method="getMonthName" data-target="#putMonthName">Get
                                                                Month Name</button>
                                                                
                                                        <input type="text" className="htmlForm-control" id="putMonthName"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-arguments="[true]" data-method="getMonthName"
                                                                data-target="#putMonthNameShort">Get Month Name
                                                                (short)</button>
                                                        <input type="text" className="htmlForm-control" id="putMonthNameShort"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-method="getDayName" data-target="#putDayName">Get Day
                                                                Name</button>
                                                        <input type="text" className="htmlForm-control" id="putDayName"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-arguments="[true]" data-method="getDayName"
                                                                data-target="#putDayNameShort">Get Day Name (short)</button>
                                                        <input type="text" className="htmlForm-control" id="putDayNameShort"/>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                            <button type="button" className="btn btn-primary"
                                                                data-arguments="[false, true]" data-method="getDayName"
                                                                data-target="#putDayNameMin">Get Day Name (min)</button>
                                                        <input type="text" className="htmlForm-control" id="putDayNameMin"/>
                                                    </div>
                                                    <div className="btn-group mb-3 d-flex" role="group">
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="show">Show</button>
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="hide">Hide</button>
                                                    </div>
                                                    <div className="btn-group mb-3 d-flex" role="group">
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="pick">Pick</button>
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="update">Update</button>
                                                    </div>
                                                    <div className="btn-group mb-3 d-flex" role="group">
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="reset">Reset</button>
                                                        <button type="button" className="btn btn-primary"
                                                            data-method="destroy">Destroy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                </div> 
            </div>
            


            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Skote.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Themesbrand
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    

    </div>
  

    <div className="right-bar">
        <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4"/>
        
                <h5 className="m-0 me-2">Settings</h5>

                <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                    <i className="mdi mdi-close noti-icon"></i>
                </a>
            </div>

            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>

            <div className="p-4">
                <div className="mb-2">
                    <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images"/>
                </div>

                <div className="htmlForm-check htmlForm-switch mb-3">
                    <input className="htmlForm-check-input theme-choice" type="checkbox" id="light-mode-switch" checked/>
                    <label className="htmlForm-check-label" htmlFor="light-mode-switch">Light Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="htmlForm-check htmlForm-switch mb-3">
                    <input className="htmlForm-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                    <label className="htmlForm-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="htmlForm-check htmlForm-switch mb-3">
                    <input className="htmlForm-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                    <label className="htmlForm-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
                </div>

                <div className="mb-2">
                    <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images"/>
                </div>
                <div className="htmlForm-check htmlForm-switch mb-5">
                    <input className="htmlForm-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
                    <label className="htmlForm-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
                </div>

        
            </div>

        </div> 
  

    
    <div className="rightbar-overlay"></div>

  
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>

    <script src="assets/libs/select2/js/select2.min.js"></script>
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/libs/spectrum-colorpicker2/spectrum.min.js"></script>
    <script src="assets/libs/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>
    <script src="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"></script>
    <script src="assets/libs/bootstrap-maxlength/bootstrap-maxlength.min.js"></script>
    <script src="assets/libs/@chenfengyuan/datepicker/datepicker.min.js"></script>

   
    <script src="assets/js/pages/htmlForm-advanced.init.js"></script>

    <script src="assets/js/app.js"></script>

</body>


  )
   }


export default Form;
