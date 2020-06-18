<template>
  <div class="New">
    <div class="picture">
      <img id='pic' src="">
    </div>
    <div class="year"><span class='year-cont'>{{new_year}}</span></div>
    <div class="date">{{new_date}}</div>
    <div class="title">{{new_title}}</div>
    <div class="content">{{new_content}}</div>
    <div class="icon">
      <!-- <img src="../../assets/img_enterprise"> -->
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
    assignSrc () {
      this.$('#pic').attr('src', this.new_url);
    }
  },
  mounted () {
    this.assignSrc();
  }
}
</script>

<style lang="scss" scoped>
.New {
  width: 100%;
  height: 350px;
  border: solid 1px #dddddd;
  text-align: left;

  .picture {
    position: relative;
    left: 40px;
    top: 30px;
    width: 260px;
    height: 300px;
    display: inline-block;
    img {
      width: 100%;
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
}
</style>
