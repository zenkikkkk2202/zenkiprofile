<template>
  <div class="works">
    <h1>Works</h1>
    <div>
      <ul>
        <li class="work">
          <label class="open" for="pop-up"><img src="../assets/baseballwear.png" class="work-img"></label>
          <input type="checkbox" id="pop-up">
            <div class="overlay">
              <div class="window">
                <label class="close" for="pop-up">close</label>
                  <p class="text">機能<br>プロ野球特化のコーディネートサイト。CRUD機能やフォロー、いいね機能などを搭載。</p>
                  <p class="text-used">使用技術<br>Ruby,Ruby on Rails,Heroku,AWSS3</p>
                  <p class="text-url">URL<br><a href="https://baseballwear.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://baseballwear.herokuapp.com/</a></p>
              </div>
            </div>
        </li>

      </ul>
    </div>
  
  </div>
</template>

<style scoped>
h1{
  color: orange;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 60px;
}

.works{
  margin: 2%;
}

.work{
  width: 40vw;
  height: 40vh;
  display: inline-block;
  background-color: f7f7f7;
  margin: 15px 0 0 15px;
}

.work:hover{
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
	transform: translateY(-0.1875em);
}

.work-img{
  height: 100%;
  width: 100%;
}

#pop-up {
	display: none; /* label でコントロールするので input は非表示に */
}

.overlay {
	display: none; /* input にチェックが入るまでは非表示に */
}

#pop-up:checked + .overlay {
	display: block;
	z-index: 9999;
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
}

.window {
	width: 90vw;
	max-width: 560px;
	height: 240px;
	background-color: #ffffff;
	border-radius: 5px;
	justify-content: center;
  position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.text {
	font-size: 14px;
  margin-top: 30px;
}

.close {
  right: 10;
	cursor:pointer;
	font-size: 20px;
  position: fixed;
}



</style>