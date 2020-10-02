<template>
  <td v-if="ticket.atributo == 'NAO ATENDIDA'"> <i class="badge badge-warning"> {{ ticket.atributo }} </i> </td>
</template>

<script>
export default {
  name: "TableTicketItemAtributo",
  data: () => {
    return {};
  },
  props: ["ticket"],
};
</script>

<style>
</style>