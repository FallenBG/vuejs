

Vue.component('progress-view', {
    data() {
        return {
            completionRate: 0
        }
    },
});



new Vue({
    el: '#Lesson15',
});





















Vue.component('modal', {
    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="title"></slot>
                </p>
              <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
                <slot>
                    Default Content if nothig is here
                </slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <div>
                        <button class="button is-success">OK - default</button>
                    </div>
                </slot>
            </footer>
          </div>
        </div>
    `,
});


new Vue({
    el: '#Lesson14',

    data() {
        return {
            showModal: false
        }
    },

    methods: {
        toggleModal() {
            return this.showModal = !this.showModal;
        }
    },

});


















Vue.component('coupon', {
    template: `
        <input placeholder="kur" @blur="onCouponApplied">
    `,

    methods: {
        onCouponApplied() {
            // insted this use Event to go trough general event handler in the parent
            Event.fire('applied');
        }
    },
});

// Event wrapper
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    // Below are 2 wrapper functions if we don't wanna use $on and $emit every time. Instead we use fire and listen
    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

new Vue({
    el: '#Lesson12',
    data() {
        return {
            couponApplied: false
        }
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    },

    created() {
        // This way we trigger the action for every child that had this event.
        Event.listen('applied', () => alert('adasdsd'));
    }
});













Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            
            <div class="tab-details">
                <slot></slot>
            </div>
            
        </div>
    `,

    data() {
        return {
            tabs: []
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            })
        }

    },

});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },

    data() {
        return {
            isActive: false
        }
    },

    mounted() {
        this.isActive = this.selected;
    },

    computed: {
        href() {
            return "#"+this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
});

new Vue ({
    el: '#Lesson11'
});
