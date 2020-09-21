<template>
  <div>
    <div class="row">
      <div class="form-group col-md-2">
        <div class="custom-control custom-switch custom-control-success mb-1">
          <input
            type="checkbox"
            class="custom-control-input "
            id="example-sw-custom1"
            name="example-sw-custom1"
            v-model="configuration.app_auto_import"
          />
          <label class="custom-control-label" for="example-sw-custom1" style="margin-top:15px; ">
            <small>AUTO IMPORT</small>
          </label>
        </div>
      </div>
      <div class="col-md-6 col-lg-6" >
        <label for="app_auto_import" class="small" style="margin-left:20px;">
          INTERVAL
          <input
            type="number"
            name="app_auto_import"
            id="app_auto_impor"
            class="form-control form-control-sm"
            :disabled = "!configuration.app_auto_import"
            v-model="configuration.app_auto_import_interval"
          />
        </label>
        <small class="text-muted">HOURS</small>
      </div>
    </div>
    <div class="form-group">
      <label for class="small">
        FTP HOST ADDRESS
        <input
          type="text"
          name="ftp_host"
          id="ftp_host"
          class="form-control form-control-sm"
          v-model="configuration.ftp_host"
        />
      </label>
      <label for class="small">
        FTP PORT
        <input
          type="number"
          name="ftp_port"
          id="ftp_port"
          class="form-control form-control-sm"
          v-model="configuration.ftp_port"
        />
      </label>
    </div>
    <div class="form-group">
      <label for class="small">
        FTP USER
        <input
          type="text"
          name="ftp_user"
          id="ftp_user"
          class="form-control form-control-sm"
          v-model="configuration.ftp_user"
        />
      </label>
      <label for class="small">
        FTP PASSWORD
        <input
          type="text"
          name="ftp_password"
          id="ftp_password"
          class="form-control form-control-sm"
          v-model="configuration.ftp_password"
        />
      </label>
    </div>
    <div class="form-group">
      <button class="btn btn-success" v-on:click="setConfig">
        <i class="fa fa-save fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Configurations from "../models/configurations";
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
        console.log("SAVED");
      }
    },
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