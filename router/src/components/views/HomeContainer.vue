<template>
    <div>
        <div v-for="(item,i) in newsList" :key=i>{{item.cparagraph}} <br>
            <img :src="item.image" width="100">
        </div>
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
        for(var i =0 ; i<3 ; i++){
              this.getNews();
        }
    },
    methods:{
        getNews(){
            /*const id = '1'
             this.axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((res) => {
                 console.log(res)
                 if(res.status === 200){
                      this.newsList = res.data.result;
                 }
                }) 
            this.axios.get(`https://easy-mock.com/mock/5d47dc4a7b18701359195de6/example/restful/${id}/list`).then((res)=>{
                console.log(res)
            })*/
            this.axios.get(` https://easy-mock.com/mock/5d4bb1bc80d98b05000cb3b9/test/home`).then((res)=>{
                console.log(res)
                this.newsList.push(res.data.data)
            })
        }
    }
}
</script>

