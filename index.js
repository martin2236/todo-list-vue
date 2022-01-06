
const app = new Vue({
    el:'#app',
    data:{
        titulo:'crud',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea:function(){
            if(this.nuevaTarea){
                this.tareas.push({
                    nombre:this.nuevaTarea,
                    estado:false
                });
                this.nuevaTarea = "";
                localStorage.setItem('todoList', JSON.stringify(this.tareas))
            }
          
        },
        editarTarea:function(index){
            this.tareas[index].estado = !this.tareas[index].estado ;
            localStorage.setItem('todoList', JSON.stringify(this.tareas))
        },
        eliminarTarea:function(index){
            this.tareas.splice(index,1);
            localStorage.setItem('todoList', JSON.stringify(this.tareas))
        }
    },
    created:function(){
        let datos = JSON.parse(localStorage.getItem('todoList'));
        if(datos === null){
            this.tareas =[];
        }else{
            this.tareas = datos
        }
    }
})