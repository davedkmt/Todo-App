 let app = new Vue ({
        el:'#taskApp',
        data: {
            tasks: [
                {name: 'Build a Vue.js app', done:false},
                {name: 'Test the app', done:false},
                {name: 'Deploy the app', done:false}
                ]
            },
        methods: {
            addTask: function(event) {
                event.preventDefault();
                this.tasks.push({
                    name: this.tasks.name,
                    done:false
                    });
                },
            deleteTask: function(task) {
                this.tasks.splice(this.tasks.indexOf(task), 1)
            }
        }
    });