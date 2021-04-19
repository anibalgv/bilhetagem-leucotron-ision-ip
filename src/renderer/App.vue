<template>
  <div id="app">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />

      <title>BILHETAGEM LEUCONTRON</title>

      <meta
        name="description"
        content="OneUI - Bootstrap 4 Admin Template &amp; UI Framework created by pixelcave and published on Themeforest"
      />
      <meta name="author" content="pixelcave" />
      <meta name="robots" content="noindex, nofollow" />

      <!-- Open Graph Meta -->
      <meta
        property="og:title"
        content="OneUI - Bootstrap 4 Admin Template &amp; UI Framework"
      />
      <meta property="og:site_name" content="OneUI" />
      <meta
        property="og:description"
        content="OneUI - Bootstrap 4 Admin Template &amp; UI Framework created by pixelcave and published on Themeforest"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content />
      <meta property="og:image" content />

      <!-- Icons -->
      <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
      <link
        rel="shortcut icon"
        href="static/assets/media/favicons/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="static/assets/media/favicons/favicon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="static/assets/media/favicons/apple-touch-icon-180x180.png"
      />
      <!-- END Icons -->

      <!-- Stylesheets -->
      <!-- Fonts and OneUI framework -->
      <!-- <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    />-->
      <link rel="stylesheet" id="css-main" href="static/assets/css/oneui.css" />
      <!-- <link rel="stylesheet" href="static/assets/js/plugins/datatables/dataTables.bootstrap4.css" /> -->
      <!-- <link rel="stylesheet" href="static/assets/js/plugins/datatables/buttons-bs4/buttons.bootstrap4.min.css"> -->

      <!-- You can include a specific file from css/themes/ folder to alter the default color theme of the template. eg: -->
      <!-- <link rel="stylesheet" id="css-theme" href="static/assets/css/themes/amethyst.min.css"> -->
    </head>
    <body>
      
      <!-- Page Container -->
      <!--
    Available classes for #page-container:
    
    GENERIC
    
    'enable-cookies'                            Remembers active color theme between pages (when set through color theme helper Template._uiHandleTheme())
    
    SIDEBAR & SIDE OVERLAY
    
    'sidebar-r'                                 Right Sidebar and left Side Overlay (default is left Sidebar and right Side Overlay)
    'sidebar-mini'                              Mini hoverable Sidebar (screen width > 991px)
    'sidebar-o'                                 Visible Sidebar by default (screen width > 991px)
    'sidebar-o-xs'                              Visible Sidebar by default (screen width < 992px)
    'sidebar-dark'                              Dark themed sidebar
    
    'side-overlay-hover'                        Hoverable Side Overlay (screen width > 991px)
    'side-overlay-o'                            Visible Side Overlay by default
    
    'enable-page-overlay'                       Enables a visible clickable Page Overlay (closes Side Overlay on click) when Side Overlay opens
    
    'side-scroll'                               Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (screen width > 991px)
    
    HEADER
    
    ''                                          Static Header if no class is added
    'page-header-fixed'                         Fixed Header
    
    HEADER STYLE
    
    ''                                          Light themed Header
    'page-header-dark'                          Dark themed Header
    
    MAIN CONTENT LAYOUT
    
    ''                                          Full width Main Content if no class is added
    'main-content-boxed'                        Full width Main Content with a specific maximum width (screen width > 1200px)
    'main-content-narrow'                       Full width Main Content with a percentage width (screen width > 1200px)
    -->
      <div
        id="page-container"
        class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow sidebar-mini"
      >
        <!-- Side Overlay-->
        <aside id="side-overlay">
          <HomeAside></HomeAside>
         </aside>
        <!-- END Side Overlay -->

        <!-- Sidebar -->
        <!--
      Sidebar Mini Mode - Display Helper classes
      
      Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
      Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
      If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element
      
      Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
      Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
      Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
      -->
        <nav id="sidebar" aria-label="Main Navigation">
          <!-- Side Header -->
          <div class="content-header bg-white-5">
            <!-- Logo -->
            <a class="font-w600 text-dual" href="index.html">
              <span class="smini-visible">
                <i class="fa fa-circle-notch text-primary"></i>
              </span>
              <span class="smini-hide font-size-h5 tracking-wider">
                ISION
                <span class="font-w400">IP</span>
              </span>
            </a>
            <!-- END Logo -->

            <!-- Extra -->
            <div>
              <!-- Options -->
              <div class="dropdown d-inline-block ml-2">
                <a
                  class="btn btn-sm btn-dual"
                  id="sidebar-themes-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  <i class="si si-drop"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right font-size-sm smini-hide border-0"
                  aria-labelledby="sidebar-themes-dropdown"
                >
                  <!-- Color Themes -->
                  <!-- Layout API, functionality initialized in Template._uiHandleTheme() -->
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="default"
                    href="#"
                  >
                    <span>Default</span>
                    <i class="fa fa-circle text-default"></i>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="static/assets/css/themes/amethyst.min.css"
                    href="#"
                  >
                    <span>Amethyst</span>
                    <i class="fa fa-circle text-amethyst"></i>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="static/assets/css/themes/city.min.css"
                    href="#"
                  >
                    <span>City</span>
                    <i class="fa fa-circle text-city"></i>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="static/assets/css/themes/flat.min.css"
                    href="#"
                  >
                    <span>Flat</span>
                    <i class="fa fa-circle text-flat"></i>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="static/assets/css/themes/modern.min.css"
                    href="#"
                  >
                    <span>Modern</span>
                    <i class="fa fa-circle text-modern"></i>
                  </a>
                  <a
                    class="dropdown-item d-flex align-items-center justify-content-between font-w500"
                    data-toggle="theme"
                    data-theme="static/assets/css/themes/smooth.min.css"
                    href="#"
                  >
                    <span>Smooth</span>
                    <i class="fa fa-circle text-smooth"></i>
                  </a>
                  <!-- END Color Themes -->

                  <div class="dropdown-divider"></div>

                  <!-- Sidebar Styles -->
                  <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                  <a
                    class="dropdown-item font-w500"
                    data-toggle="layout"
                    data-action="sidebar_style_light"
                    href="#"
                  >
                    <span>Sidebar Light</span>
                  </a>
                  <a
                    class="dropdown-item font-w500"
                    data-toggle="layout"
                    data-action="sidebar_style_dark"
                    href="#"
                  >
                    <span>Sidebar Dark</span>
                  </a>
                  <!-- Sidebar Styles -->

                  <div class="dropdown-divider"></div>

                  <!-- Header Styles -->
                  <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                  <a
                    class="dropdown-item font-w500"
                    data-toggle="layout"
                    data-action="header_style_light"
                    href="#"
                  >
                    <span>Header Light</span>
                  </a>
                  <a
                    class="dropdown-item font-w500"
                    data-toggle="layout"
                    data-action="header_style_dark"
                    href="#"
                  >
                    <span>Header Dark</span>
                  </a>
                  <!-- Header Styles -->
                </div>
              </div>
              <!-- END Options -->

              <!-- Close Sidebar, Visible only on mobile screens -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
              <a
                class="d-lg-none btn btn-sm btn-dual ml-1"
                data-toggle="layout"
                data-action="sidebar_close"
                href="javascript:void(0)"
              >
                <i class="fa fa-fw fa-times"></i>
              </a>
              <!-- END Close Sidebar -->
            </div>
            <!-- END Extra -->
          </div>
          <!-- END Side Header -->

          <!-- Sidebar Scrolling -->
          <HomeSidebarMenu></HomeSidebarMenu>
          <!-- END Sidebar Scrolling -->
        </nav>
        <!-- END Sidebar -->

        <!-- Header -->
        <header id="page-header">
          <!-- Header Content -->
          <div class="content-header">
            <!-- Left Section -->
            <div class="d-flex align-items-center">
              <!-- Toggle Sidebar -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
              <button
                type="button"
                class="btn btn-sm btn-dual mr-2 d-lg-none"
                data-toggle="layout"
                data-action="sidebar_toggle"
              >
                <i class="fa fa-fw fa-bars"></i>
              </button>
              <!-- END Toggle Sidebar -->

              <!-- Toggle Mini Sidebar -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout()-->
              <button
                type="button"
                class="btn btn-sm btn-dual mr-2 d-none d-lg-inline-block"
                data-toggle="layout"
                data-action="sidebar_mini_toggle"
              >
                <i class="fa fa-fw fa-ellipsis-v"></i>
              </button>
              <!-- END Toggle Mini Sidebar -->

              <!-- Apps Modal -->
              <!-- Opens the Apps modal found at the bottom of the page, after footer’s markup -->
              <button
                type="button"
                class="btn btn-sm btn-dual mr-2"
                data-toggle="modal"
                data-target="#one-modal-apps"
              >
                <i class="fa fa-fw fa-cubes"></i>
              </button>
              <!-- END Apps Modal -->

              <!-- Open Search Section (visible on smaller screens) -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
              <button
                type="button"
                class="btn btn-sm btn-dual d-md-none"
                data-toggle="layout"
                data-action="header_search_on"
              >
                <i class="fa fa-fw fa-search"></i>
              </button>
              <!-- END Open Search Section -->

              <!-- Search Form (visible on larger screens) -->
              <form
                class="d-none d-md-inline-block"
                action="be_pages_generic_search.html"
                method="POST"
              >
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control form-control-alt"
                    placeholder="Search.."
                    id="page-header-search-input2"
                    name="page-header-search-input2"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text bg-body border-0">
                      <i class="fa fa-fw fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
              <!-- END Search Form -->
            </div>
            <!-- END Left Section -->

            <!-- Right Section -->
            <div class="d-flex align-items-center">
              <!-- User Dropdown -->
              <HomeUserDropdown></HomeUserDropdown>
              <!-- END User Dropdown -->

              <!-- Notifications Dropdown -->
              <HomeNotifications></HomeNotifications>
              <!-- END Notifications Dropdown -->

              <!-- Toggle Side Overlay -->
              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
              <button
                type="button"
                class="btn btn-sm btn-dual ml-2"
                data-toggle="layout"
                data-action="side_overlay_toggle"
              >
                <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
              </button>
              <button
                class="btn btn-sm btn-dual ml-2"
                style="-webkit-app-region: drag"
              >
                <i class="fa fa-arrows-alt"></i>
              </button>
              <button
                class="btn btn-sm btn-dual ml-2"
                v-on:click="minimizeWindow"
              >
                <i class="fa fa-window-minimize"></i>
              </button>
              <button
                class="btn btn-sm btn-dual ml-2"
                v-on:click="maximizeWindow"
              >
                <i class="fa fa-window-maximize"></i>
              </button>
              <button class="btn btn-sm btn-dual ml-2" v-on:click="closeWindow">
                <i class="fa fa-window-close"></i>
              </button>
              <!-- END Toggle Side Overlay -->
            </div>
            <!-- END Right Section -->
          </div>
          <!-- END Header Content -->

          <!-- Header Search -->
          <div id="page-header-search" class="overlay-header bg-white">
            <div class="content-header">
              <form
                class="w-100"
                action="be_pages_generic_search.html"
                method="POST"
              >
                <div class="input-group">
                  <div class="input-group-prepend">
                    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                    <button
                      type="button"
                      class="btn btn-alt-danger"
                      data-toggle="layout"
                      data-action="header_search_off"
                    >
                      <i class="fa fa-fw fa-times-circle"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search or hit ESC.."
                    id="page-header-search-input"
                    name="page-header-search-input"
                  />
                </div>
              </form>
            </div>
          </div>
          <!-- END Header Search -->

          <!-- Header Loader -->
          <!-- Please check out the Loaders page under Components category to see examples of showing/hiding it -->
          <div id="page-header-loader" class="overlay-header bg-white">
            <div class="content-header">
              <div class="w-100 text-center">
                <i class="fa fa-fw fa-circle-notch fa-spin"></i>
              </div>
            </div>
          </div>
          <!-- END Header Loader -->
        </header>
        <!-- END Header -->

        <!-- Main Container -->
        <main id="main-container">
          <!-- Hero -->
          <div class="bg-body-light">
            <div class="content content-full">
              <div
                class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center"
              >
                <h1 class="flex-sm-fill h3 my-2">
                  REPORTS
                  <small
                    class="d-block d-sm-inline-block mt-2 mt-sm-0 font-size-base font-w400 text-muted"
                    >ISION IP</small
                  >
                </h1>
                <nav class="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-alt">
                    <li class="breadcrumb-item">Generic</li>
                    <li class="breadcrumb-item" aria-current="page">
                      <a class="link-fx" href>Blank</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <!-- END Hero -->

          <!-- Page Content -->
          <div class="content" style="flex: 1">
            <!-- <h2 class="content-heading">
            Your Content
            <small>Subtitle</small>
          </h2>-->
            <router-view></router-view>
          </div>
          <!-- END Page Content -->
        </main>
        <!-- END Main Container -->

        <!-- Footer -->
        <footer id="page-footer" class="bg-body-light">
          <div class="content py-1">
            <div class="row font-size-sm">
              <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
                <a href="https://executar.net" target="_blank">
                  <img
                    class
                    src="static/assets/media/favicons/executar-net-logo-gray.png"
                    alt
                  />
                </a>
              </div>
              <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
                <a
                  class="font-w600"
                  href="https://executar.net"
                  target="_blank"
                ></a>
                &nbsp;
                <!-- <span data-toggle="year-copy" class="disabled"></span> -->
              </div>
            </div>
          </div>
        </footer>
        <!-- END Footer -->

        <!-- Apps Modal -->
        <!-- Opens from the modal toggle button in the header -->
        <div
          class="modal fade"
          id="one-modal-apps"
          tabindex="-1"
          role="dialog"
          aria-labelledby="one-modal-apps"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div
                class="block block-rounded block-themed block-transparent mb-0"
              >
                <div class="block-header bg-primary-dark">
                  <h3 class="block-title">Apps</h3>
                  <div class="block-options">
                    <button
                      type="button"
                      class="btn-block-option"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="si si-close"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content block-content-full">
                  <div class="row gutters-tiny">
                    <div class="col-6">
                      <!-- CRM -->
                      <a
                        class="block block-rounded block-link-shadow bg-body"
                        href="javascript:void(0)"
                      >
                        <div class="block-content text-center">
                          <i class="si si-speedometer fa-2x text-primary"></i>
                          <p class="font-w600 font-size-sm mt-2 mb-3">CRM</p>
                        </div>
                      </a>
                      <!-- END CRM -->
                    </div>
                    <div class="col-6">
                      <!-- Products -->
                      <a
                        class="block block-rounded block-link-shadow bg-body"
                        href="javascript:void(0)"
                      >
                        <div class="block-content text-center">
                          <i class="si si-rocket fa-2x text-primary"></i>
                          <p class="font-w600 font-size-sm mt-2 mb-3">
                            Products
                          </p>
                        </div>
                      </a>
                      <!-- END Products -->
                    </div>
                    <div class="col-6">
                      <!-- Sales -->
                      <a
                        class="block block-rounded block-link-shadow bg-body mb-0"
                        href="javascript:void(0)"
                      >
                        <div class="block-content text-center">
                          <i class="si si-plane fa-2x text-primary"></i>
                          <p class="font-w600 font-size-sm mt-2 mb-3">Sales</p>
                        </div>
                      </a>
                      <!-- END Sales -->
                    </div>
                    <div class="col-6">
                      <!-- Payments -->
                      <a
                        class="block block-rounded block-link-shadow bg-body mb-0"
                        href="javascript:void(0)"
                      >
                        <div class="block-content text-center">
                          <i class="si si-wallet fa-2x text-primary"></i>
                          <p class="font-w600 font-size-sm mt-2 mb-3">
                            Payments
                          </p>
                        </div>
                      </a>
                      <!-- END Payments -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END Apps Modal -->
      </div>
      <!-- END Page Container -->

      <!-- <script>
  window.$ = window.jQuery = require("jquery");
    </script>-->
      <!--
    OneUI JS Core
    
    Vital libraries and plugins used in all pages. You can choose to not include this file if you would like
    to handle those dependencies through webpack. Please check out static/assets/_es6/main/bootstrap.js for more info.
    
    If you like, you could also include them separately directly from the static/assets/js/core folder in the following
    order. That can come in handy if you would like to include a few of them (eg jQuery) from a CDN.
    
    static/assets/js/core/jquery.min.js
    static/assets/js/core/bootstrap.bundle.min.js
    static/assets/js/core/simplebar.min.js
    static/assets/js/core/jquery-scrollLock.min.js
    static/assets/js/core/jquery.appear.min.js
    static/assets/js/core/js.cookie.min.js
    -->
      <!-- <script type="application/javascript" src="static/assets/js/core/jquery.min.js"></script> -->
      
      <script src="static/assets/js/core/simplebar.min.js" type="application/javascript"></script>
      <script src="static/assets/js/core/jquery-scrollLock.min.js" type="application/javascript"></script>
      
      <script
        type="application/javascript"
        src="static/assets/js/oneui.core.min.js"
      ></script>
      <!--
    OneUI JS
    
    Custom functionality including Blocks/Layout API as well as other vital and optional helpers
    webpack is putting everything together at static/assets/_es6/main/app.js
    -->
      <script
        type="application/javascript"
        src="static/assets/js/oneui.app.min.js"
      ></script>
      <!-- Page JS Plugins -->
      <!-- <script type="application/javascript" src="static/assets/js/plugins/datatables/jquery.dataTables.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/dataTables.bootstrap4.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/buttons/dataTables.buttons.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/buttons/buttons.print.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/buttons/buttons.html5.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/buttons/buttons.flash.min.js"></script>
        <script type="application/javascript" src="static/assets/js/plugins/datatables/buttons/buttons.colVis.min.js"></script> -->

      <!-- Page JS Code -->
      <!-- <script type="application/javascript" src="static/assets/_es6/pages/be_tables_datatables.js"></script> -->
    </body>
  </div>
</template>
 <script>
// 1. Require the installed module
</script>
<script>
import { remote } from "electron";
import HomeAside from './views/home/home-aside.vue';
import HomeNotifications from './views/home/home-notifications.vue';
import HomeUserDropdown from './views/home/home-user-dropdown.vue';
import HomeSidebarMenu from './views/home/home-sidebar-menu.vue';


import Tickets from "./models/tickets";
import Configurations from "./models/configurations";
import { alert, success, defaultModules, Stack, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
defaultModules.set(PNotifyBootstrap4, {});

export default {
  name: "Leucotron",
  methods: {
    autoImport() {
      this.timerAutoImport = setInterval(() => {
        this.Import();
      }, (this.configuration.app_auto_import_interval * 60000) * 2);
    },
    async Import() {  
      info({title:'IMPORTING', text:'AWAIT....'});
      const imported = await new Tickets().Import();
      
      if(imported)
        success({title:'IMPORT', text:'Success'});
      else
        alert({title:'IMPORT', text:'Error' });
      
      if(new Configurations().getConfiguration().app_auto_sync)
        new Tickets().SyncToApi();
      
    },
    closeWindow() {
      remote.getCurrentWindow().close();
    },
    minimizeWindow() {
      remote.getCurrentWindow().minimize();
    },
    maximizeWindow() {
      if (remote.getCurrentWindow().isMaximized()) {
        remote.getCurrentWindow().unmaximize();
      } else {
        remote.getCurrentWindow().maximize();
      }
    },
    checkConfiguration () {
      console.log('[APP.VUE][CHECKCONFIGURATION]');
      this.timerConfig = setInterval(() => {
        this.configuration = new Configurations().getConfiguration();
        if (this.configuration.app_auto_import) {
          if(JSON.stringify(this.configuration) !== JSON.stringify(this.configurationCurrent)){
            if(this.timerAutoImport)
              clearInterval(this.timerAutoImport);
            this.configurationCurrent = new Configurations().getConfiguration();
            this.autoImport();
          }else{
            if(!this.timerAutoImport)
              this.autoImport();
          }
        }else{
          if(this.timerAutoImport)
            clearInterval(this.timerAutoImport);
        }
      }, (60000 * 1));
    },
  }, //END methods
  mounted: function () {
    this.configurationCurrent = new Configurations().getConfiguration();
    this.checkConfiguration();
    // this.autoImport();





    
    // const customTitlebar = require("custom-electron-titlebar");
    // let MyTitleBar = new customTitlebar.Titlebar({
    //   backgroundColor: customTitlebar.Color.fromHex("#ffff"),
    //   shadow: true,
    //   maximizable: false,
    //   // icon: "./icon.svg",
    // });
    // MyTitleBar.updateTitle("Executar.Net");
    // MyTitleBar.setHorizontalAlignment('right');
  },
  data: function () {
    return {
      configuration: {},
      configurationCurrent : {},
      timerAutoImport: 0,
      timerConfig: 0,
    };
  },
  components: {
    'HomeAside': HomeAside,
    'HomeNotifications': HomeNotifications,
    'HomeUserDropdown': HomeUserDropdown,
    'HomeSidebarMenu': HomeSidebarMenu,
  }
};
</script>

<style>
/* CSS */

</style>