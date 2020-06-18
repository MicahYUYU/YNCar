<template>
  <div class="New">
    <div class="picture">
      <img :src='new_url'>
    </div>
    <div class="year"><span class='year-cont'>{{new_year}}</span></div>
    <div class="date">{{new_date}}</div>
    <div class="title">{{new_title}}</div>
    <div class="content">{{new_content}}</div>
    <div class="icon">
      <img src="@assets/img_enterprise/circle.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "New",
  props: {
    new_title: String,
    new_year: String,
    new_date: String,
    new_url: String,
    new_content: String
  },
  date () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.New {
  position: relative;
  margin: 40px auto;
  width: 100%;
  height: 350px;
  border: solid 1px #dddddd;
  text-align: left;

  .picture {
    position: absolute;
    left: 40px;
    top: 30px;
    width: 260px;
    height: 300px;
    overflow: hidden;
    box-shadow: -3px 4px 9px 2px rgba(50, 50, 60, 0.5);
    // display: inline-block;
    img {
      //   width: 100%;
      height: 100%;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .year {
    position: absolute;
    top: 45px;
    left: 30px;
    background-color: #0f6bb0;
    width: 60px;
    height: 35px;
    color: #fff;
    .year-cont {
      position: relative;
      top: 8px;
      left: 10px;
      font-weight: bold;
    }
  }
  .date {
    position: absolute;
    top: 80px;
    left: 41px;
    font-size: 18px;
    font-weight: bolder;
    width: 30px;
    color: #fff;
  }
  .title {
    position: absolute;
    top: 70px;
    left: 350px;
    font-size: 25px;
    font-weight: initial;
    color: #666666;
  }
  .content {
    position: absolute;
    top: 140px;
    left: 350px;
    width: 72%;
    color: #666666;
    font-size: 15px;
  }
  .icon {
    width: 30px;
    background-image: url("../../assets/img_enterprise/arrow.png");
    background-repeat: no-repeat;
    background-position: 11px 9px;
    position: absolute;
    left: 370px;
    bottom: 30px;
    cursor: pointer;
    &:hover img {
      transform: rotate(360deg);
    }
    img {
      transition: all 1s;
    }
  }
}
</style>
