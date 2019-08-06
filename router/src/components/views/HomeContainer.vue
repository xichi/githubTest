<template>
    <div>home
        <div v-for="(item,i) in newsList" :key=i>{{item.text}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newsList: []
        }
    },
    created(){
        this.getNews()
    },
    methods:{
        getNews(){
            this.axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((res) => {
                 console.log(res)
                 if(res.status === 200){
                      this.newsList = res.data.result;
                 }
                })
        }
    }
}
</script>

