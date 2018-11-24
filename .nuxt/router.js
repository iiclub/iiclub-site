import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0a17d639 = () => import('../pages/workshop/index.vue' /* webpackChunkName: "pages/workshop/index" */).then(m => m.default || m)
const _47d02754 = () => import('../pages/backofficelemon/index.vue' /* webpackChunkName: "pages/backofficelemon/index" */).then(m => m.default || m)
const _66257eb6 = () => import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */).then(m => m.default || m)
const _14fec1e2 = () => import('../pages/aboutus/index.vue' /* webpackChunkName: "pages/aboutus/index" */).then(m => m.default || m)
const _18fa663c = () => import('../pages/contactus/index.vue' /* webpackChunkName: "pages/contactus/index" */).then(m => m.default || m)
const _1d528b0f = () => import('../pages/workshop/register/index.vue' /* webpackChunkName: "pages/workshop/register/index" */).then(m => m.default || m)
const _c8b9d9b0 = () => import('../pages/training/robotics/index.vue' /* webpackChunkName: "pages/training/robotics/index" */).then(m => m.default || m)
const _c8d509a0 = () => import('../pages/backofficelemon/aboutus/index.vue' /* webpackChunkName: "pages/backofficelemon/aboutus/index" */).then(m => m.default || m)
const _4a58d0be = () => import('../pages/training/othercourses/index.vue' /* webpackChunkName: "pages/training/othercourses/index" */).then(m => m.default || m)
const _6e6769a5 = () => import('../pages/backofficelemon/export/index.vue' /* webpackChunkName: "pages/backofficelemon/export/index" */).then(m => m.default || m)
const _dc143600 = () => import('../pages/training/raspberrypi/index.vue' /* webpackChunkName: "pages/training/raspberrypi/index" */).then(m => m.default || m)
const _269e7e38 = () => import('../pages/backofficelemon/workshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/index" */).then(m => m.default || m)
const _4b8a7906 = () => import('../pages/workshop/detail/index.vue' /* webpackChunkName: "pages/workshop/detail/index" */).then(m => m.default || m)
const _67d124c3 = () => import('../pages/backofficelemon/contactus/index.vue' /* webpackChunkName: "pages/backofficelemon/contactus/index" */).then(m => m.default || m)
const _3a7a040b = () => import('../pages/training/iot/index.vue' /* webpackChunkName: "pages/training/iot/index" */).then(m => m.default || m)
const _3f0b72a5 = () => import('../pages/training/arduino/index.vue' /* webpackChunkName: "pages/training/arduino/index" */).then(m => m.default || m)
const _27de76f3 = () => import('../pages/training/aeromodeling/index.vue' /* webpackChunkName: "pages/training/aeromodeling/index" */).then(m => m.default || m)
const _3d93ee9f = () => import('../pages/training/3dprinting/index.vue' /* webpackChunkName: "pages/training/3dprinting/index" */).then(m => m.default || m)
const _4d348569 = () => import('../pages/training/3dprinting/register/index.vue' /* webpackChunkName: "pages/training/3dprinting/register/index" */).then(m => m.default || m)
const _6d1ad6d6 = () => import('../pages/training/raspberrypi/detail/index.vue' /* webpackChunkName: "pages/training/raspberrypi/detail/index" */).then(m => m.default || m)
const _cfb2b5de = () => import('../pages/backofficelemon/workshop/addworkshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/addworkshop/index" */).then(m => m.default || m)
const _5f3b6b00 = () => import('../pages/training/robotics/register/index.vue' /* webpackChunkName: "pages/training/robotics/register/index" */).then(m => m.default || m)
const _e9d442b2 = () => import('../pages/training/othercourses/register/index.vue' /* webpackChunkName: "pages/training/othercourses/register/index" */).then(m => m.default || m)
const _5a5bb775 = () => import('../pages/backofficelemon/carousal/view/index.vue' /* webpackChunkName: "pages/backofficelemon/carousal/view/index" */).then(m => m.default || m)
const _412d624a = () => import('../pages/backofficelemon/testimonals/add/index.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/add/index" */).then(m => m.default || m)
const _ef5c6d06 = () => import('../pages/training/iot/register/index.vue' /* webpackChunkName: "pages/training/iot/register/index" */).then(m => m.default || m)
const _c087cb8e = () => import('../pages/backofficelemon/workshop/viewworkshop/index.vue' /* webpackChunkName: "pages/backofficelemon/workshop/viewworkshop/index" */).then(m => m.default || m)
const _87dc1092 = () => import('../pages/backofficelemon/training/addtraining/index.vue' /* webpackChunkName: "pages/backofficelemon/training/addtraining/index" */).then(m => m.default || m)
const _6f82d4de = () => import('../pages/training/arduino/detail/index.vue' /* webpackChunkName: "pages/training/arduino/detail/index" */).then(m => m.default || m)
const _0e8d97e7 = () => import('../pages/backofficelemon/carousal/add/index.vue' /* webpackChunkName: "pages/backofficelemon/carousal/add/index" */).then(m => m.default || m)
const _1fa49db3 = () => import('../pages/workshop/detail/users.vue' /* webpackChunkName: "pages/workshop/detail/users" */).then(m => m.default || m)
const _17c2d1f6 = () => import('../pages/workshop/detail/users/index.vue' /* webpackChunkName: "pages/workshop/detail/users/index" */).then(m => m.default || m)
const _22ae4c44 = () => import('../pages/workshop/detail/users/_id.vue' /* webpackChunkName: "pages/workshop/detail/users/_id" */).then(m => m.default || m)
const _ccabafba = () => import('../pages/training/arduino/register/index.vue' /* webpackChunkName: "pages/training/arduino/register/index" */).then(m => m.default || m)
const _7d70c119 = () => import('../pages/backofficelemon/training/viewtraining/index.vue' /* webpackChunkName: "pages/backofficelemon/training/viewtraining/index" */).then(m => m.default || m)
const _f9a8e752 = () => import('../pages/training/3dprinting/detail/index.vue' /* webpackChunkName: "pages/training/3dprinting/detail/index" */).then(m => m.default || m)
const _787b2c28 = () => import('../pages/training/raspberrypi/register/index.vue' /* webpackChunkName: "pages/training/raspberrypi/register/index" */).then(m => m.default || m)
const _b99a752a = () => import('../pages/training/iot/detail/index.vue' /* webpackChunkName: "pages/training/iot/detail/index" */).then(m => m.default || m)
const _7bb53972 = () => import('../pages/backofficelemon/testimonals/view/index.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/view/index" */).then(m => m.default || m)
const _fb47c8d6 = () => import('../pages/training/aeromodeling/register/index.vue' /* webpackChunkName: "pages/training/aeromodeling/register/index" */).then(m => m.default || m)
const _7123c5d6 = () => import('../pages/training/othercourses/detail/index.vue' /* webpackChunkName: "pages/training/othercourses/detail/index" */).then(m => m.default || m)
const _480cebae = () => import('../pages/training/robotics/detail/index.vue' /* webpackChunkName: "pages/training/robotics/detail/index" */).then(m => m.default || m)
const _075abd83 = () => import('../pages/training/aeromodeling/detail/index.vue' /* webpackChunkName: "pages/training/aeromodeling/detail/index" */).then(m => m.default || m)
const _13e9a11c = () => import('../pages/backofficelemon/training/addimage/_id.vue' /* webpackChunkName: "pages/backofficelemon/training/addimage/_id" */).then(m => m.default || m)
const _187263de = () => import('../pages/training/3dprinting/register/_id.vue' /* webpackChunkName: "pages/training/3dprinting/register/_id" */).then(m => m.default || m)
const _38095ecf = () => import('../pages/training/othercourses/register/_id.vue' /* webpackChunkName: "pages/training/othercourses/register/_id" */).then(m => m.default || m)
const _8eafa530 = () => import('../pages/training/robotics/register/_id.vue' /* webpackChunkName: "pages/training/robotics/register/_id" */).then(m => m.default || m)
const _68042046 = () => import('../pages/backofficelemon/workshop/editworkshop/_id.vue' /* webpackChunkName: "pages/backofficelemon/workshop/editworkshop/_id" */).then(m => m.default || m)
const _6c06d284 = () => import('../pages/training/raspberrypi/detail/_id.vue' /* webpackChunkName: "pages/training/raspberrypi/detail/_id" */).then(m => m.default || m)
const _f0c3fcd4 = () => import('../pages/training/robotics/detail/_id.vue' /* webpackChunkName: "pages/training/robotics/detail/_id" */).then(m => m.default || m)
const _4adbeebf = () => import('../pages/backofficelemon/testimonals/edit/_id.vue' /* webpackChunkName: "pages/backofficelemon/testimonals/edit/_id" */).then(m => m.default || m)
const _92326f8e = () => import('../pages/training/arduino/detail/_id.vue' /* webpackChunkName: "pages/training/arduino/detail/_id" */).then(m => m.default || m)
const _549a60bd = () => import('../pages/training/othercourses/detail/_id.vue' /* webpackChunkName: "pages/training/othercourses/detail/_id" */).then(m => m.default || m)
const _1e74ff26 = () => import('../pages/backofficelemon/training/edittraining/_id.vue' /* webpackChunkName: "pages/backofficelemon/training/edittraining/_id" */).then(m => m.default || m)
const _660db2da = () => import('../pages/training/iot/detail/_id.vue' /* webpackChunkName: "pages/training/iot/detail/_id" */).then(m => m.default || m)
const _4493cee0 = () => import('../pages/training/raspberrypi/register/_id.vue' /* webpackChunkName: "pages/training/raspberrypi/register/_id" */).then(m => m.default || m)
const _13ce0725 = () => import('../pages/training/iot/register/_id.vue' /* webpackChunkName: "pages/training/iot/register/_id" */).then(m => m.default || m)
const _9b1f76aa = () => import('../pages/training/aeromodeling/detail/_id.vue' /* webpackChunkName: "pages/training/aeromodeling/detail/_id" */).then(m => m.default || m)
const _77f5ff3d = () => import('../pages/training/aeromodeling/register/_id.vue' /* webpackChunkName: "pages/training/aeromodeling/register/_id" */).then(m => m.default || m)
const _62001182 = () => import('../pages/backofficelemon/carousal/edit/_id.vue' /* webpackChunkName: "pages/backofficelemon/carousal/edit/_id" */).then(m => m.default || m)
const _961a6fe2 = () => import('../pages/backofficelemon/workshop/addimage/_id.vue' /* webpackChunkName: "pages/backofficelemon/workshop/addimage/_id" */).then(m => m.default || m)
const _38d9d74b = () => import('../pages/training/arduino/register/_id.vue' /* webpackChunkName: "pages/training/arduino/register/_id" */).then(m => m.default || m)
const _40a4fdb6 = () => import('../pages/workshop/detail/_id.vue' /* webpackChunkName: "pages/workshop/detail/_id" */).then(m => m.default || m)
const _4ad60537 = () => import('../pages/workshop/register/_id.vue' /* webpackChunkName: "pages/workshop/register/_id" */).then(m => m.default || m)
const _3e9ecb9a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _0a17d639,
			name: "workshop"
		},
		{
			path: "/backofficelemon",
			component: _47d02754,
			name: "backofficelemon"
		},
		{
			path: "/gallery",
			component: _66257eb6,
			name: "gallery"
		},
		{
			path: "/aboutus",
			component: _14fec1e2,
			name: "aboutus"
		},
		{
			path: "/contactus",
			component: _18fa663c,
			name: "contactus"
		},
		{
			path: "/workshop/register",
			component: _1d528b0f,
			name: "workshop-register"
		},
		{
			path: "/training/robotics",
			component: _c8b9d9b0,
			name: "training-robotics"
		},
		{
			path: "/backofficelemon/aboutus",
			component: _c8d509a0,
			name: "backofficelemon-aboutus"
		},
		{
			path: "/training/othercourses",
			component: _4a58d0be,
			name: "training-othercourses"
		},
		{
			path: "/backofficelemon/export",
			component: _6e6769a5,
			name: "backofficelemon-export"
		},
		{
			path: "/training/raspberrypi",
			component: _dc143600,
			name: "training-raspberrypi"
		},
		{
			path: "/backofficelemon/workshop",
			component: _269e7e38,
			name: "backofficelemon-workshop"
		},
		{
			path: "/workshop/detail",
			component: _4b8a7906,
			name: "workshop-detail"
		},
		{
			path: "/backofficelemon/contactus",
			component: _67d124c3,
			name: "backofficelemon-contactus"
		},
		{
			path: "/training/iot",
			component: _3a7a040b,
			name: "training-iot"
		},
		{
			path: "/training/arduino",
			component: _3f0b72a5,
			name: "training-arduino"
		},
		{
			path: "/training/aeromodeling",
			component: _27de76f3,
			name: "training-aeromodeling"
		},
		{
			path: "/training/3dprinting",
			component: _3d93ee9f,
			name: "training-3dprinting"
		},
		{
			path: "/training/3dprinting/register",
			component: _4d348569,
			name: "training-3dprinting-register"
		},
		{
			path: "/training/raspberrypi/detail",
			component: _6d1ad6d6,
			name: "training-raspberrypi-detail"
		},
		{
			path: "/backofficelemon/workshop/addworkshop",
			component: _cfb2b5de,
			name: "backofficelemon-workshop-addworkshop"
		},
		{
			path: "/training/robotics/register",
			component: _5f3b6b00,
			name: "training-robotics-register"
		},
		{
			path: "/training/othercourses/register",
			component: _e9d442b2,
			name: "training-othercourses-register"
		},
		{
			path: "/backofficelemon/carousal/view",
			component: _5a5bb775,
			name: "backofficelemon-carousal-view"
		},
		{
			path: "/backofficelemon/testimonals/add",
			component: _412d624a,
			name: "backofficelemon-testimonals-add"
		},
		{
			path: "/training/iot/register",
			component: _ef5c6d06,
			name: "training-iot-register"
		},
		{
			path: "/backofficelemon/workshop/viewworkshop",
			component: _c087cb8e,
			name: "backofficelemon-workshop-viewworkshop"
		},
		{
			path: "/backofficelemon/training/addtraining",
			component: _87dc1092,
			name: "backofficelemon-training-addtraining"
		},
		{
			path: "/training/arduino/detail",
			component: _6f82d4de,
			name: "training-arduino-detail"
		},
		{
			path: "/backofficelemon/carousal/add",
			component: _0e8d97e7,
			name: "backofficelemon-carousal-add"
		},
		{
			path: "/workshop/detail/users",
			component: _1fa49db3,
			children: [
				{
					path: "",
					component: _17c2d1f6,
					name: "workshop-detail-users"
				},
				{
					path: ":id",
					component: _22ae4c44,
					name: "workshop-detail-users-id"
				}
			]
		},
		{
			path: "/training/arduino/register",
			component: _ccabafba,
			name: "training-arduino-register"
		},
		{
			path: "/backofficelemon/training/viewtraining",
			component: _7d70c119,
			name: "backofficelemon-training-viewtraining"
		},
		{
			path: "/training/3dprinting/detail",
			component: _f9a8e752,
			name: "training-3dprinting-detail"
		},
		{
			path: "/training/raspberrypi/register",
			component: _787b2c28,
			name: "training-raspberrypi-register"
		},
		{
			path: "/training/iot/detail",
			component: _b99a752a,
			name: "training-iot-detail"
		},
		{
			path: "/backofficelemon/testimonals/view",
			component: _7bb53972,
			name: "backofficelemon-testimonals-view"
		},
		{
			path: "/training/aeromodeling/register",
			component: _fb47c8d6,
			name: "training-aeromodeling-register"
		},
		{
			path: "/training/othercourses/detail",
			component: _7123c5d6,
			name: "training-othercourses-detail"
		},
		{
			path: "/training/robotics/detail",
			component: _480cebae,
			name: "training-robotics-detail"
		},
		{
			path: "/training/aeromodeling/detail",
			component: _075abd83,
			name: "training-aeromodeling-detail"
		},
		{
			path: "/backofficelemon/training/addimage/:id?",
			component: _13e9a11c,
			name: "backofficelemon-training-addimage-id"
		},
		{
			path: "/training/3dprinting/register/:id",
			component: _187263de,
			name: "training-3dprinting-register-id"
		},
		{
			path: "/training/othercourses/register/:id",
			component: _38095ecf,
			name: "training-othercourses-register-id"
		},
		{
			path: "/training/robotics/register/:id",
			component: _8eafa530,
			name: "training-robotics-register-id"
		},
		{
			path: "/backofficelemon/workshop/editworkshop/:id?",
			component: _68042046,
			name: "backofficelemon-workshop-editworkshop-id"
		},
		{
			path: "/training/raspberrypi/detail/:id",
			component: _6c06d284,
			name: "training-raspberrypi-detail-id"
		},
		{
			path: "/training/robotics/detail/:id",
			component: _f0c3fcd4,
			name: "training-robotics-detail-id"
		},
		{
			path: "/backofficelemon/testimonals/edit/:id?",
			component: _4adbeebf,
			name: "backofficelemon-testimonals-edit-id"
		},
		{
			path: "/training/arduino/detail/:id",
			component: _92326f8e,
			name: "training-arduino-detail-id"
		},
		{
			path: "/training/othercourses/detail/:id",
			component: _549a60bd,
			name: "training-othercourses-detail-id"
		},
		{
			path: "/backofficelemon/training/edittraining/:id?",
			component: _1e74ff26,
			name: "backofficelemon-training-edittraining-id"
		},
		{
			path: "/training/iot/detail/:id",
			component: _660db2da,
			name: "training-iot-detail-id"
		},
		{
			path: "/training/raspberrypi/register/:id",
			component: _4493cee0,
			name: "training-raspberrypi-register-id"
		},
		{
			path: "/training/iot/register/:id",
			component: _13ce0725,
			name: "training-iot-register-id"
		},
		{
			path: "/training/aeromodeling/detail/:id",
			component: _9b1f76aa,
			name: "training-aeromodeling-detail-id"
		},
		{
			path: "/training/aeromodeling/register/:id",
			component: _77f5ff3d,
			name: "training-aeromodeling-register-id"
		},
		{
			path: "/backofficelemon/carousal/edit/:id?",
			component: _62001182,
			name: "backofficelemon-carousal-edit-id"
		},
		{
			path: "/backofficelemon/workshop/addimage/:id?",
			component: _961a6fe2,
			name: "backofficelemon-workshop-addimage-id"
		},
		{
			path: "/training/arduino/register/:id",
			component: _38d9d74b,
			name: "training-arduino-register-id"
		},
		{
			path: "/workshop/detail/:id",
			component: _40a4fdb6,
			name: "workshop-detail-id"
		},
		{
			path: "/workshop/register/:id",
			component: _4ad60537,
			name: "workshop-register-id"
		},
		{
			path: "/",
			component: _3e9ecb9a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
