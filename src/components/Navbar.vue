<template>
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
    </nav>
</template>
<script>
//모듈로 내보낼때는 반드시 default로 내보내야 한다.
//컴포넌트 이름을 name 속성에 지정한다. 또한 너무 단순하지 않도록 설정한다.
export default {
    name: "NavbarComponent",
}
</script>
<style>
    .navbar {
        background-color: #333;
        padding : 20px;
        text-align : center
    }

    .navbar a {
        color: white;
        padding : 1em;
        text-decoration: none;
    }
</style>