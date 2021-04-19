<template>
  <div>
    <div class="js-sidebar-scroll">
      <!-- Side Navigation -->
      <div class="content-side">
        <ul class="nav-main">
          <li class="nav-main-item">
            <!-- <a class="nav-main-link" href="be_pages_dashboard.html">
                <i class="nav-main-link-icon si si-speedometer"></i>
                <span class="nav-main-link-name">Dashboard</span>
                </a>-->
            <router-link to="/dashboards/geral" class="nav-main-link">
              <i class="nav-main-link-icon si si-speedometer"></i>
              <span class="nav-main-link-name">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <a
              class="nav-main-link nav-main-link-submenu"
              data-toggle="submenu"
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
            >
              <i class="nav-main-link-icon fa fa-newspaper"></i>
              <span class="nav-main-link-name">Reports</span>
            </a>
            <ul class="nav-main-submenu">
              <li class="nav-main-item">
                <router-link to="/tickets/report-today" class="nav-main-link">
                  <span class="nav-main-link-name">Today</span>
                </router-link>
              </li>
              <li class="nav-main-item">
                <router-link to="/tickets/reports-month" class="nav-main-link">
                  <span class="nav-main-link-name">Select date</span>
                </router-link>
              </li>
              <!-- <li class="nav-main-item">
                <router-link to="/tickets/reports-spent-time" class="nav-main-link">
                  <span class="nav-main-link-name">Spent Time</span>
                </router-link>
              </li> -->
            </ul>
          </li>
          <!-- <li class="nav-main-item">
                  <router-link to="/tickets/report-today" class="nav-main-link">
                    <i class="nav-main-link-icon si si-settings"></i>
                    <span class="nav-main-link-name">today</span>
                  </router-link>
                </li> -->
          <li class="nav-main-item">
            <router-link to="/import" class="nav-main-link">
              <i class="nav-main-link-icon fa fa-server"></i>
              <span class="nav-main-link-name">Inport/Export</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/configurations" class="nav-main-link">
              <i class="nav-main-link-icon si si-settings"></i>
              <span class="nav-main-link-name">Configuration</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- END Side Navigation -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebarMenu'
};
</script>

<style>
</style>