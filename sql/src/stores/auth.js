import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return{
            currentUser: null,
        };
    },
    actions:{
        loadUser() {
            this.currentUser = supabase.auth.user();
        },
        clearUser(){
            this.currentUser=null;
        },
    },
    getters:{
        isAuthenticated(){
            return !!this.currentUser;
        },
    },
});
