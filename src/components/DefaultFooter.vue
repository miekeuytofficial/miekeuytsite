<template>
  <footer class="default-footer">
    <div class="default-footer-inner">
      <div class="copyright">
        Monique Uytterhoeven-Spark 2024<font-awesome-icon icon="fa-regular fa-copyright" />
      </div>
      <div class="resume">
        <a
          href="/MoniqueUytterhoevenSpark_Resume.pdf"
          download="MoniqueUytterhoevenSpark_Resume"
          aria-label="Download resume"
          ><font-awesome-icon icon="fa-solid fa-file-arrow-down" size="md" />Download resume</a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.default-footer {
  z-index: 4;
  position: absolute;
  width: 100%;

  .default-footer-inner {
    display: flex;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    color: var(--footer-font-color); //var(--gray);
    background-color: var(--footer-bg); //var(--darkest-gray);

    .copyright {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .resume {
      a {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      &:hover {
        color: var(--footer-font-color-hover); //var(--light-gray);
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 500px) {
  .default-footer .default-footer-inner {
    flex-direction: column;
  }
}
</style>
