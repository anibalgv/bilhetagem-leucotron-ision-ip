<template>
  <div>
    <div class="dropdown d-inline-block ml-2">
      <button
        type="button"
        class="btn btn-sm btn-dual d-flex align-items-center"
        id="page-header-user-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          class="rounded-circle"
          src="static/assets/media/avatars/avatar10.jpg"
          alt="Header Avatar"
          style="width: 21px"
        />
        <span class="d-none d-sm-inline-block ml-2">Admin</span>
        <i
          class="fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"
        ></i>
      </button>
      <div
        class="dropdown-menu dropdown-menu-md dropdown-menu-right p-0 border-0"
        aria-labelledby="page-header-user-dropdown"
      >
        <div class="p-3 text-center bg-primary-dark rounded-top">
          <img
            class="img-avatar img-avatar48 img-avatar-thumb"
            src="static/assets/media/avatars/avatar10.jpg"
            alt
          />
          <p class="mt-2 mb-0 text-white font-w500">Adam Smith</p>
          <p class="mb-0 text-white-50 font-size-sm">Web Developer</p>
        </div>
        <div class="p-2">
          <a
            class="dropdown-item d-flex align-items-center justify-content-between"
            href="be_pages_generic_inbox.html"
          >
            <span class="font-size-sm font-w500">Inbox</span>
            <span class="badge badge-pill badge-primary ml-2">3</span>
          </a>
          <a
            class="dropdown-item d-flex align-items-center justify-content-between"
            href="be_pages_generic_profile.html"
          >
            <span class="font-size-sm font-w500">Profile</span>
            <span class="badge badge-pill badge-primary ml-2">1</span>
          </a>
          <a
            class="dropdown-item d-flex align-items-center justify-content-between"
            href="javascript:void(0)"
          >
            <span class="font-size-sm font-w500">Settings</span>
          </a>
          <div role="separator" class="dropdown-divider"></div>
          <a
            class="dropdown-item d-flex align-items-center justify-content-between"
            href="op_auth_lock.html"
          >
            <span class="font-size-sm font-w500">Lock Account</span>
          </a>
          <a
            class="dropdown-item d-flex align-items-center justify-content-between"
            href="op_auth_signin.html"
          >
            <span class="font-size-sm font-w500">Log Out</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeUserDropdown'
};
</script>

<style>
</style>