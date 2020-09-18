<template>
  <div>
    <div class="block-header block-header-default">
      <h3 class="block-title">IMPORT/EXPORT DATA</h3>
      <div class="block-options">
        <button type="button" class="btn-block-option">
          <i class="si si-settings"></i>
        </button>
      </div>
    </div>

    <div class="block-content" style="background-color:#ffffff ">
      <div class id>
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
                        <span class="text-muted"></span> IMPORT
                      </div>
                      <div
                        class="font-size-sm text-muted text-uppercase"
                      >FROM APLIANCE TO LOCAL DATABASE</div>
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
                      <div class="font-size-sm text-muted text-uppercase">TO CSV FILE</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-xl-3" style="margin-bottom:35px;">
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
                      <div class="font-size-sm text-muted text-uppercase">TO JSON FILE</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CSV from '../../models/csv';
import Tickets from "../../models/tickets";

export default {
  methods: {
    async Import() {
      new Tickets().Import();
    },
    exportToJSON(){
      new Tickets().ExportToJSON();
    },
    exportToCSV(){
      new Tickets().ExportToCSV();
    }
  },
};
</script>

<style>
</style>