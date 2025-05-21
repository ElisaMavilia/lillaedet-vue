<template>
  <section class="">
    <iframe
      src="https://widget.reco.se/v2/venues/5912418/horizontal/xlarge?inverted=false&border=true"
      title="Lilla Edet Tandläkarcenter AB - Omdömen på Reco"
      height="225"
      style="
        width: 80%;
        margin: 0 auto;
        border: 0;
        display: block;
        overflow: hidden border;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
      "
      data-reactroot
    ></iframe>
  </section>
</template>

<script>
export default {
  name: "FeedbackComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
section {
  padding: 90px;
  background-color: $shocking_purple;
}
</style>
