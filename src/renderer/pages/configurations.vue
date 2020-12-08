<template>
  <div style="margin-top: -0px;" class="row">
    <div class="col-6">
      <div class="col-12 border" id="div-connection" style="margin-top: -5px">
      <div class="row">
        <div class="form-group col-md-6">
          <div class="custom-control custom-switch custom-control-success mb-1">
            <input
              type="checkbox"
              class="custom-control-input"
              id="example-sw-custom1"
              name="example-sw-custom1"
              v-model="configuration.app_auto_import"
            />
            <label
              class="custom-control-label"
              for="example-sw-custom1"
              style="margin-top: 25px"
            >
              <small>AUTO IMPORT</small>
            </label>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="app_auto_import" class="small">
            INTERVAL <small class="text-muted">IN HOURS</small>
          </label>
          <input
            type="number"
            min="1"
            name="app_auto_import"
            id="app_auto_impor"
            class="form-control form-control-sm"
            :disabled="!configuration.app_auto_import"
            v-model="configuration.app_auto_import_interval"
          />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label for class="small"> FTP HOST ADDRESS </label>
          <input
            type="text"
            name="ftp_host"
            id="ftp_host"
            class="form-control form-control-sm"
            v-model="configuration.ftp_host"
          />
        </div>
        <div class="form-group col-md-6">
          <label for class="small"> FTP PORT </label>
          <input
            type="number"
            name="ftp_port"
            id="ftp_port"
            class="form-control form-control-sm"
            v-model="configuration.ftp_port"
          />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label for class="small"> FTP USER </label>
          <input
            type="text"
            name="ftp_user"
            id="ftp_user"
            class="form-control form-control-sm"
            v-model="configuration.ftp_user"
          />
        </div>
        <div class="form-group col-md-6">
          <label for class="small"> FTP PASSWORD </label>
          <input
            type="text"
            name="ftp_password"
            id="ftp_password"
            class="form-control form-control-sm"
            v-model="configuration.ftp_password"
          />
        </div>
      </div>
    </div>
    </div>
    <div class="col-6">
        <div class="col-12 border" id="div-database" style="margin-top: -5px">
        <div class="row">
          <div class="form-group col-md-6">
            <div class="custom-control custom-switch custom-control-success mb-1">
              <input
                type="checkbox"
                class="custom-control-input"
                id="app_auto_sync"
                name="example-sw-custom2"
                v-model="configuration.app_auto_sync"
              />
              <label
                class="custom-control-label"
                for="app_auto_sync"
                style="margin-top: 25px"
              >
                <small>AUTO SYNC TO API</small>
              </label>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for class="small" v-on:click="getEquipamento">  <i class="fa fa-search"></i> EQUIPAMENTO</label>
            <input
              type="text"
              name="equipamento"
              id="equipamento"
              class="form-control form-control-sm"
              v-model="configuration.equipamento"
              disabled
            />
          </div>
        </div>
        <div class="row">
          
          <div class="form-group col-md-12">
            <label for class="small"> API ADDRESS </label>
            <input
              type="text"
              name="ftp_host"
              id="api_address"
              class="form-control form-control-sm"
              v-model="configuration.api_address"
            />
          </div>
          
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for class="small"> API USER </label>
            <input
              type="text"
              name="ftp_user"
              id="ftp_user"
              class="form-control form-control-sm"
              v-model="configuration.api_user"
            />
          </div>
          <div class="form-group col-md-6">
            <label for class="small"> API PASSWORD </label>
            <input
              type="text"
              name="ftp_password"
              id="ftp_password"
              class="form-control form-control-sm"
              v-model="configuration.api_password"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div class="form-group" style="margin-top: 10px">
      <button class="btn btn-success" v-on:click="setConfig">
        <i class="fa fa-save fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Configurations from "../models/configurations";
import { alert, success, defaultModules, Stack } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyBootstrap4 from "@pnotify/bootstrap4";
import Tickets from '../models/tickets';
defaultModules.set(PNotifyBootstrap4, {});
// import * as PNotifyDesktop from '@pnotify/desktop';
// defaultModules.set(PNotifyDesktop, {});

export default {
  name: "configurations",
  data: function () {
    return {
      configuration: [],
    };
  },
  methods: {
    getConfig: function () {
      return new Configurations().getConfiguration();
    },
    setConfig: function () {
      let saved = new Configurations().setConfiguration(this.configuration);
      if (saved) {
        success({
          title: "CONFIGURATIONS",
          text: "SAVE SUCCESS",
          type: "success",
        });
        this.$router.push("imports");
      }
    },
    getEquipamento : function () {
      let lastTicket = new Tickets().getLastRecord();
      this.configuration.equipamento = lastTicket.equipamento;
    }
  },
  mounted: function () {
    this.configuration = this.getConfig();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>