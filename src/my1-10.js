Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [{task: 'kur'}, {task: 'kur2'}, {task: 'kur3'}, {task: 'kur4'}]
        }
    },
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('vue-message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p><slot></slot></p>
                <button class="delete" aria-label="delete" @click="hideMessage"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
     methods: {
        hideMessage() {
            this.isVisible = !this.isVisible;
        }
     }
});

Vue.component('vue-modal', {
    props: ['body'],
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <!-- Any other Bulma elements you want -->
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `,

    methods: {
        toggleModal() {
            return !this.showModal;
        }
    },
})