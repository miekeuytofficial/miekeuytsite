<script setup lang="ts">
defineProps<{
    imgSrc: string
    quoterInfo: { name: string; company: string; role: string; profileUrl: string }
    quote: string
}>()
</script>
<template>
    <div class="testimonial">
        <div class="icon">
            <img :src="imgSrc" />
        </div>
        <div class="quote-wrapper">
            <div class="quote">{{ quote }}</div>
            <div class="quoter-info">
                <a :href="quoterInfo.profileUrl">
                    <div class="quoter-name-role">
                        <div class="quoter-name">{{ `${quoterInfo.name}`}}</div>
                        
                        <div class="company-info">{{ `${quoterInfo.role}, ${quoterInfo.company}` }}
                        </div>
                    </div>
                    <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
                </a>
            </div>


        </div>

    </div>
</template>

<style lang="scss">
.testimonial {
  display: flex;
  min-width: min-content;
//   width: 100%;
  margin-bottom: 1em;
  break-inside: avoid;


  border-radius: 20px;
  padding: 1rem;
  background-color: var(--dark-gray);
  box-shadow: -2px 2px 3px -1px var(--dark-gray);
  --icon-color: var(--light-gray-50);
  --quoter-name-color: var(--pikachu-yellow);
  --quoter-company-color: var(--light-gray);
  --quoter-font-weight: 'normal';
  color: white;
//   overflow: hidden;
gap:1rem;
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
 
    justify-content: flex-start;
    img {
      border: 1px solid transparent;
    //   max-width: 100%;
    width:60px;
    height:60px;
      height: auto;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  .quote {
    margin-right: 1rem;
    word-wrap: break-word;
    white-space: normal;
  }

  .quoter-info {
    display: flex;

    &:hover {
      --icon-color: var(--white);
      --quoter-font-weight: 800;
    }

    text-transform: uppercase;
    font-weight: var(--quoter-font-weight);
    justify-content: space-between;
    font-size: smaller;
    letter-spacing: 0.2rem;
    margin-top: 1rem;

    .quoter-name-role {
      display: grid;
      color: var(--quoter-name-color);
      font-weight: var(--quoter-font-weight);
    //   gap: 0.5rem;
    grid-template-rows: 1fr 1fr;
    // text-align: end;  
    width:max-content;
   
    }
    .quoter-name{
    
    //   margin-right: 1rem;
      
    }
   
    a {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      color: var(--icon-color);
      gap:1rem;
    }

    .company-info {
    //   flex-wrap: wrap;
      display: flex;
    //   flex-direction: column;
    //   width: fit-content;
      color: var(--quoter-company-color);
    }
  }

  .quote-wrapper {
    display: flex;
    flex-direction: column;
    width:100%;
  }
}
</style>
