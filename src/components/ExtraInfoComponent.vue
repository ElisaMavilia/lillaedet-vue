<template>
  <section id="extra-info">
    <div
      class="container d-flex align-items-center justify-content-center align-content-center flex-wrap"
    >
      <img id="pin" src="../../public/images/road.png" alt="Parkering Tavla" />
      <div id="parking-text" class="text-uppercase">Alltid Fri Parkering</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2106.21812054473!2d12.121493277512942!3d58.136442074058735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46456b007861e0e9%3A0x4cae5e85156b157c!2sLilla%20Edet%20Tandl%C3%A4karcenter!5e0!3m2!1ssv!2sse!4v1739529844476!5m2!1ssv!2sse"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExtraInfoComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#extra-info {
  background: $shocking_purple;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 20px;
}

img {
  width: 120px;
  height: auto;
  padding: 15px;
}

#pin {
  width: 100px;
  height: auto;
}

#parking-text {
  font-size: 1.3rem;
  padding-right: 50px;
}

iframe {
  max-width: 90%;
  height: 350px;
  border-radius: 10px;
  padding: 20px 0 40px 0px;
}

@media screen and (max-width: 767.98px) {
  #pin {
    width: 90px;
  }
  #parking-text {
    font-size: 1rem;
  }
  iframe {
    max-width: 85%;
  }

  @media (max-width: 575.98px) {
    #pin {
      width: 80px;
    }

    iframe {
      max-width: 70%;
    }
  }
  @media screen and (max-width: 387px) {
    #parking-text {
      font-size: 0.8rem;
      padding-left: 2px;
    }
    iframe {
      max-width: 90%;
    }
  }
}
</style>
