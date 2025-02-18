<template>
  <section id="faq-content" class="pb-5">
    <div
      style="visibility: hidden; position: absolute; width: 0px; height: 0px"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 24 24" id="expand-more">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol viewBox="0 0 24 24" id="close">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
      </svg>
    </div>

    <details>
      <summary>
        Vad kostar en behandling?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Totally. Totally does.</p>
    </details>

    <details>
      <summary>
        Kan man delbetala?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Of course you can, we won't stop you.</p>
    </details>

    <details>
      <summary>
        Hur kan man boka/omboka/avboka tiden?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Only your imagination my friend. Go forth!</p>
    </details>

    <details>
      <summary>
        Är ni anslutna till Försäkringskassan?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Only your imagination my friend. Go forth!</p>
    </details>

    <details>
      <summary>
        Är ni anslutna till Försäkringskassan?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Only your imagination my friend. Go forth!</p>
    </details>

    <details>
      <summary>
        Är ni anslutna till Försäkringskassan?
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more"
          />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation"
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p>Only your imagination my friend. Go forth!</p>
    </details>
  </section>
</template>

<script>
export default {
  name: "FaqComponent",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#faq-content {
  margin-right: 100px;
  margin-top: 50px;
  cursor: pointer;
}

details {
  width: 900px;
  min-height: 5px;
  max-width: 700px;
  padding: 30px 70px 25px 45px;
  margin: 0 auto;
  position: relative;
  font-size: 1.2rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.3s;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
}

details + details {
  margin-top: 20px;
}

details[open] {
  min-height: 50px;
  background-color: #f6f7f8;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
}

details p {
  color: #96999d;
  font-weight: 300;
}

summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

summary:focus {
  outline: none;
}

summary:focus::after {
  content: "";
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0 0 1px $purple_light;
  border-radius: 15px;
}

summary::-webkit-details-marker {
  display: none;
}

.control-icon {
  fill: rebeccapurple;
  transition: 0.3s ease;
  pointer-events: none;
}

.control-icon-close {
  display: none;
}

details[open] .control-icon-close {
  display: initial;
  transition: 0.3s ease;
}

details[open] .control-icon-expand {
  display: none;
}

/* MEDIA QUERIES Computer first */

/* Large (lg) ≥992px -> laptop */
@media (max-width: 1199.98px) {
  #faq-content {
    margin-right: 100px;
    margin-top: 50px;
    cursor: pointer;
  }

  details {
    width: 900px;
    min-height: 5px;
    max-width: 550px;
    padding: 30px 70px 25px 45px;
    margin: 0 auto;
    position: relative;
    font-size: 1rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-sizing: border-box;
    transition: all 0.3s;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  }

  details + details {
    margin-top: 20px;
  }

  details[open] {
    min-height: 50px;
    background-color: #f6f7f8;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  }

  details p {
    color: #96999d;
    font-weight: 300;
  }

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }

  summary:focus {
    outline: none;
  }

  summary:focus::after {
    content: "";
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 0 1px $purple_light;
    border-radius: 15px;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .control-icon {
    fill: rebeccapurple;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .control-icon-close {
    display: none;
  }

  details[open] .control-icon-close {
    display: initial;
    transition: 0.3s ease;
  }

  details[open] .control-icon-expand {
    display: none;
  }
}
</style>
