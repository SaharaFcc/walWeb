<template>
  <div class="news">
    <div class="list">
      <h3>列表的懒加载</h3>
      <div v-for="(item, index) in list" :key="index">
        <div>{{ item.id }}</div>
      </div>
      <div>
        <button v-if="moreShowBoolen" @click="moreShow">点击查询更多</button>
        <div v-else>已无更多</div>
      </div>
    </div>
    <div class="list">
      <h3>列表的懒加载--滚动</h3>
      <div>
        <div v-for="(item, index) in list" :key="index" class="scroll-cell">
          <div>{{ item.id }}</div>
        </div>
      </div>
      <div>
        <div v-if="moreShowBoolen">tips：滚动加载更多</div>
        <div v-else>已无更多</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "News",
  data() {
    return {
      list: [],
      moreShowBoolen: false,
      nowPage: 1,
      scrollHeight: 0,
    };
  },
  mounted() {
    this.init();

    window.addEventListener("scroll", () => {
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop; // 滚动条在Y轴上的滚动距离
      const vh =
        document.compatMode === "CSS1Compat"
          ? document.documentElement.clientHeight
          : document.body.clientHeight; // 页面的可视高度（能看见的）
      const allHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ); // 页面的总高度（所有的）
      if (scrollY + vh >= allHeight) {
        // 当滚动条滑到页面底部
        this.scrollMore();
      }
    });
  },
  methods: {
    init() {
      this.$axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (res.data.length <= 10) {
            // 10条数据一页
            this.list = res.data;
            this.moreShowBoolen = false;
          } else {
            this.list = res.data.slice(0, 10);
            this.moreShowBoolen = true;
          }
        });
    },
    // 滚动查询更多
    scrollMore() {
      this.$axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.list = this.list.concat(
            res.data.slice(this.nowPage * 10, (this.nowPage + 1) * 10)
          );
          this.nowPage++;
          if (res.data.length >= this.nowPage * 10) {
            this.moreShowBoolen = true;
          } else {
            this.moreShowBoolen = false;
          }
        });
    },
    //点击查询更多
    moreShow() {
      this.$axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.list = this.list.concat(
            res.data.slice(this.nowPage * 10, (this.nowPage + 1) * 10)
          );
          this.nowPage++;
          if (res.data.length >= this.nowPage * 10) {
            this.moreShowBoolen = true;
          } else {
            this.moreShowBoolen = false;
          }
        });
    },
  },
};
</script>