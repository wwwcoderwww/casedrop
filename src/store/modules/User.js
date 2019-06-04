import Api from '@/api/auth';

export default {
    namespaced: true,

    state: {
        user: [],
        csrf: '',
        isAuthenticated: false
    },

    getters: {
        user: state => state.user,
        csrf: state => state.csrf,
        isAuthenticated: state => state.isAuthenticated
    },

    mutations: {
        GET_USER_INFO( state, user) {
            state.user = user
        },
        GET_CSRF_INFO( state, csrf) {
            state.csrf = csrf
        },
        GET_ISAUTHENTICATED_INFO( state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        },
        userLogout( state ) {
            state.user = {}
            state.isAuthenticated = false
        }
    },

    actions: {
        getUserInfo( {commit}, form ) {
            Api.getUserCredentials(form).then( response => {
                let csrf = response.data.csrf
                console.log(response)

                commit('GET_CSRF_INFO', csrf)
                Api.checkAuthUser().then( response => {
                    if ( response.data.result ) {
                        let user = response.data.user
                        console.log( response )
                        commit('GET_USER_INFO', user)
                        commit('GET_ISAUTHENTICATED_INFO', true)
                    } else {
                        commit('GET_ISAUTHENTICATED_INFO', false)
                    }
                })
            })
            .catch( error => {

            })                
        },
    }
}