<script lang="ts" setup>
import {
  FistBumpIcon,
  HandshakeCheckIcon,
  LearningIcon,
  LightbulbQuestionIcon,
  MagnifyingGlassIcon,
  MultitaskingPersonIcon,
  PositiveInfluenceIcon,
  PositivityIcon,
  WorldLanguageIcon
} from '@/components/icon-components'
import { ref } from 'vue'
import HeartFireIcon from './icon-components/HeartFireIcon.vue'

const skillsWithIcons = [
  { key: 'dependable', icon: HandshakeCheckIcon },
  { key: 'Team motivator', icon: PositiveInfluenceIcon },
  { key: 'Positive attitude', icon: PositivityIcon },
  { key: 'Quick learner', icon: LightbulbQuestionIcon },
  { key: 'Cross-cultural Communication', icon: WorldLanguageIcon },
  { key: 'Attention to detail', icon: MagnifyingGlassIcon },
  { key: 'Adaptable', icon: MultitaskingPersonIcon },
  { key: 'Collaboration', icon: FistBumpIcon },
  { key: 'Passionate', icon: HeartFireIcon },
  { key: 'Learning Mindset', icon: LearningIcon }
]
const softSkillMasonryRef = ref()

const determineIconSize = () => {
  if (window.innerWidth < 400) {
    return '3rem'
  } else {
    return '4rem'
  }
}
</script>
<template>
  <div ref="softSkillMasonryRef" class="soft-grid">
    <div
      class="soft-skill soft-skill-with-icon"
      v-for="wordWithIcon in skillsWithIcons"
      :key="wordWithIcon.key"
    >
      <component
        :is="wordWithIcon.icon"
        :width="determineIconSize()"
        :height="determineIconSize()"
      />
      <div class="soft-skill-inner">{{ wordWithIcon.key }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.soft-grid {
  --soft-skill-width: 15%;
  --soft-skill-font-size: var(--skills-view-font-size);
  --soft-skill-padding: 0.5rem;
  --soft-skill-border: var(--dark-bg-window-dark-inner-light-border); //1px solid var(--light-gray);
  --soft-skill-margin-top: var(--skills-view-skill-margin-top);
  --soft-skill-border-radius: var(--skills-view-border-radius);
  --soft-skill-color: black;
  --soft-skill-font-weight: var(--skills-view-font-size);
  --soft-skill-background: var(--dark-bg-window-dark-inner-light); //var(--lighter-gray);
  --soft-skill-inner-font-weight: 500;
  --soft-skill-inner-color: var(--dark-bg-window-dark-inner-light-text); //var(--darkest-gray);
  --soft-skill-gutter-sizer-width: var(--skills-view-gutter-sizer-width);

  margin-inline: 1rem;
  display: flex;
  align-items: center;
  background-color: var(--dark-bg-window-dark); //var(--mid-gray);
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .soft-skill-grid-sizer,
  .soft-skill,
  .soft-skill-gutter-sizer {
    width: var(--soft-skill-width);
    height: min-content;
  }

  .soft-skill {
    font-size: var(--soft-skill-font-size);
    padding: var(--soft-skill-padding);
    border: var(--soft-skill-border);
    margin-top: var(--soft-skill-margin-top);
    border-radius: var(--soft-skill-border-radius);
    text-transform: capitalize;
    color: var(--soft-skill-color);
    font-weight: var(--soft-skill-font-weight);
    min-width: fit-content;
    margin: auto;

    width: 15%;

    border-radius: 20px;

    .soft-skill-inner {
      display: flex;
      align-content: center;
      text-align: center;
      width: 100%;
      height: 100%;
    }
  }

  .soft-skill-with-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--soft-skill-background) !important;

    .soft-skill-inner {
      color: var(--soft-skill-inner-color);
      font-weight: var(--soft-skill-inner-font-weight);
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .soft-skill-gutter-sizer {
    width: var(--soft-skill-gutter-sizer-width);
  }
}

@media (max-width: 500px) {
  .soft-grid .soft-skill {
    width: 45%;

    .soft-skill-inner {
      width: min-content;
    }
  }
}
</style>
