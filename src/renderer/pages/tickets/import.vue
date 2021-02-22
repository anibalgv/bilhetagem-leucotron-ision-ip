<template>
  <div>
    <div class="block-header block-header-default">
      <h3 class="block-title">IMPORT/EXPORT DATA</h3>
      <div class="block-options">
         
        <span v-if="configuration.app_auto_import">
          <i  class="fa fa-circle text-success"> </i> <small>AUTO ON</small>
          &nbsp; <i class="fa fa-clock text-primary">  </i> {{ configuration.app_auto_import_interval }} H
        </span>
        <span v-else>
          <i class="fa fa-circle text-muted"> </i> <small>AUTO OFF</small>
        </span>
        
        <router-link to="/configurations" class="btn-block-option">
          <i class="si si-settings"></i>
        </router-link>
      </div>
    </div>

    <div class="block-content" style="background-color: #ffffff">
      <div  >
        <div class="row">
          <div class="col-md-6 col-xl-6">
            <div>
              <div class>
                <div class="block-content">
                  <div
                    class="js-pie-chart pie-chart push"
                    data-percent="35"
                    data-line-width="3"
                    data-size="100"
                    data-bar-color="#abe37d"
                    data-track-color="#eeeeee"
                    data-scale-color="#dddddd"
                  ></div>
                  <a
                    class="block block-rounded block-bordered block-rounded block-link-shadow"
                    href="javascript:void(0)"
                    @click="Import"
                  >
                    <div class="block-content block-content-full text-center">
                      <div class="push">
                        <i class="fa fa-file-import fa-2x text-success"></i>
                      </div>
                      <div class="font-size-h4 font-w700">
                        <span class="text-muted"></span> IMPORT <span v-if="configuration.app_auto_sync">AND SYNC TO WEB</span>
                      </div>
                      <div class="font-size-sm text-muted text-uppercase">
                        FROM APLIANCE TO LOCAL DATABASE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xl-3">
            <div>
              <div class>
                <div class="block-content">
                  <div
                    class="js-pie-chart pie-chart push"
                    data-percent="35"
                    data-line-width="3"
                    data-size="100"
                    data-bar-color="#abe37d"
                    data-track-color="#eeeeee"
                    data-scale-color="#dddddd"
                  ></div>
                  <a
                    class="block block-rounded block-bordered block-rounded block-link-shadow"
                    href="javascript:void(0)"
                    v-on:click="exportToCSV"
                  >
                    <div class="block-content block-content-full text-center">
                      <div class="push">
                        <i class="fa fa-file-csv fa-2x text-info"></i>
                      </div>
                      <div class="font-size-h4 font-w700">
                        <span class="text-muted"></span> EXPORT
                      </div>
                      <div class="font-size-sm text-muted text-uppercase">
                        TO CSV FILE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xl-3" style="margin-bottom: 35px">
            <div>
              <div class>
                <div class="block-content">
                  <div
                    class="js-pie-chart pie-chart push"
                    data-percent="35"
                    data-line-width="3"
                    data-size="100"
                    data-bar-color="#abe37d"
                    data-track-color="#eeeeee"
                    data-scale-color="#dddddd"
                  ></div>
                  <a
                    class="block block-rounded block-bordered block-rounded block-link-shadow"
                    href="javascript:void(0)"
                    @click="exportToJSON"
                  >
                    <div class="block-content block-content-full text-center">
                      <div class="push">
                        <i class="fa fa-file-code fa-2x text-info"></i>
                      </div>
                      <div class="font-size-h4 font-w700">
                        <span class="text-muted"></span> EXPORT
                      </div>
                      <div class="font-size-sm text-muted text-uppercase">
                        TO JSON FILE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="btn btn-primary" @click="syncToApi">Sync To Api </a> -->
  </div>
</template>

<script>
import CSV from "../../models/csv";
import Tickets from "../../models/tickets";
import Configurations from "../../models/configurations";
import { alert, success, defaultModules, Stack, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
defaultModules.set(PNotifyBootstrap4, {});

export default {
  methods: {
    async Import() {
      info({title:'IMPORTING', text:'AWAIT....'});
      const imported = await new Tickets().Import();
      
      if(imported)
        success({title:'IMPORT', text:'Success'});
      else
        alert({title:'IMPORT', text:'Error' });
      
      if(new Configurations().getConfiguration().app_auto_sync)
        this.syncToApi();
      
    },
    exportToJSON() {
      new Tickets().ExportToJSON();
    },
    exportToCSV() {
      new Tickets().ExportToCSV();
    },
    autoImport() {
      this.configuration = new Configurations().getConfiguration();
      if (
        this.configuration.app_auto_import && this.configuration.app_auto_import_interval > 0 ) {
        this.timer = setInterval(() => {
          this.Import();
        }, (this.configuration.app_auto_import_interval * 60000) * 60);
      }
    },
    async syncToApi() {
      const response  = await new Tickets().SyncToApi();
      if(response.success)
        success({title:'SYNC TO API',})
      else
        alert({title:'SYNC TO API', text: response.message});

    }
  },
  data: function () {
    return {
      configuration: {},
      timer: 0,
    };
  },
  mounted: function () {
    this.autoImport();
  },
  beforeDestroy: function () {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style>
</style>