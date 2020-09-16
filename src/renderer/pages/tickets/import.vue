<template>
  <div class="block-content">
  <div class=""  id="">
    <div class="row">
      <div class="col-md-5 col-xl-3">
        <div>
          <div class="block block-rounded">
            <!-- <div class="block-header block-header-default">
              <h3 class="block-title"></h3>
              <div class="block-options">
                <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
                </button>
              </div>
            </div> -->
            <div class="block-content">
              <!-- Easy Pie Chart (.js-pie-chart class is initialized in Helpers.easyPieChart()) -->
              <!-- For more info and examples you can check out http://rendro.github.io/easy-pie-chart/ -->
              <!-- Pie Chart Container -->
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
                  <div class="font-size-sm text-muted text-uppercase">FROM APLIANCE</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-xl-3">
        <div>
          <div class="block block-rounded">
            <!-- <div class="block-header block-header-default">
              <h3 class="block-title"></h3>
              <div class="block-options">
                <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
                </button>
              </div>
            </div> -->
            <div class="block-content" v-on:click="Import">
              <!-- Easy Pie Chart (.js-pie-chart class is initialized in Helpers.easyPieChart()) -->
              <!-- For more info and examples you can check out http://rendro.github.io/easy-pie-chart/ -->
              <!-- Pie Chart Container -->
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
                
              >
                <div class="block-content block-content-full text-center" >
                  <div class="push">
                    <i class="fa fa-file-export fa-2x text-info"></i>
                  </div>
                  <div class="font-size-h4 font-w700">
                    <span class="text-muted"></span> EXPORT
                  </div>
                  <div class="font-size-sm text-muted text-uppercase">TO CSV</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-xl-3">
        <div>
          <div class="block block-rounded">
            <!-- <div class="block-header block-header-default">
              <h3 class="block-title"></h3>
              <div class="block-options">
                <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
                </button>
              </div>
            </div> -->
            <div class="block-content">
              <!-- Easy Pie Chart (.js-pie-chart class is initialized in Helpers.easyPieChart()) -->
              <!-- For more info and examples you can check out http://rendro.github.io/easy-pie-chart/ -->
              <!-- Pie Chart Container -->
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
              >
                <div class="block-content block-content-full text-center">
                  <div class="push">
                    <i class="fa fa-file-export fa-2x text-info"></i>
                  </div>
                  <div class="font-size-h4 font-w700">
                    <span class="text-muted"></span> EXPORT
                  </div>
                  <div class="font-size-sm text-muted text-uppercase">TO JSON</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Tickets from "../../models/tickets";

export default {
  methods: {
    async Import() {
      new Tickets().Import();
      console.log("wasImported :", wasImported.toString());
    },
  },
};
</script>

<style>

</style>