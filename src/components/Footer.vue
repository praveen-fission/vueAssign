<template>
    <div>
  <ul>
    <li><a href="https://www.servies.com">Services</a></li>
    <li><a href="https://www.about.com">About Us</a></li>
    <li><a href="https://www.email.com">Email</a></li>
    <li><a href="https://www.customers.com">Customers</a></li>
    <li><a href="https://www.contact.com">Contact Us</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
$gappy: 24px;
$toppytwo: 500px;
$leftyone: 10%;

ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: $gappy;
  justify-items: center;
  margin: auto;
}

@media (min-width: 500px) {
  ul {
    grid-auto-flow: column;
  }
}

a {
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
}

a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

div {
  display: flex;
  margin-top: $toppytwo;
  margin-left: $leftyone;
  position: fixed;
  bottom: 0;
  margin-right: 10px;
  height: 8vh;
  width: 89%;
  background-color: #002a38;
  line-height: 1.3;
  font-family: Menlo, monospace;
}
</style>
