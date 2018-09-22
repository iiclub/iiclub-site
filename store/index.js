import Vuex from 'vuex';

const createStore = () =>{

    return new Vuex.Store({
        state:{
            city : "default city",
            country : "default country",
            workshopData : {},
            snackbar : false,
            snackbarText : "email"
        },
        mutations : {
            setCountry(state,name){
                state.country = name;
            },
            setCity(state,name){
                state.city = name;
            },
            setWorkshop(state,data){
                state.workshopData = data;
            },
            setSnackbar(state,data){
                console.log("in setSnackbar ",data);
                state.snackbar = data;
            },
            setSnackbarText(state,data){
                console.log("in setSnackbarText ",data);
                state.snackbarText = data;
            }
        },
        actions:{
            setACountry(VueContext,name){
                VueContext.commit("setCountry",name);
            },
            setACity(VueContext,name){
                VueContext.commit("setCity",name);
            },
            setAWorkshop(VueContext,data){
                VueContext.commit("setWorkshop",data);
            },
            setASnackbar(VueContext,data){
                console.log("in setASnackbar ",data);
                VueContext.commit("setSnackbar",data);
            },
            setASnackbarText(VueContext,data){
                console.log("in setASnackbarText ",data);
                VueContext.commit("setSnackbarText",data);
            }
        },
        getters: {
            getCountry(state){
                return state.country;
            },
            getCity(state){
                return state.city;
            },
            getWorkshop(state){
                return state.workshopData;
            },
            getSnackbar(state){
                return state.snackbar;
            },
            getSnackbarText(state){
                return state.snackbarText;
            }
        }
    });

};

/* this.$store.dispatch("setACountry","pakistan");
this.city = this.$store.getters.getWorkshop; */

export default createStore;