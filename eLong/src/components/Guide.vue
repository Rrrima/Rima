<template>
  <div id = "guidePage">
    <div id="singleMo" v-for = "num in range">
      <div id = "titleBlock"> 
        <div class="imgContainer" v-if = "num == 0" > <img src = "../assets/icon1.png"> </div>
        <div class="imgContainer" v-if = "num == 1" > <img src = "../assets/icon2.png"> </div>
        <div class="imgContainer" v-if = "num == 2" > <img src = "../assets/icon3.png">
       </div>
       <div class="titleCotainer"> <p> {{ ilist[num].tname }} </p> </div>
      </div>
      <ul id = "contentBlock">
        <li v-for = "item in ilist[num].content">
          {{ item }}
        </li>
      </ul>
    </div>
    <img src="../assets/more.png" id="moreButton">
  </div>
</template>

<script>
  export default {
    name: 'guidePage',
    data() {
    return {
      range:[0,1,2],
      ilist:[
        { tname: '产品介绍', 
          content: ['产品介绍','交易优势','交易机制','影响价格的基本因素','导电液与股票对比']},
        { tname: 'K线教学', 
          content: ['看K线']},
        { tname: '交易心理', 
          content: ['如何做好心态控制','简单交易系统的建立方法','有助于交易的11个小窍门']}
      ]
    } 
    }
}
</script>

<style src="fe.media/media.css"></style>






