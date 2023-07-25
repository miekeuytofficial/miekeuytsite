<script lang="ts" setup>
const textData = {
  'Curious, driven, creative': [`Driven by a natural curiosity and a desire to learn, I strive to bring a sense of enthusiasm to every project I undertake. I am a dedicated, enthusiastic, and dependable team player who is known for problem-solving and bringing a positive attitude to the team. My colleagues appreciate my communication skills and team-oriented approach. I'm often noted for my positive influence on team morale, my readiness to support my peers and my keen eye for detail. `],
  'My journey': [`I've had the opportunity to work on complex projects in my role as a Software Engineer. My experience with Vue.js, TypeScript, SCSS, and NestJS has enabled me to contribute to both internal and client-facing projects, honing my problem-solving skills along the way.`, `Having spent nearly two years studying in Japan, including a year at Sophia University, I've developed a deep appreciation for the country's culture and work ethic. Eager to take on the unique challenges and rewards of working in new environments, I am currently exploring opportunities to leverage my technical skills and positive attitude in Sydney as well as opportunities in Japan that offer visa sponsorship.`],





}
</script>

<template>
  <div class="about-view">
    <div class="page-title">
      <h1>About me</h1>
    </div>
    <div class="page-body">
      <div class="profile-img">
        <!-- <img width="250" src="../assets/profile_img.png" /> -->
      </div>
      <div class="item-group">
        <div v-for="[topic, text] in Object.entries(textData)" :key="topic" class="item">
          <h2 class="header-text">{{ topic }}</h2>
          <div v-for="paragraph in text" :key="paragraph">{{ paragraph }}<br /><br /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-view {
  display: flex;
  flex-direction: column;
  color: white;

  .page-body {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    margin-inline: 4rem;

    .profile-img {
      background-image: url('../assets/profile_img.png');
      margin: 3rem;
      display: flex;

      height: auto;
      width: auto;
      background-image: url(/src/assets/profile_img.png);
      background-size: contain;
      border-radius: 50px;
      background-repeat: no-repeat;
      box-shadow: inset var(--blue-gray) 0 0 10px 10px;
    }

    .item-group {
      display: flex;
      align-items: center;
      align-items: center;
      max-width: 60ch;
      flex-direction: column;
      justify-content: center;
      grid-template-rows: 1fr 1fr;

      .item {
        margin-left: 4rem;

      }
    }
  }
}

@media (max-width:800px) {
  .about-view .page-body .profile-img {
    margin: 1rem
  }
}
</style>
