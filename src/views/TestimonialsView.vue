<script setup lang="ts">
import Testimonial from '@/components/Testimonial.vue'
const testimonials = [
  {
    quoterInfo: { name: 'Charbel Ayoub', company: 'Pathzero', role: 'Co-Founder & CTO', profileUrl:`https://www.linkedin.com/in/charbelayoub/`},
    imgUrl:
      'https://media.licdn.com/dms/image/C5603AQHPd_kkhWZxJQ/profile-displayphoto-shrink_100_100/0/1645569976613?e=1695254400&v=beta&t=PEPGq2ljH1jHC3t4z4SBombM-WiE_p1ijvQkDE6Uh2w',
    quote: `Monique joined us as an intern and quickly became an integral part of the team. She shaped our engineering culture through her curiosity and willingness to learn and apply new things. She challenges herself daily and has a strong sense of autonomy in taking on complex projects. Technically, Monique is extremely capable. She is a great communicator and a team player, always willing to support her colleagues.
It was inspiring to watch her journey as she transitioned into a software engineer role. She is dependable, mature, and would be a great addition to any team. During her time with us, Monique made significant contributions to both internal tooling and critical client-facing projects, showcasing her exceptional problem-solving skills and dedication to excellence.`
  },
  {
    quoterInfo: { name: 'Carl Prins', company: 'Pathzero', role: 'Co-Founder & CEO', profileUrl:`https://www.linkedin.com/in/carlprins/` },
    imgUrl: `https://media.licdn.com/dms/image/C5603AQFlvvD_NApbCw/profile-displayphoto-shrink_100_100/0/1645741854224?e=1695254400&v=beta&t=HnNXT_XqR8QwmeoXYU46LeicnPSzjr27sYIoG7KVmZA`,
    quote: `It has been a pleasure seeing Monique develop from being an intern to fully fledged software engineer.
She has been a team player and part of building a great culture.
She has a real attention to detail and has come up with creative ways to problem solve.
I would highly recommend Monique for a software engineer role.`
  },
  {
    quoterInfo: {
      name: 'Andrew Keith Arlen',
      company: 'Pathzero',
      role: 'Principal Software Engineer',
      profileUrl:'https://www.linkedin.com/in/andrewkeitharlen/'
    },
    imgUrl:
      'https://media.licdn.com/dms/image/C4D03AQF57KQlAMYZUA/profile-displayphoto-shrink_100_100/0/1516982075732?e=1695254400&v=beta&t=PYUlMC2z0TygTwCHRTmdZu_18l-8jsBbYj7TeXqNMlE',
    quote: `Monique brings joy and enthusiasm to everything she does. Her infectious positivity lifts her team and is rivaled by her technical software development capabilities, which is second to none. She has an eye for detail coupled with a deep well of knowledge. A very powerful combination.
Having Monique at the daily standup was the perfect start to the day.`
  },
  {
    imgUrl:
      'https://media.licdn.com/dms/image/C4D03AQFp3Wv94DkFPw/profile-displayphoto-shrink_100_100/0/1565652114100?e=1695254400&v=beta&t=7AW0nNcHQ6Yxj3X3owpcjacxKCnZc7E1Ij7nksgk1Cc',
    quoterInfo: {
      name: 'Greyden Scott',
      company: 'Pathzero',
      role: 'Senior Software Engineer',
      profileUrl:'https://www.linkedin.com/in/greyden-scott-734122175/'
    },
    quote: `I had the pleasure of working alongside Monique as a software developer, and I must say, she is truly outstanding. Monique's ability to learn and adapt to new challenges is unparalleled. She tackles complex problems with ease and consistently delivers top-notch solutions.
But that's not all—Monique's positivity is infectious. She radiates enthusiasm, making the workplace a more enjoyable and productive environment for everyone. Her can-do attitude and collaborative spirit are truly commendable.
In summary, I highly recommend Monique to any team looking for a talented and adaptable software developer who brings positivity and energy to every project. It was a privilege to work with her, and I have no doubt she will continue to excel in all her future endeavors.`
  }
]
</script>
<template>
  <div class="testimonials-view">
    <Testimonial
      v-for="item in testimonials"
      :key="item.quoterInfo.name"
      :quoter-info="item.quoterInfo"
      :img-src="item.imgUrl"
      :quote="item.quote"
    ></Testimonial>
  </div>
</template>

<!-- <style lang="scss">
.testimonials-view {
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: auto;
  
}
</style> -->
<style lang="scss">
.testimonials-view {
    padding:2rem;
  column-count: 2;
  column-gap: 1rem;
}




</style>


