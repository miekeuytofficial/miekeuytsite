<template>
  <div class="home-view dark-bg">

    <div class="body-text">
      <h1>Software engineer.</h1>

      <h2>Creative problem solver</h2>
      <h3>Enthusiastic team player</h3>
      <h3> Driven ・ Dedicated</h3>
      <h3>Eager to learn ・ Curious</h3>
      <h3>Adaptable ・ Attentive</h3>

    </div>


  </div>
</template>

<style lang="scss">
.home-view {
  color: var(--light-blue-gray);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  min-height: 80vh;

  * {
    z-index: 1;
  }

  &::before {
    content: ' ';
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 80vh;
    background-image: url('src/assets/home-bg.png');
    background-size: cover;
    background-position: bottom;
  }

  .body-text {
    display: flex;
    flex-direction: column;
    padding: 2rem;


    h1 {
      font-size: xx-large;
      color: var(--pikachu-yellow);

      text-shadow: var(--dark-blue-gray) 1px 1px 0;

    }

    h2 {
      color: var(--light-gray);
    }

    h3 {
      color: var(--light-blue-gray);
    }



  }
}
</style>