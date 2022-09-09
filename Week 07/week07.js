Vue.component('component-a',{
    data(){
        return{
            message1: "Hello Component One"
        }
    }
})
Vue.component('component-b',{
    data(){
        return{
            message2: "Hello Component Two"
        }
    }
})
Vue.component('component-c',{
    data(){
        return{
            message3: "Hello Component three"
        }
    },
    template:'<div><p>{{message3}}</p><header><slot name="header"></slot></header><slot></slot><footer><slot name="footer"></slot></footer> </div>'
})
Vue.component('component1', {
    template: '<div><p>Component01 Globally Registered</p></div>'
})
var component2 = {template:'<div><p>Component01 Locally registered</p></div>'}
Vue.component('component3', {
    props:['message'],
    template:'<p>{{ message }}</p>'
})
new Vue({
    el: "#app",
    data() {
        return {
            message: "Week 07 Tasks!",
            count: 0
        }
    },
    methods: {
        increaseCount() {
            this.count += 1
        }
    },
    components: {
        component2: component2
    }
})