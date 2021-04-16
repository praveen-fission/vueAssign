<template>
    <div id="headerdiv">
        <h2>This is {{name}} header</h2>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['name'],
};
</script>

<style scoped lang="scss">
$toppyone: 10px;
$heigty: 10vh;

#headerdiv{
    margin-top: $toppyone;
    border: 1px solid blue;
    background-color: #002a38;
    opacity: 2;
    height: $heigty;
    margin-left: 10%;
    color: whitesmoke;
}
</style>
