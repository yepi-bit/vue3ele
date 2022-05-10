<template>
    <div class="screen-capture">xx
        <screen-capture ref="sc" :html="html">Xxxx</screen-capture>
    </div>
</template>
<script>
    import ScreenCapture from '@notadd/vue-screen-capture';
    export default {
        name: 'ScreenCapture',
        components: {
            ScreenCapture
        },

        props: {
            html: Element
        },
        data() {
            return {

            };
        },
    }
</script>
