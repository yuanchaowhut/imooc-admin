<template>
  <div class="pan-item" :style="{ zIndex: zIndex, height: height, width: width }">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot/>
      </div>
    </div>
    <div :style="{ backgroundImage: `url(${image})` }" class="pan-thumb"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String
  },
  zIndex: {
    type: Number,
    default: 1
  },
  width: {
    type: String,
    default: '150px'
  },
  height: {
    type: String,
    default: '150px'
  }
})
</script>

<style lang="scss" scoped>
.pan-item {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  .pan-info {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
    overflow: hidden;

    h3 {
      position: relative;
      height: 85px;
      margin: 0 60px;
      padding: 22px 0 0 0;
      color: #fff;
      font-size: 14px;
      font-family: 'Open Sans', Arial, sans-serif;
      text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    p {
      padding: 10px 5px;
      margin: 0 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      color: #fff;
      font-style: italic;
      font-size: 12px;

      a {
        display: block;
        width: 80px;
        height: 80px;
        padding-top: 24px;
        margin: 7px auto 0;
        border-radius: 50%;
        color: #333;
        font-style: normal;
        font-size: 9px;
        font-weight: 700;
        font-family: 'Open Sans', Arial, sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: rgba(255, 255, 255, 0.3);
        opacity: 0;
        transition: transform 0.3s ease-in-out 0.2s,
        opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;
        transform: translateX(60px) rotate(90deg);
      }

      a:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }

    .pan-info-roles-container {
      padding: 20px;
      text-align: center;
    }
  }

  .pan-thumb {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-position: center center;
    background-size: cover;
    transform-origin: 95% 40%;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }
}

.pan-item:hover .pan-thumb {
  transform: rotate(-110deg);
}

.pan-item:hover .pan-info p a {
  opacity: 1;
  transform: translateX(0px) rotate(0deg);
}
</style>
