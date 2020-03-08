<template>
    <div>
        <div class="article">
                 <h1>Echarts关系图——参差不齐的圆</h1> 
            <div class="content" >
                    <h3>事情起因是这样的：</h3>
                   <p>根据产品要求，UI给了个设计图，如下：</p> 
                    <img src="../../assets/images/article/now.png">
                    <p>一般这种单节点对应的多个节点类型的关系图都是这样的：</p>
                    <p>
                    <img src="../../assets/images/article/2.png">
                    </p>
                    <p>
                    <img src="../../assets/images/article/3.png">
                    </p>
                    <p>
                        圆或左右结构。但是你别说产品想要的图就是比这两个好看。

                    </p>
                        <p> 对于一个长期审美疲劳的前端来说这个图是我这个月见过最舒服的图了，一定要搞出来</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
img{
    wdith:20rem;
    height:20rem;
}
.article{
    width:30%;
    margin: 0 auto;
    height: 10rem;
}

.content{
    color:#555;
    line-height: 1rem;

}
</style>