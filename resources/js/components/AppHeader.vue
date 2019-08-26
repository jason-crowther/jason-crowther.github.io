<template>
    <header class="container ">
        <div class="header-overlay"></div>
        <div class="content text-center">
            <a href="./" >
                <img src="/assets/images/jc-logo.svg" alt="Jason Crowther Front-end Developer" width="175" height="175" class="animated zoomInDown img-fluid">
            </a>
            <h1><span class="one">Jason Crowther</span><span class="two">Front-end Developer</span><span class="three">and all-round creative.</span></h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    header{
        height: 400px;
        color:#fff;
    }
    .header-overlay{
        background-image: url("../../../assets/images/main-bg.jpg");
        background-image: -moz-linear-gradient(top, rgba(54,64,73,0.6) 30%, rgba(76,90,102,1) 100%), url("../../../assets/images/main-bg.jpg");
        background-image: -webkit-linear-gradient(top, rgba(54,64,73,0.6) 30%,rgba(76,90,102,1) 100%), url("../../../assets/images/main-bg.jpg");
        background-image: linear-gradient(to bottom, rgba(54,64,73,0.6) 30%,rgba(76,90,102,1) 100%), url("../../../assets/images/main-bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        position:absolute;
        width:100%;
        height:400px;
        z-index:-1;
    }

    h1 span{
        display:block;
    }

    .one{
        font-weight: 200;
        color: #a8e637;
        font-size:1.5rem;
        line-height: 2rem;
    }
    .two{
        font-weight: 800;
        font-style:italic;
        color: #fff;
        font-size:4rem;
        line-height: 4rem;
    }
    .three{
        font-weight: 700;
        color: #a8e637;
        font-size:2.3rem;
        line-height: 2rem;
    }
</style>