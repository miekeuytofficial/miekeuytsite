<script setup lang="ts">
import TestimonialHideable from '@/components/TestimonialHideable.vue';
import Masonry from 'masonry-layout';
import { onMounted, ref, nextTick } from 'vue';
import { testimonials } from '@/util/data';

const masonry = ref(null);
let msnry: Masonry;
onMounted(() => {
    msnry = new Masonry(masonry.value, {
        itemSelector: '.testimonial',
        columnWidth: '.grid-sizer',
        gutter: '.grid-gap-sizer',
        percentPosition: true,
        horizontalOrder: true
    });
});

const handleHiddenChange = async () => {
    await nextTick();
    await msnry.layout();
}


</script>
<template>
    <div class="testimonials-view">
        <div class="page-title">
            <h1>What people say about me</h1>
        </div>
        <div ref="masonry" class="grid">
            <div class="grid-sizer" />
            <div class="grid-gap-sizer" />
            <TestimonialHideable v-for="item in testimonials" :key="item.quoterInfo.name"
                @hidden-change="handleHiddenChange" :quoter-info="item.quoterInfo" :img-src="item.imgUrl"
                :quote="item.quote"></TestimonialHideable>
        </div>
    </div>
</template>


<style lang="scss">
.testimonials-view {
    .grid {
        width: 100%;
        margin-top: 3rem;

        .grid-sizer,
        .testimonial {

            max-width: 49%;

        }

        .grid-gap-sizer {
            width: 2%;
        }

        .testimonial {
            margin-top: 1rem;
        }

        margin-bottom: 1rem;
    }
}

@media (max-width:400px) {
    .testimonials-view .grid .testimonial.long .quote .continue-cover {
        height: 44%;
    }
}
</style>


