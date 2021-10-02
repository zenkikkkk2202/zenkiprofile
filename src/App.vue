<template>
  <div id="app">
    <nav>
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="/works" tag="li">Works</router-link>
      <router-link to="/about" tag="li">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav{
  text-align: center;
}

nav li{
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  list-style: none;
  display: inline-block;
  width: 10%; /* ここで項目の幅を指定します */
}
 
nav li:hover{
    cursor: pointer;
    border-bottom: 2px solid#808080; /* 下線の太さや色を指定します */
}

.router-link-exact-active{
  color: gray;
}

</style>
