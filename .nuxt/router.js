import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _422d806e = () => import('../pages/workshop/index.vue' /* webpackChunkName: "pages/workshop/index" */).then(m => m.default || m)
const _3b9f87e5 = () => import('../pages/backoffice/index.vue' /* webpackChunkName: "pages/backoffice/index" */).then(m => m.default || m)
const _59d87902 = () => import('../pages/aboutus/index.vue' /* webpackChunkName: "pages/aboutus/index" */).then(m => m.default || m)
const _5fefdbc4 = () => import('../pages/backofficelemon/index.vue' /* webpackChunkName: "pages/backofficelemon/index" */).then(m => m.default || m)
const _8e42d55c = () => import('../pages/contactus/index.vue' /* webpackChunkName: "pages/contactus/index" */).then(m => m.default || m)
const _a7523902 = () => import('../pages/workshop/register/index.vue' /* webpackChunkName: "pages/workshop/register/index" */).then(m => m.default || m)
const _1ce3eb0f = () => import('../pages/training/3dprinting/index.vue' /* webpackChunkName: "pages/training/3dprinting/index" */).then(m => m.default || m)
const _0e5c259b = () => import('../pages/training/iot/index.vue' /* webpackChunkName: "pages/training/iot/index" */).then(m => m.default || m)
const _2aa76b98 = () => import('../pages/training/robotics/index.vue' /* webpackChunkName: "pages/training/robotics/index" */).then(m => m.default || m)
const _1b4b1026 = () => import('../pages/workshop/detail/index.vue' /* webpackChunkName: "pages/workshop/detail/index" */).then(m => m.default || m)
const _16ee0d33 = () => import('../pages/backofficelemon/contactus/index.vue' /* webpackChunkName: "pages/backofficelemon/contactus/index" */).then(m => m.default || m)
const _2ae24c35 = () => import('../pages/training/arduino/index.vue' /* webpackChunkName: "pages/training/arduino/index" */).then(m => m.default || m)
const _16708a7e = () => import('../pages/backoffice/aboutus/index.vue' /* webpackChunkName: "pages/backoffice/aboutus/index" */).then(m => m.default || m)
const _e90e5196 = () => import('../pages/backofficelemon/export/index.vue' /* webpackChunkName: "pages/backofficelemon/export/index" */).then(m => m.default || m)
const _c6b512e0 = () => import('../pages/training/raspberrypi/index.vue' /* webpackChunkName: "pages/training/raspberrypi/index" */).then(m => m.default || m)
const _73211763 = () => import('../pages/training/aeromodeling/index.vue' /* webpackChunkName: "pages/training/aeromodeling/index" */).then(m => m.default || m)
const _18979e72 = () => import('../pages/backoffice/workshop/index.vue' /* webpackChunkName: "pages/backoffice/workshop/index" */).then(m => m.default || m)
const _450ac7c8 = () => import('../pages/backofficelemon/workshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/index" */).then(m => m.default || m)
const _3d71c414 = () => import('../pages/backoffice/contactus/index.vue' /* webpackChunkName: "pages/backoffice/contactus/index" */).then(m => m.default || m)
const _26163811 = () => import('../pages/training/othercourses/index.vue' /* webpackChunkName: "pages/training/othercourses/index" */).then(m => m.default || m)
const _20b1bfa0 = () => import('../pages/backofficelemon/aboutus/index.vue' /* webpackChunkName: "pages/backofficelemon/aboutus/index" */).then(m => m.default || m)
const _4d5ada01 = () => import('../pages/training/arduino/detail/index.vue' /* webpackChunkName: "pages/training/arduino/detail/index" */).then(m => m.default || m)
const _050e5c98 = () => import('../pages/training/raspberrypi/register/index.vue' /* webpackChunkName: "pages/training/raspberrypi/register/index" */).then(m => m.default || m)
const _6ec13974 = () => import('../pages/training/raspberrypi/detail/index.vue' /* webpackChunkName: "pages/training/raspberrypi/detail/index" */).then(m => m.default || m)
const _699a25fe = () => import('../pages/backoffice/testimonals/view/index.vue' /* webpackChunkName: "pages/backoffice/testimonals/view/index" */).then(m => m.default || m)
const _de2e8792 = () => import('../pages/training/othercourses/register/index.vue' /* webpackChunkName: "pages/training/othercourses/register/index" */).then(m => m.default || m)
const _1493928c = () => import('../pages/backofficelemon/testimonals/add/index.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/add/index" */).then(m => m.default || m)
const _31456874 = () => import('../pages/backoffice/training/addtraining/index.vue' /* webpackChunkName: "pages/backoffice/training/addtraining/index" */).then(m => m.default || m)
const _1f0c6947 = () => import('../pages/backofficelemon/training/addtraining/index.vue' /* webpackChunkName: "pages/backofficelemon/training/addtraining/index" */).then(m => m.default || m)
const _4709c2b6 = () => import('../pages/training/othercourses/detail/index.vue' /* webpackChunkName: "pages/training/othercourses/detail/index" */).then(m => m.default || m)
const _624186f9 = () => import('../pages/training/3dprinting/register/index.vue' /* webpackChunkName: "pages/training/3dprinting/register/index" */).then(m => m.default || m)
const _88e0222c = () => import('../pages/backoffice/training/viewtraining/index.vue' /* webpackChunkName: "pages/backoffice/training/viewtraining/index" */).then(m => m.default || m)
const _5846f302 = () => import('../pages/backofficelemon/testimonals/view/index.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/view/index" */).then(m => m.default || m)
const _d888dee0 = () => import('../pages/training/robotics/register/index.vue' /* webpackChunkName: "pages/training/robotics/register/index" */).then(m => m.default || m)
const _1a7380db = () => import('../pages/backoffice/testimonals/add/index.vue' /* webpackChunkName: "pages/backoffice/testimonals/add/index" */).then(m => m.default || m)
const _1c67bf13 = () => import('../pages/training/aeromodeling/detail/index.vue' /* webpackChunkName: "pages/training/aeromodeling/detail/index" */).then(m => m.default || m)
const _48c71093 = () => import('../pages/training/arduino/register/index.vue' /* webpackChunkName: "pages/training/arduino/register/index" */).then(m => m.default || m)
const _79c48189 = () => import('../pages/backofficelemon/training/viewtraining/index.vue' /* webpackChunkName: "pages/backofficelemon/training/viewtraining/index" */).then(m => m.default || m)
const _c7e04aae = () => import('../pages/backofficelemon/workshop/viewworkshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/viewworkshop/index" */).then(m => m.default || m)
const _1d596af6 = () => import('../pages/backoffice/carousal/add/index.vue' /* webpackChunkName: "pages/backoffice/carousal/add/index" */).then(m => m.default || m)
const _791c0dc0 = () => import('../pages/backoffice/workshop/addworkshop/index.vue' /* webpackChunkName: "pages/backoffice/workshop/addworkshop/index" */).then(m => m.default || m)
const _37c45223 = () => import('../pages/workshop/detail/users.vue' /* webpackChunkName: "pages/workshop/detail/users" */).then(m => m.default || m)
const _63057266 = () => import('../pages/workshop/detail/users/index.vue' /* webpackChunkName: "pages/workshop/detail/users/index" */).then(m => m.default || m)
const _640e5364 = () => import('../pages/workshop/detail/users/_id.vue' /* webpackChunkName: "pages/workshop/detail/users/_id" */).then(m => m.default || m)
const _efa20db6 = () => import('../pages/training/aeromodeling/register/index.vue' /* webpackChunkName: "pages/training/aeromodeling/register/index" */).then(m => m.default || m)
const _239a9977 = () => import('../pages/backofficelemon/carousal/add/index.vue' /* webpackChunkName: "pages/backofficelemon/carousal/add/index" */).then(m => m.default || m)
const _09bdd2be = () => import('../pages/backofficelemon/workshop/addworkshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/addworkshop/index" */).then(m => m.default || m)
const _fafa7c4a = () => import('../pages/training/iot/detail/index.vue' /* webpackChunkName: "pages/training/iot/detail/index" */).then(m => m.default || m)
const _32223036 = () => import('../pages/backofficelemon/carousal/view/index.vue' /* webpackChunkName: "pages/backofficelemon/carousal/view/index" */).then(m => m.default || m)
const _58d72c26 = () => import('../pages/training/iot/register/index.vue' /* webpackChunkName: "pages/training/iot/register/index" */).then(m => m.default || m)
const _6679353e = () => import('../pages/training/robotics/detail/index.vue' /* webpackChunkName: "pages/training/robotics/detail/index" */).then(m => m.default || m)
const _90a89c32 = () => import('../pages/training/3dprinting/detail/index.vue' /* webpackChunkName: "pages/training/3dprinting/detail/index" */).then(m => m.default || m)
const _44496fec = () => import('../pages/backoffice/workshop/viewworkshop/index.vue' /* webpackChunkName: "pages/backoffice/workshop/viewworkshop/index" */).then(m => m.default || m)
const _250a4646 = () => import('../pages/backoffice/carousal/view/index.vue' /* webpackChunkName: "pages/backoffice/carousal/view/index" */).then(m => m.default || m)
const _b6a121b4 = () => import('../pages/training/robotics/detail/_id.vue' /* webpackChunkName: "pages/training/robotics/detail/_id" */).then(m => m.default || m)
const _393aa500 = () => import('../pages/training/raspberrypi/register/_id.vue' /* webpackChunkName: "pages/training/raspberrypi/register/_id" */).then(m => m.default || m)
const _4d16605f = () => import('../pages/training/othercourses/register/_id.vue' /* webpackChunkName: "pages/training/othercourses/register/_id" */).then(m => m.default || m)
const _697b9c7f = () => import('../pages/backofficelemon/workshop/addimage/_id.vue' /* webpackChunkName: "pages/backofficelemon/workshop/addimage/_id" */).then(m => m.default || m)
const _25a080a6 = () => import('../pages/backoffice/training/addimage/_id.vue' /* webpackChunkName: "pages/backoffice/training/addimage/_id" */).then(m => m.default || m)
const _51f62093 = () => import('../pages/backoffice/carousal/edit/_id.vue' /* webpackChunkName: "pages/backoffice/carousal/edit/_id" */).then(m => m.default || m)
const _2846f3a1 = () => import('../pages/training/3dprinting/register/_id.vue' /* webpackChunkName: "pages/training/3dprinting/register/_id" */).then(m => m.default || m)
const _edcaf366 = () => import('../pages/training/othercourses/detail/_id.vue' /* webpackChunkName: "pages/training/othercourses/detail/_id" */).then(m => m.default || m)
const _4a2d3cb6 = () => import('../pages/backofficelemon/workshop/editworkshop/_id.vue' /* webpackChunkName: "pages/backofficelemon/workshop/editworkshop/_id" */).then(m => m.default || m)
const _e38e32c0 = () => import('../pages/backoffice/workshop/addimage/_id.vue' /* webpackChunkName: "pages/backoffice/workshop/addimage/_id" */).then(m => m.default || m)
const _5bfd7f03 = () => import('../pages/training/iot/detail/_id.vue' /* webpackChunkName: "pages/training/iot/detail/_id" */).then(m => m.default || m)
const _54018be4 = () => import('../pages/backoffice/testimonals/edit/_id.vue' /* webpackChunkName: "pages/backoffice/testimonals/edit/_id" */).then(m => m.default || m)
const _e5f9fe66 = () => import('../pages/training/aeromodeling/register/_id.vue' /* webpackChunkName: "pages/training/aeromodeling/register/_id" */).then(m => m.default || m)
const _19c3f8d6 = () => import('../pages/training/iot/register/_id.vue' /* webpackChunkName: "pages/training/iot/register/_id" */).then(m => m.default || m)
const _321f2b8a = () => import('../pages/training/aeromodeling/detail/_id.vue' /* webpackChunkName: "pages/training/aeromodeling/detail/_id" */).then(m => m.default || m)
const _50aecc4f = () => import('../pages/backofficelemon/testimonals/edit/_id.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/edit/_id" */).then(m => m.default || m)
const _51d71210 = () => import('../pages/training/robotics/register/_id.vue' /* webpackChunkName: "pages/training/robotics/register/_id" */).then(m => m.default || m)
const _d9112592 = () => import('../pages/backoffice/training/edittraining/_id.vue' /* webpackChunkName: "pages/backoffice/training/edittraining/_id" */).then(m => m.default || m)
const _6f1b14e8 = () => import('../pages/backofficelemon/training/addimage/_id.vue' /* webpackChunkName: "pages/backofficelemon/training/addimage/_id" */).then(m => m.default || m)
const _009e1b96 = () => import('../pages/backofficelemon/training/edittraining/_id.vue' /* webpackChunkName: "pages/backofficelemon/training/edittraining/_id" */).then(m => m.default || m)
const _79197f2e = () => import('../pages/training/raspberrypi/detail/_id.vue' /* webpackChunkName: "pages/training/raspberrypi/detail/_id" */).then(m => m.default || m)
const _8413c88a = () => import('../pages/training/arduino/register/_id.vue' /* webpackChunkName: "pages/training/arduino/register/_id" */).then(m => m.default || m)
const _45f2e352 = () => import('../pages/backoffice/workshop/editworkshop/_id.vue' /* webpackChunkName: "pages/backoffice/workshop/editworkshop/_id" */).then(m => m.default || m)
const _022968a9 = () => import('../pages/training/arduino/detail/_id.vue' /* webpackChunkName: "pages/training/arduino/detail/_id" */).then(m => m.default || m)
const _84f6c41c = () => import('../pages/backofficelemon/carousal/edit/_id.vue' /* webpackChunkName: "pages/backofficelemon/carousal/edit/_id" */).then(m => m.default || m)
const _efe0dcd6 = () => import('../pages/workshop/detail/_id.vue' /* webpackChunkName: "pages/workshop/detail/_id" */).then(m => m.default || m)
const _62f5b9a7 = () => import('../pages/workshop/register/_id.vue' /* webpackChunkName: "pages/workshop/register/_id" */).then(m => m.default || m)
const _26272ea3 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/workshop",
			component: _422d806e,
			name: "workshop"
		},
		{
			path: "/backoffice",
			component: _3b9f87e5,
			name: "backoffice"
		},
		{
			path: "/aboutus",
			component: _59d87902,
			name: "aboutus"
		},
		{
			path: "/backofficelemon",
			component: _5fefdbc4,
			name: "backofficelemon"
		},
		{
			path: "/contactus",
			component: _8e42d55c,
			name: "contactus"
		},
		{
			path: "/workshop/register",
			component: _a7523902,
			name: "workshop-register"
		},
		{
			path: "/training/3dprinting",
			component: _1ce3eb0f,
			name: "training-3dprinting"
		},
		{
			path: "/training/iot",
			component: _0e5c259b,
			name: "training-iot"
		},
		{
			path: "/training/robotics",
			component: _2aa76b98,
			name: "training-robotics"
		},
		{
			path: "/workshop/detail",
			component: _1b4b1026,
			name: "workshop-detail"
		},
		{
			path: "/backofficelemon/contactus",
			component: _16ee0d33,
			name: "backofficelemon-contactus"
		},
		{
			path: "/training/arduino",
			component: _2ae24c35,
			name: "training-arduino"
		},
		{
			path: "/backoffice/aboutus",
			component: _16708a7e,
			name: "backoffice-aboutus"
		},
		{
			path: "/backofficelemon/export",
			component: _e90e5196,
			name: "backofficelemon-export"
		},
		{
			path: "/training/raspberrypi",
			component: _c6b512e0,
			name: "training-raspberrypi"
		},
		{
			path: "/training/aeromodeling",
			component: _73211763,
			name: "training-aeromodeling"
		},
		{
			path: "/backoffice/workshop",
			component: _18979e72,
			name: "backoffice-workshop"
		},
		{
			path: "/backofficelemon/workshop",
			component: _450ac7c8,
			name: "backofficelemon-workshop"
		},
		{
			path: "/backoffice/contactus",
			component: _3d71c414,
			name: "backoffice-contactus"
		},
		{
			path: "/training/othercourses",
			component: _26163811,
			name: "training-othercourses"
		},
		{
			path: "/backofficelemon/aboutus",
			component: _20b1bfa0,
			name: "backofficelemon-aboutus"
		},
		{
			path: "/training/arduino/detail",
			component: _4d5ada01,
			name: "training-arduino-detail"
		},
		{
			path: "/training/raspberrypi/register",
			component: _050e5c98,
			name: "training-raspberrypi-register"
		},
		{
			path: "/training/raspberrypi/detail",
			component: _6ec13974,
			name: "training-raspberrypi-detail"
		},
		{
			path: "/backoffice/testimonals/view",
			component: _699a25fe,
			name: "backoffice-testimonals-view"
		},
		{
			path: "/training/othercourses/register",
			component: _de2e8792,
			name: "training-othercourses-register"
		},
		{
			path: "/backofficelemon/testimonals/add",
			component: _1493928c,
			name: "backofficelemon-testimonals-add"
		},
		{
			path: "/backoffice/training/addtraining",
			component: _31456874,
			name: "backoffice-training-addtraining"
		},
		{
			path: "/backofficelemon/training/addtraining",
			component: _1f0c6947,
			name: "backofficelemon-training-addtraining"
		},
		{
			path: "/training/othercourses/detail",
			component: _4709c2b6,
			name: "training-othercourses-detail"
		},
		{
			path: "/training/3dprinting/register",
			component: _624186f9,
			name: "training-3dprinting-register"
		},
		{
			path: "/backoffice/training/viewtraining",
			component: _88e0222c,
			name: "backoffice-training-viewtraining"
		},
		{
			path: "/backofficelemon/testimonals/view",
			component: _5846f302,
			name: "backofficelemon-testimonals-view"
		},
		{
			path: "/training/robotics/register",
			component: _d888dee0,
			name: "training-robotics-register"
		},
		{
			path: "/backoffice/testimonals/add",
			component: _1a7380db,
			name: "backoffice-testimonals-add"
		},
		{
			path: "/training/aeromodeling/detail",
			component: _1c67bf13,
			name: "training-aeromodeling-detail"
		},
		{
			path: "/training/arduino/register",
			component: _48c71093,
			name: "training-arduino-register"
		},
		{
			path: "/backofficelemon/training/viewtraining",
			component: _79c48189,
			name: "backofficelemon-training-viewtraining"
		},
		{
			path: "/backofficelemon/workshop/viewworkshop",
			component: _c7e04aae,
			name: "backofficelemon-workshop-viewworkshop"
		},
		{
			path: "/backoffice/carousal/add",
			component: _1d596af6,
			name: "backoffice-carousal-add"
		},
		{
			path: "/backoffice/workshop/addworkshop",
			component: _791c0dc0,
			name: "backoffice-workshop-addworkshop"
		},
		{
			path: "/workshop/detail/users",
			component: _37c45223,
			children: [
				{
					path: "",
					component: _63057266,
					name: "workshop-detail-users"
				},
				{
					path: ":id",
					component: _640e5364,
					name: "workshop-detail-users-id"
				}
			]
		},
		{
			path: "/training/aeromodeling/register",
			component: _efa20db6,
			name: "training-aeromodeling-register"
		},
		{
			path: "/backofficelemon/carousal/add",
			component: _239a9977,
			name: "backofficelemon-carousal-add"
		},
		{
			path: "/backofficelemon/workshop/addworkshop",
			component: _09bdd2be,
			name: "backofficelemon-workshop-addworkshop"
		},
		{
			path: "/training/iot/detail",
			component: _fafa7c4a,
			name: "training-iot-detail"
		},
		{
			path: "/backofficelemon/carousal/view",
			component: _32223036,
			name: "backofficelemon-carousal-view"
		},
		{
			path: "/training/iot/register",
			component: _58d72c26,
			name: "training-iot-register"
		},
		{
			path: "/training/robotics/detail",
			component: _6679353e,
			name: "training-robotics-detail"
		},
		{
			path: "/training/3dprinting/detail",
			component: _90a89c32,
			name: "training-3dprinting-detail"
		},
		{
			path: "/backoffice/workshop/viewworkshop",
			component: _44496fec,
			name: "backoffice-workshop-viewworkshop"
		},
		{
			path: "/backoffice/carousal/view",
			component: _250a4646,
			name: "backoffice-carousal-view"
		},
		{
			path: "/training/robotics/detail/:id",
			component: _b6a121b4,
			name: "training-robotics-detail-id"
		},
		{
			path: "/training/raspberrypi/register/:id",
			component: _393aa500,
			name: "training-raspberrypi-register-id"
		},
		{
			path: "/training/othercourses/register/:id",
			component: _4d16605f,
			name: "training-othercourses-register-id"
		},
		{
			path: "/backofficelemon/workshop/addimage/:id?",
			component: _697b9c7f,
			name: "backofficelemon-workshop-addimage-id"
		},
		{
			path: "/backoffice/training/addimage/:id?",
			component: _25a080a6,
			name: "backoffice-training-addimage-id"
		},
		{
			path: "/backoffice/carousal/edit/:id?",
			component: _51f62093,
			name: "backoffice-carousal-edit-id"
		},
		{
			path: "/training/3dprinting/register/:id",
			component: _2846f3a1,
			name: "training-3dprinting-register-id"
		},
		{
			path: "/training/othercourses/detail/:id",
			component: _edcaf366,
			name: "training-othercourses-detail-id"
		},
		{
			path: "/backofficelemon/workshop/editworkshop/:id?",
			component: _4a2d3cb6,
			name: "backofficelemon-workshop-editworkshop-id"
		},
		{
			path: "/backoffice/workshop/addimage/:id?",
			component: _e38e32c0,
			name: "backoffice-workshop-addimage-id"
		},
		{
			path: "/training/iot/detail/:id",
			component: _5bfd7f03,
			name: "training-iot-detail-id"
		},
		{
			path: "/backoffice/testimonals/edit/:id?",
			component: _54018be4,
			name: "backoffice-testimonals-edit-id"
		},
		{
			path: "/training/aeromodeling/register/:id",
			component: _e5f9fe66,
			name: "training-aeromodeling-register-id"
		},
		{
			path: "/training/iot/register/:id",
			component: _19c3f8d6,
			name: "training-iot-register-id"
		},
		{
			path: "/training/aeromodeling/detail/:id",
			component: _321f2b8a,
			name: "training-aeromodeling-detail-id"
		},
		{
			path: "/backofficelemon/testimonals/edit/:id?",
			component: _50aecc4f,
			name: "backofficelemon-testimonals-edit-id"
		},
		{
			path: "/training/robotics/register/:id",
			component: _51d71210,
			name: "training-robotics-register-id"
		},
		{
			path: "/backoffice/training/edittraining/:id?",
			component: _d9112592,
			name: "backoffice-training-edittraining-id"
		},
		{
			path: "/backofficelemon/training/addimage/:id?",
			component: _6f1b14e8,
			name: "backofficelemon-training-addimage-id"
		},
		{
			path: "/backofficelemon/training/edittraining/:id?",
			component: _009e1b96,
			name: "backofficelemon-training-edittraining-id"
		},
		{
			path: "/training/raspberrypi/detail/:id",
			component: _79197f2e,
			name: "training-raspberrypi-detail-id"
		},
		{
			path: "/training/arduino/register/:id",
			component: _8413c88a,
			name: "training-arduino-register-id"
		},
		{
			path: "/backoffice/workshop/editworkshop/:id?",
			component: _45f2e352,
			name: "backoffice-workshop-editworkshop-id"
		},
		{
			path: "/training/arduino/detail/:id",
			component: _022968a9,
			name: "training-arduino-detail-id"
		},
		{
			path: "/backofficelemon/carousal/edit/:id?",
			component: _84f6c41c,
			name: "backofficelemon-carousal-edit-id"
		},
		{
			path: "/workshop/detail/:id",
			component: _efe0dcd6,
			name: "workshop-detail-id"
		},
		{
			path: "/workshop/register/:id",
			component: _62f5b9a7,
			name: "workshop-register-id"
		},
		{
			path: "/",
			component: _26272ea3,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
