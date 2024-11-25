
import { lightControl, storeData } from "../firebaseModel"

export default class LightModel {
    constructor(userRef) {
      this.userRef = userRef
    }
  
    changeGroupName(groupID, name){
      this.getGroup(groupID).name = name
    }

    addGroup(){
        let currentIDs = []
        this.userRef.groups.forEach( group => currentIDs.push(group.id))
        i = 1
        while(currentIDs.includes(i)){
            i++
        }
        this.userRef.groups = [...this.userRef.groups, 
          {
            id:i,
            name: 'Group ' + i,
            lights:[], 
            state: 0,
            color: 'FF5E00',
            brightness: 100,
            sensors: {motion: 0}
          }
        ]
        
        this.userRef.groups.sort( (a, b) => a.id - b.id)
    }

    /*
    addGroup(){
        console.log('in model')
        let currentIDs = []
        this.userRef.groups.forEach((item) => {currentIDs.push(item.id)})
        i = 0
        while(currentIDs.contains(i))
            i++
        this.userRef.groups.push({id:i, name: 'Group ' + i, lights:[]})
        this.updateDB(this.userRef)
    }
    */
    changeLightNameInGroup(groupID, lightID, name){
      const group = this.getGroup(groupID)
      oldName = group.lights.find(item => item.id === lightID).name
      oldName = name
    }
  
    changeLightName(lightID, name){
        oldName = this.userRef.lights.find(item => item.id === lightID).name
        oldname = name
    }

    changeLightInGroup(groupID, light){
        const group = this.getGroup(groupID)
        oldLight = group.lights.find(item => item.id === light.id)
        oldLight = light
    }
  
    addLightToGroup(groupID, light) {
      const group = this.getGroup(groupID)
      const existingLightIndex = group.lights.findIndex((item) => item.id === light.id);
  
      if (existingLightIndex !== -1) {
        // update existing light
        group.lights[existingLightIndex] = light;
      } else {
        // add new lightr
        group.lights.push({id: light.id});
      }
  
      this.updateDB(this.userRef);
    }
  
    removeLightFromGroup(groupID, lightID) {
      //Find the group using the groupID
      const group = this.getGroup(groupID)
      //Filter out the light with the lightID
      group.lights = group.lights.filter((item) => item.id !== lightID)
  
      this.updateDB(this.userRef)
    }
  /*
    toggleGroup(groupID) {
      this.getGroup(groupID).lights.forEach((item) => {
        const index = this.userRef.lights.findIndex((l) => l.id === item.id);
        if (index !== -1) {
          savename = this.userRef.lights[index]
          this.userRef.lights[index] = item;
          this.userRef.lights[index].name = savename
        }}  
      )
      
      this.updateDB(this.userRef)
    }
    */
    toggleGroup(groupID){
      const group = this.getGroup(groupID)
      console.log(group)
      group.state = +!group.state
      let lights = []
      group.lights.forEach( groupLight => {
        const light = this.userRef.lights.find(l => l.id === groupLight.id)
        if(light){
          light.state = group.state
          light.color = group.color
          lights = [...lights, light]
        }
      })
      this.updateDB(this.userRef)
      this.updateLights(lights, group)
    }
  
    getAllGroups(){
      return([...this.userRef.groups])
    }

    getAllLightsFromGroup(groupID){
      let lightArray = []
      this.getGroup(groupID).lights.forEach( (gl) => {
        const light = this.userRef.lights.find( l => gl.id === l.id)
        lightArray = [...lightArray, light]
      })

      return(lightArray)
    }
  
    getAllLights(){
      return(this.userRef.lights)
    }
  
    getGroup(groupID){
      return(this.userRef.groups.find(group => group.id === groupID))
    }

    syncGroupLight(light) {
        this.userRef.groups.forEach( (group) => {
            const groupLight = group.lights.find( l => l.id === light.id)
            groupLight.state = light.state
        })
    }
  
    toggleLightSwitch(lightID) {

      const light = this.userRef.lights.find((l) => l.id === lightID)
      
      light.state = + !(light.state)
        
      //this.syncGroupLight(light)
      
      this.updateLights([light])
      this.updateDB(this.userRef)
    }

    getLightsInGroup(groupID){
      const group = this.getGroup(groupID)
      let lights = []
      group.lights.forEach( groupLight => {
        const light = this.userRef.lights.find(l => l.id === groupLight.id)
        if(light)
          lights = [...lights, light]
      })
      return lights
    }

    getDevice(){
      if(this.userRef.device !== '0')
        return this.userRef.device.toString().slice()
      return null
    }
   
    setDevice(serial){
      this.userRef.device =  serial
      this.updateDB(this.userRef)
    }

    turnOffAll(){
      console.log('turnoff')
      this.userRef.groups.forEach( (group) => {
        group.state = 0
        group.mode = "normal"
      })
      this.userRef.lights.forEach( (light) => {
        light.state = 0
      })
      console.log('update')
      this.updateLights(this.userRef.lights, this.userRef.groups[0])
      this.updateDB(this.userRef)
    }

    checkstateOfLight(lightID){
      return(this.userRef.lights.find(item => item.id === lightID))
    }
  
    setMode(groupID, mode){    
      const group = this.getGroup(groupID)
      if(group.mode === mode){
        group.mode = 'normal'
      }
      else {
        group.mode = mode
      }
      let lights = []
      group.lights.forEach( groupLight => {
        const light = this.userRef.lights.find(l => l.id === groupLight.id)
        if(light)
          lights = [...lights, light]
      })
      this.updateLights(lights, group)
      this.updateDB(this.userRef)
    }

    setGroupColor(groupID, color){
      const group = this.getGroup(groupID)
      console.log(group)
      console.log(color)
      group.color = color.slice(1)
      if(group.state){
        let lights = []
        group.lights.forEach( groupLight => {
          const light = this.userRef.lights.find(l => l.id === groupLight.id)
          light.state = group.state
          light.color = group.color
          lights = [...lights, light]
        })
        this.updateLights(lights, group)
      }

      this.updateDB(this.userRef)
    }
  
    setBrightnessGroup(groupID, brightness) {
      //Find the group using the groupID
      const group = this.getGroup(groupID)
      //Find the light using the lightID
      //group.lights.forEach((item) => item.brightness = brightness)
      group.brightness = brightness
  
      this.updateDB(this.userRef)
    }
  
    setBrightnessAll(brightness){
      this.userRef.lights.forEach(item => {item.brightness = brightness})
      this.updateDB(this.userRef)
    }
  
    setColorGroup(groupID, color){
      //Find the group using the groupID
      const group = this.getGroup(groupID)
      //Find the light using the lightID
      //group.lights.forEach((item) => item.color = color)
      group.color = color
  
      this.updateDB(this.userRef)
    }
  
    setColorAll(color){
      this.userRef.lights.forEach(item => {item.color = color})
      this.updateDB(this.userRef)
    }
  
  
    toggleMotionSensor(groupID, state) {
      console.log('Getting group:',groupID)
      const group = this.getGroup(groupID)
      console.log(group)
      group.sensors.motion = +state
      
      const lights = this.getLightsInGroup(groupID)
      
      let command = 'motion:' + group.sensors.motion + '.'
      if(lights.length){
        lights.forEach( (light) => {
          command += light.id + ':' + light.state + ',' + light.color + '.'
        })
        lightControl({control: command}, this.userRef.device)
      }

      this.updateDB(this.userRef)
    }
  
    toggleSoundSensor(lightID, state) {
      //Find the light using the lightID and set the sound sensor state to "state"
      this.userRef.lights.find((item) => item.id === lightID).sensors.sound = state
      
      this.updateDB(this.userRef)
    }
  
    installNewLight(lightID){
      this.userRef.lights.push({
      id:lightID, 
      name: lightID,
      state: false,
      color: 0xffff00,
      brightness: 100,
      mode: 'manual',
      sensors: {
        motion: false,
        sound: false,}
      })
      this.updateDB(this.userRef)
    }

    updateLights(lights, group){
      let command = ''
      
      if(group?.mode){
        command = "mode:" + group.mode + "."
      }

      lights.forEach( (light) => {
        command += light.id + ":" + light.state + "," + light.color + "."
      })
      lightControl({control: command}, this.userRef.device)
    }
  
    updateDB(user) {
        storeData(user)
    }
  }
  
  