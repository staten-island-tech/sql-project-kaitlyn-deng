import { defineStore } from 'pinia'

export const useProfilesStore = defineStore('profiles', {
  state: () => ({
    profiles: null
  }),
  actions: {
    getProfiles(){
    }
  }
})
