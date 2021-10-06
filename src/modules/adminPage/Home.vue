<template>
<div>
  <Header />
    <router-view></router-view>
  <Footer />
</div>
</template>

<script>
import Header from '../../components/Admin/Header'
import Footer from '../../components/Admin/Footer'
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>