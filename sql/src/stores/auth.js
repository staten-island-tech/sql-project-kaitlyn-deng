import { defineStore } from 'pinia'
import {supabase} from '../supabase'
export const useAuthStore = defineStore('auth', {
  state: () => ({
   currentUser: null
  }),
  actions: {
   loadUser(){
    this.currentUser = supabase.auth.getUser();
   },
   clearUser(){
    this.currentUser = null;
   }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser;
    }
  }
})